import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApplicationService } from 'src/app/modules/shared/services/application/application.service';
import { UpgradeComponent } from 'src/app/modules/upgrade/upgrade.component';
import { CurrentUserService } from 'src/app/modules/_services/current-user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pay-as-u-go',
  templateUrl: './pay-as-u-go.component.html',
})
export class PayAsUGoComponent {
  public selectedCredits!: number;
  public purchaseItems = [
    { price: 400, credits: 25 },
    { price: 750, credits: 50 },
    { price: 1400, credits: 100 },
    { price: 2400, credits: 200 },
  ];

  constructor(
    public activeModal: NgbActiveModal,
    private modalService: NgbModal,
    private appService: ApplicationService,
    private currentUser: CurrentUserService
  ) {}

  public purchaseModal() {
    const modalRef = this.modalService.open(UpgradeComponent, { size: 'xl' });
    modalRef.componentInstance.modal = true;
  }

  public async purchaseCredits() {
    if (!this.selectedCredits) return;
    try {
      this.activeModal.close('Close click');
      const result = await this.appService.purchaseCredits(
        this.currentUser.email,
        this.selectedCredits,
        this.currentUser.subscriptionType
      );
      if (result.statusCode === 100) {
        const appUserSubscriptions =
          this.currentUser.currentUserValue.appUserSubscriptions;
        result.result['appUserSubscriptions'] = appUserSubscriptions;
        this.currentUser.currentUserSubject.next(result.result);
        Swal.fire({
          icon: 'success',
          text: result.statusMessage,
        });
      } else {
        this.errorMessage(result.statusMessage);
      }
    } catch (e) {
      this.errorMessage(this.getErrorMessage(e));
    }
  }

  public errorMessage(message: string) {
    Swal.fire({
      icon: 'error',
      text: message,
    });
  }

  private getErrorMessage(error: unknown) {
    if (error instanceof Error) return error.message;
    return String(error);
  }
}
