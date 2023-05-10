import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryGranteeComponent } from './secondary-grantee.component';

describe('SecondaryGranteeComponent', () => {
  let component: SecondaryGranteeComponent;
  let fixture: ComponentFixture<SecondaryGranteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondaryGranteeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondaryGranteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
