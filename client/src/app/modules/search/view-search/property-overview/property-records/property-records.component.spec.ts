import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyRecordsComponent } from './property-records.component';

describe('PropertyRecordsComponent', () => {
  let component: PropertyRecordsComponent;
  let fixture: ComponentFixture<PropertyRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyRecordsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
