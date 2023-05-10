import { Component } from '@angular/core';
import { SharedService } from 'src/app/modules/shared/services/shared/shared.service';
import { StaticService } from 'src/app/modules/shared/services/static/static.service';

@Component({
  selector: 'app-external-structure-information',
  templateUrl: './external-structure-information.component.html',
})
export class ExternalStructureInformationComponent {
  constructor(public ss: SharedService, public staticSer: StaticService) {}
}
