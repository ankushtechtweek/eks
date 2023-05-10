import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalRoomInformationComponent } from './internal-room-information.component';

describe('InternalRoomInformationComponent', () => {
  let component: InternalRoomInformationComponent;
  let fixture: ComponentFixture<InternalRoomInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalRoomInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternalRoomInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
