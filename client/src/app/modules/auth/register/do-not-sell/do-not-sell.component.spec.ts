import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { DoNotSellComponent } from './do-not-sell.component';

describe('DoNotSellComponent', () => {
  let component: DoNotSellComponent;
  let fixture: ComponentFixture<DoNotSellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoNotSellComponent],
      imports: [HttpClientTestingModule],
      providers: [FormBuilder],
    }).compileComponents();

    fixture = TestBed.createComponent(DoNotSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
