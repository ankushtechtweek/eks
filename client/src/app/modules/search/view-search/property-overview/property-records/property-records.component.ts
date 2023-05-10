import { Component } from '@angular/core';
import { SharedService } from 'src/app/modules/shared/services/shared/shared.service';

@Component({
  selector: 'app-property-records',
  templateUrl: './property-records.component.html',
})
export class PropertyRecordsComponent {
  constructor(public ss: SharedService) {}
}
