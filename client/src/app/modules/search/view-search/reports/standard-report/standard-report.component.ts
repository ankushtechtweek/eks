import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as lodash from 'lodash';
import { Subscription } from 'rxjs';
import PGConstant from 'src/app/modules/shared/constants';
import { ApplicationService } from 'src/app/modules/shared/services/application/application.service';
import { CommonService } from 'src/app/modules/shared/services/common/common.service';
import { SharedService } from 'src/app/modules/shared/services/shared/shared.service';
import { CurrentUserService } from 'src/app/modules/_services/current-user.service';
import Swal from 'sweetalert2';
import * as _ from 'underscore';

@Component({
  selector: 'app-standard-report',
  templateUrl: './standard-report.component.html',
})
export class StandardReportComponent implements OnInit, OnDestroy {
  readonly PGConstant = PGConstant;
  private subscription!: Subscription;
  private psId: string;
  public pdfURl!: string;
  constructor(
    private appService: ApplicationService,
    private route: ActivatedRoute,
    public currentUser: CurrentUserService,
    private ss: SharedService,
    public commonService: CommonService,
  ) {
    this.psId = this.route.parent?.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.isStandardExist();
  }

  private isStandardExist() {
    this.subscription = this.ss.appOrders.subscribe((data: any) => {
      if (data && data.length) {
        const isStandardPDF = _.pluck(data, 'orderType').includes('Title');
        if (!isStandardPDF) return;
        const deed = this.ss.appOrders
          .getValue()
          .find((item: any) => item.orderType === 'Title');
        this.getStandardPDF(deed.pdfFileName);
      }
    });
  }

  private async getStandardPDF(pdfFile: string) {
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
    try {
      const result = await this.appService.downloadPDF(
        'Standard',
        this.psId,
        '',
        ''
      );
      if (result.statusCode === 100) {
        const address = this.ss.propertyDetails.propertyAddressNavigation;
        const fileName = `${address.street}, ${address.state.abbreviation} ${address.zipCode}-report`;
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

  private updateAppOrder(appOrder: any) {
    const isStandard = _.pluck(
      this.ss.appOrders.getValue(),
      'orderType'
    ).includes('Title');
    const obj = lodash.mapKeys(appOrder, (v, k) => lodash.camelCase(k));
    if (isStandard) {
      const index = _.findIndex(this.ss.appOrders.getValue(), {
        orderType: 'Title',
      });
      this.ss.appOrders.getValue().splice(index, 1);
      this.ss.appOrders.getValue().push(obj);
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
      this.ss.appOrders.next(this.ss.appOrders.getValue());
      return;
    }
    const newArray = this.ss.appOrders.getValue();
    newArray.push(obj);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
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
