import { Component } from '@angular/core';
import { SharedService } from 'src/app/modules/shared/services/shared/shared.service';
import { StaticService } from 'src/app/modules/shared/services/static/static.service';

@Component({
  selector: 'app-pool',
  templateUrl: './pool.component.html',
})
export class PoolComponent {
  constructor(public ss: SharedService, public staticSer: StaticService) {}
}
