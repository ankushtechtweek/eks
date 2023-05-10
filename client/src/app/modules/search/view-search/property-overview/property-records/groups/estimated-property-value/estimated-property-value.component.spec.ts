import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PsDateFormat } from 'src/app/modules/shared/pipes/ps-date-format.pipe';

import { EstimatedPropertyValueComponent } from './estimated-property-value.component';

describe('EstimatedPropertyValueComponent', () => {
  let component: EstimatedPropertyValueComponent;
  let fixture: ComponentFixture<EstimatedPropertyValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstimatedPropertyValueComponent, PsDateFormat ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstimatedPropertyValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
