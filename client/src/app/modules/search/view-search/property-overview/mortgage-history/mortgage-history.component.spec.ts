import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PsDateFormat } from 'src/app/modules/shared/pipes/ps-date-format.pipe';

import { MortgageHistoryComponent } from './mortgage-history.component';

describe('MortgageHistoryComponent', () => {
  let component: MortgageHistoryComponent;
  let fixture: ComponentFixture<MortgageHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MortgageHistoryComponent, PsDateFormat],
    }).compileComponents();

    fixture = TestBed.createComponent(MortgageHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
