import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalStructureInformationComponent } from './internal-structure-information.component';

describe('InternalStructureInformationComponent', () => {
  let component: InternalStructureInformationComponent;
  let fixture: ComponentFixture<InternalStructureInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalStructureInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternalStructureInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
