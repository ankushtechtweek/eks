import { Component } from '@angular/core';
import { CurrentUserService } from '../_services/current-user.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent {
  constructor(public currentUser: CurrentUserService) {}
}
