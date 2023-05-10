import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { RecentSearchHistoryComponent } from './recent-search-history/recent-search-history.component';
import { RecentSearchesComponent } from './recent-searches/recent-searches.component';
import { SearchByComponent } from './search-by/search-by.component';
import { TodayTasksComponent } from './today-tasks/today-tasks.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent, TodayTasksComponent, SearchByComponent, RecentSearchHistoryComponent, RecentSearchesComponent ],
      imports:[HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
