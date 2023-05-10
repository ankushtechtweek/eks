import { Component } from '@angular/core';
import { SharedService } from '../../shared/services/shared/shared.service';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
})
export class LeftNavComponent {
  constructor(public ss: SharedService) {}
}
