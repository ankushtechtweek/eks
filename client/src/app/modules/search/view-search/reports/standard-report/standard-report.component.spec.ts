import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { StandardReportComponent } from './standard-report.component';

describe('StandardReportComponent', () => {
  let component: StandardReportComponent;
  let fixture: ComponentFixture<StandardReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StandardReportComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(StandardReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
