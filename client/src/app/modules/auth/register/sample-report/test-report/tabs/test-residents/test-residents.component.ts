import { Component } from '@angular/core';
import { StaticService } from 'src/app/modules/shared/services/static/static.service';

@Component({
  selector: 'app-test-residents',
  templateUrl: './test-residents.component.html',
})
export class TestResidentsComponent {
  constructor(public staticService: StaticService) {}
  public fields = {
    'RESIDENT DETAILS': [
      'NAME',
      'GENDER',
      'AGE',
      'RESIDENT SINCE',
      'NAME',
      'GENDER',
      'AGE',
      'RESIDENT SINCE',
      'NAME',
      'GENDER',
      'AGE',
      'RESIDENT SINCE',
    ],
  };
}
