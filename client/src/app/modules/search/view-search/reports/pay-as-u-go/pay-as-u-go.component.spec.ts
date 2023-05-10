import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { PayAsUGoComponent } from './pay-as-u-go.component';

describe('PayAsUGoComponent', () => {
  let component: PayAsUGoComponent;
  let fixture: ComponentFixture<PayAsUGoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PayAsUGoComponent],
      providers: [NgbActiveModal],
      imports:[HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PayAsUGoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
