import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './modules/auth/register/create-user/create-user.component';
import { DoNotSellComponent } from './modules/auth/register/do-not-sell/do-not-sell.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { TestReportComponent } from './modules/auth/register/sample-report/test-report/test-report.component';
import { SubscriptionsComponent } from './modules/auth/register/subscriptions/subscriptions.component';
import { ThankYouComponent } from './modules/auth/register/thank-you/thank-you.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'register',
    component: RegisterComponent,
    children: [
      {
        path: '',
        redirectTo: 'subscriptions',
        pathMatch: 'full',
      },
      {
        path: 'subscriptions',
        component: SubscriptionsComponent,
      },
      {
        path: 'create-user',
        component: CreateUserComponent,
      },
      {
        path: 'test-report',
        component: TestReportComponent,
      },
      { path: '**', redirectTo: 'subscriptions', pathMatch: 'full' },
    ],
  },
  {
    path: 'thank-you/:plan_name',
    component: ThankYouComponent,
  },
  {
    path: 'donotsell',
    component: DoNotSellComponent,
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/layout/layout.module').then((m) => m.LayoutModule),
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration:'enabled'
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
