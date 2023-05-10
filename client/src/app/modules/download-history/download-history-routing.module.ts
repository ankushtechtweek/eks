import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DownloadHistoryComponent } from './download-history.component';

const routes: Routes = [
  {
    path: '',
    component: DownloadHistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DownloadHistoryRoutingModule { }
