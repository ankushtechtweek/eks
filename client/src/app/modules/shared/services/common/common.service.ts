import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PayAsUGoComponent } from 'src/app/modules/search/view-search/reports/pay-as-u-go/pay-as-u-go.component';
import { UpgradeComponent } from 'src/app/modules/upgrade/upgrade.component';
import Swal from 'sweetalert2';
import PGConstant from '../../constants';
import { ApplicationService } from '../application/application.service';
import { LoaderService } from '../loader/loader.service';
import * as print from 'print-js'
import * as saveAs from 'file-saver';
import { SharedService } from '../shared/shared.service';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  readonly PGConstant = PGConstant;
  constructor(
    private modalService: NgbModal,
    private loaderService: LoaderService,
    private appService: ApplicationService,
    private ss:SharedService
  ) {}

  public showAlert(type: string) {
    return Swal.fire({
      title: `${type} Image Download`,
      html: `<p class="h6">You have already downloaded the ${type} image for this property. To see your download go to <a href="javascript:;" id="navigate-action">Download History</a>. If you wish to download again, click "Proceed with download". By doing this, it will be considered as a new download.</p>`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Proceed With Download',
    });
  }

  public downloadConfirmation(subscriptionType: string) {
    if (subscriptionType != PGConstant.PLAN_TYPE.TRIAL) {
      Swal.fire({
        title: `Oops! Looks like you ran out of credits.`,
        html: `<p class="h5">Check out our plans to upgrade or purchase more credits. Choose the option that's right for you.</p>`,
        icon: 'question',
        confirmButtonColor: '#3085d6',
        denyButtonColor: '#ff7256',
        confirmButtonText: 'Upgrade',
        showCloseButton: true,
        showDenyButton: true,
        denyButtonText: 'Purchase Credits',
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.purchaseModal();
        } else if (result.isDenied) {
          this.purchaseCredits();
        }
      });
    } else {
      Swal.fire({
        title: `Oops! Looks like you ran out of credits.`,
        html: `<p class="h5">Check out our plans to upgrade or purchase more credits. Choose the option that's right for you.</p>`,
        icon: 'question',
        confirmButtonText: 'Upgrade',
        confirmButtonColor: '#3085d6',
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.purchaseModal();
        }
      });
    }
  }

  public searchConfirmation(subscriptionType: string) {
    if (subscriptionType === PGConstant.PLAN_TYPE.THREE_DAY) {
      Swal.fire({
        title: `Welcome back, we missed you`,
        html: `<p class="h6">Your limited time offer has expired, but you may still upgrade to a Pro Plan and unlock access to get instant information on over 140,000,000 Properties in the U.S. Start searching records now!</p>`,
        icon: 'question',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Show my Options',
        showCloseButton: true,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.purchaseModal();
        }
      });
    } else {
      Swal.fire({
        title: `Uh oh!`,
        html: `<p class="h5">Your ${subscriptionType} has expired. Choose a plan to continue</p>`,
        icon: 'question',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Show my Options',
        showCloseButton: true,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.purchaseModal();
        }
      });
    }
  }

  public purchaseModal() {
    const modalRef = this.modalService.open(UpgradeComponent, { size: 'xl' });
    modalRef.componentInstance.modal = true;
  }

  public purchaseCredits() {
    this.modalService.open(PayAsUGoComponent, { windowClass: 'custom-modal' });
  }

  public printPdf(pdfUrl: string) {
    print(pdfUrl);
  }

  public savePdf(pdfUrl: string, filetype: string) {
    const address = this.ss.propertyDetails.propertyAddressNavigation;
    const fileName = `${address.street}, ${address.state.abbreviation} ${address.zipCode}-${filetype}`;
    this.downloadPDF(pdfUrl, fileName);
  }

  public async downloadPDF(url: string, fileName: string) {
    this.loaderService.show();
    const result = await this.appService.getBlobFromURL(url);
    const blob = new Blob([result], { type: 'application/pdf' });
    saveAs(blob, fileName + '.pdf');
    this.loaderService.hide();
  }

  public base64PDFDownload(pdf: string, fileName: string) {
    const linkSource = `data:application/pdf;base64,${pdf}`;
    const downloadLink = document.createElement('a');
    downloadLink.href = linkSource;
    downloadLink.download = fileName + '.pdf';
    downloadLink.click();
  }
}
