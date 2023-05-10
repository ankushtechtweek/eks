import { Component } from '@angular/core';
import { SharedService } from 'src/app/modules/shared/services/shared/shared.service';

@Component({
  selector: 'app-title-company-info',
  templateUrl: './title-company-info.component.html',
})
export class TitleCompanyInfoComponent {
  constructor(public ss: SharedService) {}
}
