import { Component } from '@angular/core';
import { SharedService } from 'src/app/modules/shared/services/shared/shared.service';

@Component({
  selector: 'app-structure-details',
  templateUrl: './structure-details.component.html',
})
export class StructureDetailsComponent {
  constructor(public ss: SharedService) {}
}
