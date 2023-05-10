import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PayAsUGoComponent } from '../pay-as-u-go/pay-as-u-go.component';

@Component({
  selector: 'app-in-app-purchase',
  templateUrl: './in-app-purchase.component.html',
})
export class InAppPurchaseComponent {
  constructor(private modalService: NgbModal) {}

  viewModal() {
    this.modalService.open(PayAsUGoComponent, { windowClass: 'custom-modal' });
  }
}
