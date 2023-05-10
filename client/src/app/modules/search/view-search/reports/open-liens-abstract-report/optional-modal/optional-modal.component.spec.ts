import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { OptionalModalComponent } from './optional-modal.component';

describe('OptionalModalComponent', () => {
  let component: OptionalModalComponent;
  let fixture: ComponentFixture<OptionalModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OptionalModalComponent],
      imports: [HttpClientTestingModule],
      providers: [NgbActiveModal, FormBuilder],
    }).compileComponents();

    fixture = TestBed.createComponent(OptionalModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
