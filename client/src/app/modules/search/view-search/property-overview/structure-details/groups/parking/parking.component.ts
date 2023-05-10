import { Component } from '@angular/core';
import { SharedService } from 'src/app/modules/shared/services/shared/shared.service';
import { StaticService } from 'src/app/modules/shared/services/static/static.service';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
})
export class ParkingComponent {
  constructor(public ss: SharedService, public staticSer: StaticService) {}
}
