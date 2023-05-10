import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as lodash from 'lodash';
import { Subscription } from 'rxjs';
import PGConstant from 'src/app/modules/shared/constants';
import { ApplicationService } from 'src/app/modules/shared/services/application/application.service';
import { CommonService } from 'src/app/modules/shared/services/common/common.service';
import { LoaderService } from 'src/app/modules/shared/services/loader/loader.service';
import { SharedService } from 'src/app/modules/shared/services/shared/shared.service';
import { CurrentUserService } from 'src/app/modules/_services/current-user.service';
import Swal from 'sweetalert2';
import * as _ from 'underscore';

@Component({
  selector: 'app-mortgage-abstract-report',
  templateUrl: './mortgage-abstract-report.component.html',
})
export class MortgageAbstractReportComponent implements OnInit, OnDestroy {
  readonly PGConstant = PGConstant;
  private subscription!: Subscription;
  private psId: string;
  public pdfURl!: string;
  constructor(
    private appService: ApplicationService,
    private route: ActivatedRoute,
    public currentUser: CurrentUserService,
    public ss: SharedService,
    private modalService: NgbModal,
    public commonService: CommonService,
    private router: Router,
    private loaderService: LoaderService
  ) {
    this.psId = this.route.parent?.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.isMortgageExist();
  }

  private isMortgageExist() {
    this.subscription = this.ss.appOrders.subscribe((data: any) => {
      if (data && data.length) {
        const isMortgagePDF = _.pluck(data, 'orderType').includes('Mortgage');
        if (!isMortgagePDF) return;
        const deed = this.ss.appOrders
          .getValue()
          .find((item: any) => item.orderType === 'Mortgage');
        this.getMortgagePDF(deed.pdfFileName);
      }
    });
  }

  private async getMortgagePDF(pdfFile: string) {
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
    if (!propertReportCount) return this.commonService.downloadConfirmation(this.currentUser.subscriptionType);
    try {
      const result = await this.appService.downloadPDF(
        'Mortgage',
        this.psId,
        '',
        ''
      );
      if (result.statusCode === 100) {
        const address = this.ss.propertyDetails.propertyAddressNavigation;
        const fileName = `${address.street}, ${address.state.abbreviation} ${address.zipCode}-Mortgage`;
        const response = result.result;
        if (response.type === 'link') {
          this.commonService.downloadPDF(response.data, fileName);
          this.pdfURl = response.data;
          this.updateAppOrder(response.AppOrder);
        } else if (response.type === 'base64') {
          this.commonService.base64PDFDownload(response.data, fileName + '.pdf');
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
    this.commonService.showAlert('Mortgage').then((result) => {
      if (result.isConfirmed) {
        this.downloadReport();
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
    const isMortgage = _.pluck(
      this.ss.appOrders.getValue(),
      'orderType'
    ).includes('Mortgage');
    const obj = lodash.mapKeys(appOrder, (v, k) => lodash.camelCase(k));
    if (isMortgage) {
      const index = _.findIndex(this.ss.appOrders.getValue(), {
        orderType: 'Mortgage',
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

  private getErrorMessage(error: unknown) {
    if (error instanceof Error) return error.message;
    return String(error);
  }

  private errorAlert(message: string) {
    Swal.fire({
      icon: 'error',
      text: message,
    });
  }

  public get isPermitted() {
    return PGConstant.PREMIUM_PLANS.includes(this.currentUser.subscriptionType);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
