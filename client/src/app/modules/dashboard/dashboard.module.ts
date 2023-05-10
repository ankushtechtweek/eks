import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { TodayTasksComponent } from './today-tasks/today-tasks.component';
import { RecentSearchesComponent } from './recent-searches/recent-searches.component';
import { SearchByComponent } from './search-by/search-by.component';
import { RecentSearchHistoryComponent } from './recent-search-history/recent-search-history.component';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    DashboardComponent,
    TodayTasksComponent,
    RecentSearchesComponent,
    SearchByComponent,
    RecentSearchHistoryComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    AgmCoreModule
  ]
})
export class DashboardModule { }
