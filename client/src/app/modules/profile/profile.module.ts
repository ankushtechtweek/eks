import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { SharedModule } from '../shared/shared.module';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { SubscriptionManagementComponent } from './subscription-management/subscription-management.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PurchaseHistoryComponent } from './purchase-history/purchase-history.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { UnsubscribeModalComponent } from './subscription-management/unsubscribe-modal/unsubscribe-modal.component';


@NgModule({
  declarations: [
    ProfileComponent,
    EditUserComponent,
    AccountDetailsComponent,
    SubscriptionManagementComponent,
    PaymentDetailsComponent,
    PurchaseHistoryComponent,
    ChangePasswordComponent,
    UnsubscribeModalComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule
  ]
})
export class ProfileModule { }
