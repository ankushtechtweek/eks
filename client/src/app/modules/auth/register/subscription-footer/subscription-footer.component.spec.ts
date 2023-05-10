import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionFooterComponent } from './subscription-footer.component';

describe('SubscriptionFooterComponent', () => {
  let component: SubscriptionFooterComponent;
  let fixture: ComponentFixture<SubscriptionFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscriptionFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
