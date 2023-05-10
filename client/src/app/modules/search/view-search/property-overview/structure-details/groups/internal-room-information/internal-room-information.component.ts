import { Component } from '@angular/core';
import { SharedService } from 'src/app/modules/shared/services/shared/shared.service';
import { StaticService } from 'src/app/modules/shared/services/static/static.service';

@Component({
  selector: 'app-internal-room-information',
  templateUrl: './internal-room-information.component.html',
})
export class InternalRoomInformationComponent {
  constructor(public ss: SharedService, public staticSer: StaticService) {}
}
