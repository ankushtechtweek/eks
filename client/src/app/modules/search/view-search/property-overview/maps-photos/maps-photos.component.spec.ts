import { MapsAPILoader } from '@agm/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsPhotosComponent } from './maps-photos.component';

describe('MapsPhotosComponent', () => {
  let component: MapsPhotosComponent;
  let fixture: ComponentFixture<MapsPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ MapsPhotosComponent ],
      providers:[MapsAPILoader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapsPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
