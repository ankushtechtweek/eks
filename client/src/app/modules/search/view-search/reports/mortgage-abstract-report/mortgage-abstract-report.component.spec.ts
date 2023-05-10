import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MortgageAbstractReportComponent } from './mortgage-abstract-report.component';

describe('MortgageAbstractReportComponent', () => {
  let component: MortgageAbstractReportComponent;
  let fixture: ComponentFixture<MortgageAbstractReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MortgageAbstractReportComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(MortgageAbstractReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
