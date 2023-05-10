import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMapsPhotosComponent } from './test-maps-photos.component';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';

describe('TestMapsPhotosComponent', () => {
  let component: TestMapsPhotosComponent;
  let fixture: ComponentFixture<TestMapsPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestMapsPhotosComponent],
      imports:[AgmCoreModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestMapsPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
