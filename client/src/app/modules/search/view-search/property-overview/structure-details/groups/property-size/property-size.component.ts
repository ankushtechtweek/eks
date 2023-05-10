import { Component } from '@angular/core';
import { SharedService } from 'src/app/modules/shared/services/shared/shared.service';
import { StaticService } from 'src/app/modules/shared/services/static/static.service';

@Component({
  selector: 'app-property-size',
  templateUrl: './property-size.component.html',
})
export class PropertySizeComponent {
  constructor(public ss: SharedService, public staticSer: StaticService) {}
}
