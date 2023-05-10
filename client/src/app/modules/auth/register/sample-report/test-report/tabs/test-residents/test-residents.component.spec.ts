import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestResidentsComponent } from './test-residents.component';

describe('TestResidentsComponent', () => {
  let component: TestResidentsComponent;
  let fixture: ComponentFixture<TestResidentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestResidentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestResidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
