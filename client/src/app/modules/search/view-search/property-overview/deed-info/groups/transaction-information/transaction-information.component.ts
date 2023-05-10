import { Component } from '@angular/core';
import { SharedService } from 'src/app/modules/shared/services/shared/shared.service';
import { StaticService } from 'src/app/modules/shared/services/static/static.service';

@Component({
  selector: 'app-transaction-information',
  templateUrl: './transaction-information.component.html',
})
export class TransactionInformationComponent {
  constructor(public ss: SharedService, public staticSer: StaticService) {}
}
