import { Component } from '@angular/core';
import { SharedService } from 'src/app/modules/shared/services/shared/shared.service';

@Component({
  selector: 'app-estimated-property-value',
  templateUrl: './estimated-property-value.component.html',
})
export class EstimatedPropertyValueComponent {
  constructor(public ss: SharedService) {}
}
