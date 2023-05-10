import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryGranteeComponent } from './primary-grantee.component';

describe('PrimaryGranteeComponent', () => {
  let component: PrimaryGranteeComponent;
  let fixture: ComponentFixture<PrimaryGranteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimaryGranteeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimaryGranteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
