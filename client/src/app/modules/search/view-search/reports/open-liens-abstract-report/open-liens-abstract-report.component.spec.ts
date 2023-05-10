import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { OpenLiensAbstractReportComponent } from './open-liens-abstract-report.component';

describe('OpenLiensAbstractReportComponent', () => {
  let component: OpenLiensAbstractReportComponent;
  let fixture: ComponentFixture<OpenLiensAbstractReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OpenLiensAbstractReportComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(OpenLiensAbstractReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
