import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryGrantorComponent } from './secondary-grantor.component';

describe('SecondaryGrantorComponent', () => {
  let component: SecondaryGrantorComponent;
  let fixture: ComponentFixture<SecondaryGrantorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondaryGrantorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondaryGrantorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
