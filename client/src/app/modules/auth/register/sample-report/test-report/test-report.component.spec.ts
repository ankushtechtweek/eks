import { MapsAPILoader } from '@agm/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { TestReportComponent } from './test-report.component';

describe('TestReportComponent', () => {
  let component: TestReportComponent;
  let fixture: ComponentFixture<TestReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestReportComponent],
      imports: [RouterTestingModule],
      providers: [MapsAPILoader],
    }).compileComponents();

    fixture = TestBed.createComponent(TestReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
