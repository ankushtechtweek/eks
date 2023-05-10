import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyOwnershipComponent } from './property-ownership.component';

describe('PropertyOwnershipComponent', () => {
  let component: PropertyOwnershipComponent;
  let fixture: ComponentFixture<PropertyOwnershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyOwnershipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyOwnershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
