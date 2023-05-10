import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleCompanyInfoComponent } from './title-company-info.component';

describe('TitleCompanyInfoComponent', () => {
  let component: TitleCompanyInfoComponent;
  let fixture: ComponentFixture<TitleCompanyInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleCompanyInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleCompanyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
