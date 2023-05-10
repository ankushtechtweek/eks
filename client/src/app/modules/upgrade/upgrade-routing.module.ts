import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { UpgradeComponent } from './upgrade.component';

const routes: Routes = [
  {
    path: '',
    component: UpgradeComponent
  },
  {
    path: 'thank-you/:plan',
    component: ThankYouComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpgradeRoutingModule { }
