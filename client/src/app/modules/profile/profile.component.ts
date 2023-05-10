import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StaticService } from '../shared/services/static/static.service';
import { AuthService } from '../_services/auth.service';
import { CurrentUserService } from '../_services/current-user.service';
import { EditUserComponent } from './edit-user/edit-user.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProfileComponent {
  profileNavs: {
    tab: string;
    route: string;
    icon: string;
    isPremium: boolean;
  }[];
  constructor(
    public currentUser: CurrentUserService,
    public auth: AuthService,
    private modalService: NgbModal,
    private staticService: StaticService
  ) {
    this.profileNavs = this.staticService.profileNavs;
  }

  editUser() {
    this.modalService.open(EditUserComponent, { windowClass: 'custom-modal' });
  }
}
