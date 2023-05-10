import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as saveAs from 'file-saver';
import { Subscription } from 'rxjs';
import { ApplicationService } from 'src/app/modules/shared/services/application/application.service';
import { CommonService } from 'src/app/modules/shared/services/common/common.service';
import { LoaderService } from 'src/app/modules/shared/services/loader/loader.service';
import { SharedService } from 'src/app/modules/shared/services/shared/shared.service';
import { StaticService } from 'src/app/modules/shared/services/static/static.service';
import { CurrentUserService } from 'src/app/modules/_services/current-user.service';
import Swal from 'sweetalert2';
import * as _ from 'underscore';
import { OptionalModalComponent } from '../../reports/open-liens-abstract-report/optional-modal/optional-modal.component';

@Component({
  selector: 'app-enhancement-docs',
  templateUrl: './enhancement-docs.component.html',
})
export class EnhancementDocsComponent implements OnDestroy {
  private psId: string;
  private optionalFields = {
    ownerName: '',
    refId: '',
  };
  private subscription!: Subscription;
  public reportNavs: {
    tab: string;
    route: string;
    icon: string;
    desc: string;
    lock: boolean;
    credits: string;
    isPremium: boolean;
    selected: boolean;
    name: string;
  }[];

  constructor(
    private staticService: StaticService,
    public ss: SharedService,
    private appService: ApplicationService,
    private route: ActivatedRoute,
    private loaderService: LoaderService,
    private currentUser: CurrentUserService,
    private modalService: NgbModal,
    private commonService: CommonService
  ) {
    this.reportNavs = this.staticService.reportnavs;
    this.psId = this.route.parent?.snapshot.params['id'];
  }

  public get isReportsSelected() {
    return this.reportNavs.some((item) => item.selected);
  }

  public downloadConfirmation() {
    const slectedOrders = this.reportNavs.filter((item) => item.selected);
    const orderTypes = _.pluck(slectedOrders, 'name').join(',');
    if (orderTypes.includes('Lien')) {
      this.viewOptionalModal();
    } else {
      this.download();
    }
  }

  public async download() {
    const slectedOrders = this.reportNavs.filter((item) => item.selected);
    const orderTypes = _.pluck(slectedOrders, 'name');
    //allow download only for standard user with 0 credits
    if (!(orderTypes.length === 1 && orderTypes.includes('Standard'))) {
      const propertReportCount = this.currentUser.reportCount;
      if (!(propertReportCount && propertReportCount >= orderTypes.length - 1))
        return this.commonService.downloadConfirmation(
          this.currentUser.subscriptionType
        );
    }
    const payload = {
      orderType: orderTypes.join(','),
      PSID: this.psId,
      ownerName: this.optionalFields.ownerName
        ? this.optionalFields.ownerName
        : this.ss.propertRecord.PrimaryOwner.Name1Full,
      refId: this.optionalFields.refId,
    };
    try {
      const result = await this.appService.downloadCombineReport(payload);
      if (result.statusCode === 100) {
        const address = this.ss.propertyDetails.propertyAddressNavigation;
        const fileName = `${address.street}, ${address.state.abbreviation} ${
          address.zipCode
        }-${
          orderTypes.length === 1 ? this.reportName(orderTypes[0]) : 'Title'
        }`;
        this.downloadPDF(result.result.data, fileName);
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

  public reportName(report: string) {
    switch (report) {
      case 'Standard':
        return 'report';
      case 'Lien':
        return 'Liens';
      default:
        return report;
    }
  }

  public viewOptionalModal() {
    const modalRef = this.modalService.open(OptionalModalComponent, {
      windowClass: 'custom-modal',
    });
    const subscription = modalRef.componentInstance.optionalFields.subscribe(
      (data: any) => {
        this.optionalFields = data;
        this.download();
      }
    );
    this.subscription = subscription;
  }

  public get isCombineAvailable() {
    if (
      this.ss.isLastTransferDocument.getValue() &&
      this.ss.isLastFinanceDocument.getValue()
    )
      return true;
    return false;
  }

  public isAvailble(reprtType: string) {
    switch (reprtType) {
      case 'standard-report':
        return true;
      case 'deed-abstract':
        if (this.ss.isLastTransferDocument.getValue()) return true;
        return false;
      case 'mortgage-abstract':
        if (this.ss.isLastFinanceDocument.getValue()) return true;
        return false;
      case 'open-liens':
        return true;
      default:
        return false;
    }
  }

  private async downloadPDF(url: string, fileName: string) {
    this.loaderService.show();
    const result = await this.appService.getBlobFromURL(url);
    const blob = new Blob([result], { type: 'application/pdf' });
    saveAs(blob, fileName + '.pdf');
    this.loaderService.hide();
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

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
