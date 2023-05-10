import { Component } from '@angular/core';
import { SharedService } from 'src/app/modules/shared/services/shared/shared.service';
import { StaticService } from 'src/app/modules/shared/services/static/static.service';

@Component({
  selector: 'app-yard-garden-information',
  templateUrl: './yard-garden-information.component.html',
})
export class YardGardenInformationComponent {
  constructor(public ss: SharedService, public staticSer: StaticService) {}
}
