import { Component } from '@angular/core';
import { SharedService } from 'src/app/modules/shared/services/shared/shared.service';
import { StaticService } from 'src/app/modules/shared/services/static/static.service';

@Component({
  selector: 'app-external-buildings',
  templateUrl: './external-buildings.component.html',
})
export class ExternalBuildingsComponent {
  constructor(public ss: SharedService, public staticSer: StaticService) {}
}
