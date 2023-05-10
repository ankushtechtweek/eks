import { Component } from '@angular/core';
import { SharedService } from 'src/app/modules/shared/services/shared/shared.service';

@Component({
  selector: 'app-secondary-grantor',
  templateUrl: './secondary-grantor.component.html',
})
export class SecondaryGrantorComponent {
  constructor(public ss: SharedService) {}
}
