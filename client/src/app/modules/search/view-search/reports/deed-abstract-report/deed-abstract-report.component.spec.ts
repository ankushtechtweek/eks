import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DeedAbstractReportComponent } from './deed-abstract-report.component';

describe('DeedAbstractReportComponent', () => {
  let component: DeedAbstractReportComponent;
  let fixture: ComponentFixture<DeedAbstractReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeedAbstractReportComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(DeedAbstractReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
