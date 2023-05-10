import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as lodash from 'lodash';
import { Subscription } from 'rxjs';
import PGConstant from 'src/app/modules/shared/constants';
import { ApplicationService } from 'src/app/modules/shared/services/application/application.service';
import { CommonService } from 'src/app/modules/shared/services/common/common.service';
import { SharedService } from 'src/app/modules/shared/services/shared/shared.service';
import { CurrentUserService } from 'src/app/modules/_services/current-user.service';
import Swal from 'sweetalert2';
import * as _ from 'underscore';
import { OptionalModalComponent } from './optional-modal/optional-modal.component';

@Component({
  selector: 'app-open-liens-abstract-report',
  templateUrl: './open-liens-abstract-report.component.html',
})
export class OpenLiensAbstractReportComponent implements OnDestroy {
  readonly PGConstant = PGConstant;
  private psId: string;
  private subscription!: Subscription;
  public pdfURl!: string;
  private optionalFields = {
    ownerName: '',
    refId: '',
  };
  constructor(
    private appService: ApplicationService,
    private route: ActivatedRoute,
    private router: Router,
    public currentUser: CurrentUserService,
    private ss: SharedService,
    private modalService: NgbModal,
    public commonService: CommonService
  ) {
    this.psId = this.route.parent?.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.isLienExist();
  }

  private async isLienExist() {
    this.subscription = this.ss.appOrders.subscribe((data: any) => {
      if (data && data.length) {
        const isLienPDF = _.pluck(data, 'orderType').includes('Lien');
        if (!isLienPDF) return;
        const deed = this.ss.appOrders
          .getValue()
          .find((item: any) => item.orderType === 'Lien');
        this.getLienPDF(deed.pdfFileName);
      }
    });
  }

  private async getLienPDF(pdfFile: string) {
    if (!pdfFile) return;
    try {
      const result = await this.appService.getReportPDF(pdfFile);
      if (result.statusCode === 100) {
        this.pdfURl = result.result;
      } else {
        this.errorAlert(result.statusMessage);
      }
    } catch (e) {
      this.errorAlert(this.getErrorMessage(e));
    }
  }

  public async downloadReport() {
    const propertReportCount = this.currentUser.reportCount;
    if (!propertReportCount)
      return this.commonService.downloadConfirmation(
        this.currentUser.subscriptionType
      );
    try {
      const result = await this.appService.downloadPDF(
        'Lien',
        this.psId,
        this.optionalFields.ownerName,
        this.optionalFields.refId
      );
      if (result.statusCode === 100) {
        const address = this.ss.propertyDetails.propertyAddressNavigation;
        const fileName = `${address.street}, ${address.state.abbreviation} ${address.zipCode}-Liens`;
        const response = result.result;
        if (response.type === 'link') {
          this.commonService.downloadPDF(response.data, fileName);
          this.pdfURl = response.data;
          this.updateAppOrder(response.AppOrder);
        } else if (response.type === 'base64') {
          this.commonService.base64PDFDownload(response.data, fileName);
        }
        this.currentUser.currentUserValue['propertyReportCount'] =
          result.result.propertyReportCount;
        this.currentUser.currentUserSubject.next(
          this.currentUser.currentUserValue
        );
      } else {
        this.errorAlert(result.statusMessage);
      }
    } catch (e) {
      this.errorAlert(this.getErrorMessage(e));
    }
  }

  public warningAlert() {
    let that = this;
    this.commonService.showAlert('Lien').then((result) => {
      if (result.isConfirmed) {
        this.viewOptionalModal();
      }
    });
    const element = <HTMLInputElement>(
      document.getElementById('navigate-action')
    );
    if (element) {
      element.onclick = function () {
        that.router.navigate(['download-history']);
        Swal.close();
      };
    }
  }

  private updateAppOrder(appOrder: any) {
    const isLien = _.pluck(this.ss.appOrders.getValue(), 'orderType').includes(
      'Lien'
    );
    const obj = lodash.mapKeys(appOrder, (v, k) => lodash.camelCase(k));
    if (isLien) {
      const index = _.findIndex(this.ss.appOrders.getValue(), {
        orderType: 'Lien',
      });
      this.ss.appOrders.getValue().splice(index, 1);
      this.ss.appOrders.getValue().push(obj);
      this.subscription.unsubscribe();
      this.ss.appOrders.next(this.ss.appOrders.getValue());
      return;
    }
    const newArray = this.ss.appOrders.getValue();
    newArray.push(obj);
    this.subscription.unsubscribe();
    this.ss.appOrders.next(newArray);
  }

  private errorAlert(message: string) {
    Swal.fire({
      icon: 'error',
      text: message,
    });
  }

  public get isCombineAvailable() {
    if (
      this.ss.isLastTransferDocument.getValue() &&
      this.ss.isLastFinanceDocument.getValue()
    )
      return true;
    return false;
  }

  private getErrorMessage(error: unknown) {
    if (error instanceof Error) return error.message;
    return String(error);
  }

  public get isPermitted() {
    return PGConstant.PREMIUM_PLANS.includes(this.currentUser.subscriptionType);
  }

  public viewOptionalModal() {
    const modalRef = this.modalService.open(OptionalModalComponent, {
      windowClass: 'custom-modal',
    });
    const subscription = modalRef.componentInstance.optionalFields.subscribe(
      (data: any) => {
        this.optionalFields = data;
        this.downloadReport();
      }
    );
    this.subscription.add(subscription);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
