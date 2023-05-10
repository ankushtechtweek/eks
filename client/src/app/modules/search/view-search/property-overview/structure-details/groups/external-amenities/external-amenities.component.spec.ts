import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalAmenitiesComponent } from './external-amenities.component';

describe('ExternalAmenitiesComponent', () => {
  let component: ExternalAmenitiesComponent;
  let fixture: ComponentFixture<ExternalAmenitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternalAmenitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExternalAmenitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
