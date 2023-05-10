import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalAmenitiesComponent } from './internal-amenities.component';

describe('InternalAmenitiesComponent', () => {
  let component: InternalAmenitiesComponent;
  let fixture: ComponentFixture<InternalAmenitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalAmenitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternalAmenitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
