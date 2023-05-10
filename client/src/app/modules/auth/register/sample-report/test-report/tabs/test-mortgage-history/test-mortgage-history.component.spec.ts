import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMortgageHistoryComponent } from './test-mortgage-history.component';

describe('TestMortgageHistoryComponent', () => {
  let component: TestMortgageHistoryComponent;
  let fixture: ComponentFixture<TestMortgageHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestMortgageHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestMortgageHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
