import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDeedInfoComponent } from './test-deed-info.component';

describe('TestDeedInfoComponent', () => {
  let component: TestDeedInfoComponent;
  let fixture: ComponentFixture<TestDeedInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestDeedInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestDeedInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
