import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestStructureDetailsComponent } from './test-structure-details.component';

describe('TestStructureDetailsComponent', () => {
  let component: TestStructureDetailsComponent;
  let fixture: ComponentFixture<TestStructureDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestStructureDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestStructureDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
