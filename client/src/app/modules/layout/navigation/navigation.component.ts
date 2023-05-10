import { Component } from '@angular/core';
import PGConstant from '../../shared/constants';
import { SharedService } from '../../shared/services/shared/shared.service';
import { AuthService } from '../../_services/auth.service';
import { CurrentUserService } from '../../_services/current-user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  readonly PGConstant = PGConstant;
  constructor(
    public currentUser: CurrentUserService,
    public auth: AuthService,
    private ss: SharedService
  ) {}

  signOut() {
    this.currentUser.currentUserSubject.next(null);
    this.auth.signOut();
  }

  public toggleSideMenu() {
    this.ss.toggleSideMenu.next(true);
  }
}
