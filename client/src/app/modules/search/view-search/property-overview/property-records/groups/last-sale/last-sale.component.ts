import { Component } from '@angular/core';
import { SharedService } from 'src/app/modules/shared/services/shared/shared.service';

@Component({
  selector: 'app-last-sale',
  templateUrl: './last-sale.component.html',
})
export class LastSaleComponent {
  constructor(public ss: SharedService) {}
}
