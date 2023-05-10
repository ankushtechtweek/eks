import { Component } from '@angular/core';
import { SharedService } from 'src/app/modules/shared/services/shared/shared.service';
import { StaticService } from 'src/app/modules/shared/services/static/static.service';

@Component({
  selector: 'app-primary-grantor',
  templateUrl: './primary-grantor.component.html',
})
export class PrimaryGrantorComponent {
  constructor(public ss: SharedService, public staticSer: StaticService) {}
}
