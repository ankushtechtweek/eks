import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../shared/shared.module';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SubscriptionsComponent } from './register/subscriptions/subscriptions.component';
import { CreateUserComponent } from './register/create-user/create-user.component';
import { SubscriptionFooterComponent } from './register/subscription-footer/subscription-footer.component';
import { SampleReportComponent } from './register/sample-report/sample-report.component';
import { SubscriptionHeaderComponent } from './register/subscription-header/subscription-header.component';
import { TestReportComponent } from './register/sample-report/test-report/test-report.component';
import { ThankYouComponent } from './register/thank-you/thank-you.component';
import { TestPropertyRecordsComponent } from './register/sample-report/test-report/tabs/test-property-records/test-property-records.component';
import { TestMapsPhotosComponent } from './register/sample-report/test-report/tabs/test-maps-photos/test-maps-photos.component';
import { TestStructureDetailsComponent } from './register/sample-report/test-report/tabs/test-structure-details/test-structure-details.component';
import { TestDeedInfoComponent } from './register/sample-report/test-report/tabs/test-deed-info/test-deed-info.component';
import { TestMortgageHistoryComponent } from './register/sample-report/test-report/tabs/test-mortgage-history/test-mortgage-history.component';
import { AgmCoreModule } from '@agm/core';
import { TestResidentsComponent } from './register/sample-report/test-report/tabs/test-residents/test-residents.component';
import { DoNotSellComponent } from './register/do-not-sell/do-not-sell.component';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    ForgotPasswordComponent,
    RegisterComponent,
    ResetPasswordComponent,
    NavbarComponent,
    SubscriptionsComponent,
    CreateUserComponent,
    SubscriptionFooterComponent,
    SampleReportComponent,
    SubscriptionHeaderComponent,
    TestReportComponent,
    ThankYouComponent,
    TestPropertyRecordsComponent,
    TestMapsPhotosComponent,
    TestStructureDetailsComponent,
    TestDeedInfoComponent,
    TestMortgageHistoryComponent,
    TestResidentsComponent,
    DoNotSellComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    AgmCoreModule
  ]
})
export class AuthModule { }
