import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { ProfileComponent } from './profile.component';
import { PurchaseHistoryComponent } from './purchase-history/purchase-history.component';
import { SubscriptionManagementComponent } from './subscription-management/subscription-management.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: 'account-details',
        component: AccountDetailsComponent,
      },
      {
        path: 'subscription-management',
        component: SubscriptionManagementComponent,
      },
      {
        path: 'payment-details',
        component: PaymentDetailsComponent,
      },
      {
        path: 'purchase-history',
        component: PurchaseHistoryComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
