import { Component, OnDestroy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { ApplicationService } from '../../shared/services/application/application.service';
import { CurrentUserService } from '../../_services/current-user.service';
import { UnsubscribeModalComponent } from './unsubscribe-modal/unsubscribe-modal.component';

@Component({
  selector: 'app-subscription-management',
  templateUrl: './subscription-management.component.html',
})
export class SubscriptionManagementComponent implements OnDestroy {
  private subscription!: Subscription;
  constructor(
    public currentUser: CurrentUserService,
    private modalService: NgbModal,
    private appService: ApplicationService
  ) {}

  public cancelMembership() {
    const modalRef = this.modalService.open(UnsubscribeModalComponent, {
      windowClass: 'custom-modal',
    });
    modalRef.result.then((result) => {
      if (result) {
        this.onSubmit(result);
      }
    });
  }

  public async onSubmit(reason: string) {
    try {
      let user = await this.currentUser.currentUserValue;
      const result = await this.appService.cancelSubscription(
        user.email,
        reason
      );
      if (result.statusCode === 100) {
        Swal.fire({
          icon: 'success',
          text: result.statusMessage,
        });
        user['cancellationDate'] = result.result.cancellationDate;
        this.currentUser.currentUserSubject.next(user);
      } else {
        Swal.fire({
          icon: 'error',
          text: result.statusMessage,
        });
      }
    } catch (e) {
      Swal.fire({
        icon: 'error',
        text: this.getErrorMessage(e),
      });
    }
  }

  private getErrorMessage(error: unknown) {
    if (error instanceof Error) return error.message;
    return String(error);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
