import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { TodayTasksComponent } from './today-tasks.component';

describe('TodayTasksComponent', () => {
  let component: TodayTasksComponent;
  let fixture: ComponentFixture<TodayTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule, HttpClientTestingModule],
      declarations: [ TodayTasksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodayTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
