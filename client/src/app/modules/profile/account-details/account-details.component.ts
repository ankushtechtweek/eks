import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CurrentUserService } from '../../_services/current-user.service';
import { ChangePasswordComponent } from '../change-password/change-password.component';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss'],
})
export class AccountDetailsComponent {
  constructor(
    public currentUser: CurrentUserService,
    private modalService: NgbModal
  ) {}

  changePassword() {
    this.modalService.open(ChangePasswordComponent, { windowClass: 'custom-modal' });
  }
}
