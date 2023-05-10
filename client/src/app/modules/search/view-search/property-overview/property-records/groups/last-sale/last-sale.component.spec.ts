import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PsDateFormat } from 'src/app/modules/shared/pipes/ps-date-format.pipe';

import { LastSaleComponent } from './last-sale.component';

describe('LastSaleComponent', () => {
  let component: LastSaleComponent;
  let fixture: ComponentFixture<LastSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LastSaleComponent, PsDateFormat],
    }).compileComponents();

    fixture = TestBed.createComponent(LastSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
