import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { StaticService } from 'src/app/modules/shared/services/static/static.service';

@Component({
  selector: 'app-unsubscribe-modal',
  templateUrl: './unsubscribe-modal.component.html',
})
export class UnsubscribeModalComponent {
  public selectedReason: string = '';
  cancelReasons: string[];
  others!: string;
  constructor(
    public activeModal: NgbActiveModal,
    public staticService: StaticService
  ) {
    this.cancelReasons = this.staticService.cancelReasons;
  }

  public cancelMembership() {
    if (!this.selectedReason) return;
    this.activeModal.close(
      this.selectedReason === 'Other' ? this.others : this.selectedReason
    );
  }

  public get isCancelledDisabled() {
    if (this.selectedReason && this.selectedReason != 'Other') return true;
    if (this.selectedReason && this.selectedReason === 'Other' && this.others)
      return true;
    return false;
  }
}
