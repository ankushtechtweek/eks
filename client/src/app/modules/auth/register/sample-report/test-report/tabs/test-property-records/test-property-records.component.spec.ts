import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPropertyRecordsComponent } from './test-property-records.component';

describe('TestPropertyRecordsComponent', () => {
  let component: TestPropertyRecordsComponent;
  let fixture: ComponentFixture<TestPropertyRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestPropertyRecordsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestPropertyRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
