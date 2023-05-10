import { Component } from '@angular/core';
import { SharedService } from 'src/app/modules/shared/services/shared/shared.service';
import { StaticService } from 'src/app/modules/shared/services/static/static.service';

@Component({
  selector: 'app-internal-structure-information',
  templateUrl: './internal-structure-information.component.html',
})
export class InternalStructureInformationComponent {
  constructor(public ss: SharedService, public staticSer: StaticService) {}
}
