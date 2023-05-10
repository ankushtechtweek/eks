import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationService } from 'src/app/modules/shared/services/application/application.service';
import Swal from 'sweetalert2';
import { CurrentUserService } from 'src/app/modules/_services/current-user.service';
import { SharedService } from 'src/app/modules/shared/services/shared/shared.service';
import * as _ from 'underscore';
import * as lodash from 'lodash';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/modules/shared/services/common/common.service';
import PGConstant from 'src/app/modules/shared/constants';

@Component({
  selector: 'app-deed-abstract-report',
  templateUrl: './deed-abstract-report.component.html',
})
export class DeedAbstractReportComponent implements OnInit, OnDestroy {
  readonly PGConstant = PGConstant;
  private psId: string;
  private subscription!: Subscription;
  public pdfURl!: string;
  constructor(
    private appService: ApplicationService,
    private route: ActivatedRoute,
    public currentUser: CurrentUserService,
    public ss: SharedService,
    public commonService: CommonService,
    private router: Router
  ) {
    this.psId = this.route.parent?.snapshot.params['id'];
  }
  ngOnInit() {
    this.isDeedExist();
  }

  private async isDeedExist() {
    this.subscription = this.ss.appOrders.subscribe((data: any) => {
      if (data && data.length) {
        const isDeedPDF = _.pluck(data, 'orderType').includes('Deed');
        if (!isDeedPDF) return;
        const deed = this.ss.appOrders
          .getValue()
          .find((item: any) => item.orderType === 'Deed');
        this.getDeedPDF(deed.pdfFileName);
      }
    });
  }

  private async getDeedPDF(pdfFile: string) {
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

  public async downloadReport(): Promise<void> {
    const propertReportCount = this.currentUser.reportCount;
    if (!propertReportCount)
      return this.commonService.downloadConfirmation(
        this.currentUser.subscriptionType
      );
    try {
      const result = await this.appService.downloadPDF(
        'Deed',
        this.psId,
        '',
        ''
      );
      if (result.statusCode === 100) {
        const address = this.ss.propertyDetails.propertyAddressNavigation;
        const fileName = `${address.street}, ${address.state.abbreviation} ${address.zipCode}-Deed`;
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
    this.commonService.showAlert('Deed').then((result) => {
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
    const isDeed = _.pluck(this.ss.appOrders.getValue(), 'orderType').includes(
      'Deed'
    );
    const obj = lodash.mapKeys(appOrder, (v, k) => lodash.camelCase(k));
    if (isDeed) {
      const index = _.findIndex(this.ss.appOrders.getValue(), {
        orderType: 'Deed',
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
