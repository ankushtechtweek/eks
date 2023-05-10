import { Component } from '@angular/core';
import { SharedService } from 'src/app/modules/shared/services/shared/shared.service';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
})
export class PropertyDetailsComponent {
  constructor(public ss: SharedService) {}
}
