import { Component } from '@angular/core';
import { SharedService } from 'src/app/modules/shared/services/shared/shared.service';

@Component({
  selector: 'app-secondary-grantee',
  templateUrl: './secondary-grantee.component.html',
})
export class SecondaryGranteeComponent {
  constructor(public ss: SharedService) {}
}
