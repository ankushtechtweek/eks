import { Component } from '@angular/core';
import { SharedService } from 'src/app/modules/shared/services/shared/shared.service';

@Component({
  selector: 'app-deed-info',
  templateUrl: './deed-info.component.html',
})
export class DeedInfoComponent {
  constructor(public ss: SharedService) {}
}
