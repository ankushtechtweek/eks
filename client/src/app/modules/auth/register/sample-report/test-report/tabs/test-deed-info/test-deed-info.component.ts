import { Component } from '@angular/core';
import { StaticService } from 'src/app/modules/shared/services/static/static.service';

@Component({
  selector: 'app-test-deed-info',
  templateUrl: './test-deed-info.component.html',
})
export class TestDeedInfoComponent {
  constructor(public staticService: StaticService) {}
  public fields = {
    'DOCUMENT INFORMATION': [
      'DEED TYPE',
      'INSTRUMENT',
      'BOOK',
      'PAGE',
      'INSTRUMENT DATE',
      'RECORDING DATE',
    ],
    'TRANSACTION INFORMATION': [
      'TRANSACTION TYPE',
      'FORECLOSURE SALE',
      'QUIT CLAIM DEED',
      'ARMS LENGTH TRANSACTION',
      'TRANSFER AMOUNT',
      'TRANSFER TAX TOTAL',
    ],
    'PRIMARY GRANTOR': ['FULL NAME', 'CLASS TYPE', 'LEGAL TYPE'],
    'SECONDARY GRANTOR': ['FULL NAME', 'CLASS TYPE'],
    'PRIMARY GRANTEE': ['FULL NAME', 'CLASS TYPE', 'LEGAL TYPE'],
    'SECONDARY GRANTEE': ['FULL NAME', 'CLASS TYPE'],
    'TITLE COMPANY INFO': [
      'STANDARDIZED CODE',
      'STANDARDIZED NAME',
      'RAW TITLE COMPANY',
    ],
  };
}
