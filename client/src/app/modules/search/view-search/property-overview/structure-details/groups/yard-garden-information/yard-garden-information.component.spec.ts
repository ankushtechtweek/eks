import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YardGardenInformationComponent } from './yard-garden-information.component';

describe('YardGardenInformationComponent', () => {
  let component: YardGardenInformationComponent;
  let fixture: ComponentFixture<YardGardenInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YardGardenInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YardGardenInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
