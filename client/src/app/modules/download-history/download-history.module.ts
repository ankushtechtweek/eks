import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DownloadHistoryRoutingModule } from './download-history-routing.module';
import { DownloadHistoryComponent } from './download-history.component';
import { HistoryTableComponent } from './history-table/history-table.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DownloadHistoryComponent,
    HistoryTableComponent
  ],
  imports: [
    CommonModule,
    DownloadHistoryRoutingModule,
    SharedModule
  ]
})
export class DownloadHistoryModule { }
