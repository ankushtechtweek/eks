import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalBuildingsComponent } from './external-buildings.component';

describe('ExternalBuildingsComponent', () => {
  let component: ExternalBuildingsComponent;
  let fixture: ComponentFixture<ExternalBuildingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternalBuildingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExternalBuildingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
