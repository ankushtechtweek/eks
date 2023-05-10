import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryGrantorComponent } from './primary-grantor.component';

describe('PrimaryGrantorComponent', () => {
  let component: PrimaryGrantorComponent;
  let fixture: ComponentFixture<PrimaryGrantorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimaryGrantorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimaryGrantorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
