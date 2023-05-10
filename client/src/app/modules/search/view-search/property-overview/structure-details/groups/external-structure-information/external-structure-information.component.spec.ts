import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalStructureInformationComponent } from './external-structure-information.component';

describe('ExternalStructureInformationComponent', () => {
  let component: ExternalStructureInformationComponent;
  let fixture: ComponentFixture<ExternalStructureInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternalStructureInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExternalStructureInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
