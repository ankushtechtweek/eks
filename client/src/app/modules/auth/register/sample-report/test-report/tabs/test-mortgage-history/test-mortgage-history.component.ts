import { Component } from '@angular/core';
import { StaticService } from 'src/app/modules/shared/services/static/static.service';

@Component({
  selector: 'app-test-mortgage-history',
  templateUrl: './test-mortgage-history.component.html',
})
export class TestMortgageHistoryComponent {
  constructor(public staticService: StaticService) {}
  public fields = {
    'MORTGAGE 1': [
      'SALE AMOUNT',
      'RECORDED DATE',
      'TRANSFER TYPE CODE',
      'TRANSFER TAX TOTAL',
      'TRANSACTION TYPE',
      'INSTRUMENT DATE',
      'FORECLOSURE SALE',
      'TRANSFER TAX COUNTY',
      'BUYER(S)',
      'SELLER(S)',
    ],
    'MORTGAGE 1 DETAILS': [
      'MORTGAGE AMOUNT',
      '2ND MORTGAGE AMOUNT',
      'EST. DOWN PAYMENT',
      'EST. LOAN TO VALUE',
      'RECORDED DATE',
      'INTEREST RATE',
      'INTEREST TYPE',
      'INTEREST ONLY',
      'BUYER(S)',
      'LENDER(S)',
      '2ND MORTGAGE LENDER',
      'IS LENDER SELLER?',
    ],
  };
}
