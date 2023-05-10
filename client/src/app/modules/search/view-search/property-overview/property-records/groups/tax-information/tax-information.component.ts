import { Component } from '@angular/core';
import { SharedService } from 'src/app/modules/shared/services/shared/shared.service';

@Component({
  selector: 'app-tax-information',
  templateUrl: './tax-information.component.html',
})
export class TaxInformationComponent {
  constructor(public ss: SharedService) {}
}
