import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UpgradeComponent } from '../upgrade/upgrade.component';
import { AuthService } from './auth.service';
import { CurrentUserService } from './current-user.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService,
    private currentUser: CurrentUserService,
    private modalService: NgbModal
  ) {}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const token = this.authService?.currentTokenValue;
    const user = await this.currentUser.currentUserValue;
    if (token) {
      // check if route is restricted by role
      if (
        route.data['subscriptions'] &&
        route.data['subscriptions'].indexOf(user.subscriptionType) === -1
      ) {
        // role not authorised so redirect to home page
        // this.router.navigate(['/upgrade']);
        const modalRef = this.modalService.open(UpgradeComponent, {
          size: 'xl',
        });
        modalRef.componentInstance.modal = true;
        return false;
      }
      // authorised so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/auth/login']);
    return false;
  }
}
