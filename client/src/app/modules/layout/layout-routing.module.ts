import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../_services/auth.guard';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../../modules/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'search',
        loadChildren: () =>
          import('../../modules/search/search.module').then(
            (m) => m.SearchModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('../../modules/profile/profile.module').then(
            (m) => m.ProfileModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'upgrade',
        loadChildren: () =>
          import('../../modules/upgrade/upgrade.module').then(
            (m) => m.UpgradeModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'favorites',
        loadChildren: () =>
          import('../../modules/favorites/favorites.module').then(
            (m) => m.FavoritesModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'questions',
        loadChildren: () =>
          import('../../modules/faqs/faqs.module').then(
            (m) => m.FaqsModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'download-history',
        loadChildren: () =>
          import('../../modules/download-history/download-history.module').then(
            (m) => m.DownloadHistoryModule
          ),
        canActivate: [AuthGuard],
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      // {
      //   path: '**',
      //   redirectTo: 'errors/404',
      //   pathMatch: 'full',
      // },
      { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
