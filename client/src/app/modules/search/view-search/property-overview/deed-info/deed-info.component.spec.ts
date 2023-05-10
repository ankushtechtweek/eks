import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeedInfoComponent } from './deed-info.component';

describe('DeedInfoComponent', () => {
  let component: DeedInfoComponent;
  let fixture: ComponentFixture<DeedInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeedInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeedInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
