import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import PGConstant from '../shared/constants';
import { AuthGuard } from '../_services/auth.guard';
import { AddressSearchComponent } from './new-search/address-search/address-search.component';
import { ApnSearchComponent } from './new-search/apn-search/apn-search.component';
import { MapSearchComponent } from './new-search/map-search/map-search.component';
import { NewSearchComponent } from './new-search/new-search.component';
import { PeopleSearchComponent } from './new-search/people-search/people-search.component';
import { SearchComponent } from './search.component';
import { ViewOwnerComponent } from './view-owner/view-owner.component';
import { ViewPeopleComponent } from './view-people/view-people.component';
import { DeedInfoComponent } from './view-search/property-overview/deed-info/deed-info.component';
import { EnhancementDocsComponent } from './view-search/property-overview/enhancement-docs/enhancement-docs.component';
import { MapsPhotosComponent } from './view-search/property-overview/maps-photos/maps-photos.component';
import { MortgageHistoryComponent } from './view-search/property-overview/mortgage-history/mortgage-history.component';
import { PropertyRecordsComponent } from './view-search/property-overview/property-records/property-records.component';
import { ResidentsComponent } from './view-search/property-overview/residents/residents.component';
import { StructureDetailsComponent } from './view-search/property-overview/structure-details/structure-details.component';
import { DeedAbstractReportComponent } from './view-search/reports/deed-abstract-report/deed-abstract-report.component';
import { MortgageAbstractReportComponent } from './view-search/reports/mortgage-abstract-report/mortgage-abstract-report.component';
import { OpenLiensAbstractReportComponent } from './view-search/reports/open-liens-abstract-report/open-liens-abstract-report.component';
import { StandardReportComponent } from './view-search/reports/standard-report/standard-report.component';
import { ViewSearchComponent } from './view-search/view-search.component';

const routes: Routes = [
  {
    path: '',
    component: SearchComponent,
  },
  {
    path: 'new-search',
    component: NewSearchComponent,
    children: [
      {
        path: '',
        redirectTo: 'address',
        pathMatch: 'full',
      },
      {
        path: 'address',
        component: AddressSearchComponent,
      },
      {
        path: 'apn',
        component: ApnSearchComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'people',
        component: PeopleSearchComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'map',
        component: MapSearchComponent,
      },
    ],
  },
  {
    path: 'view-search/:id',
    component: ViewSearchComponent,
    children: [
      {
        path: 'property-records',
        component: PropertyRecordsComponent,
      },
      {
        path: 'maps-photos',
        component: MapsPhotosComponent,
      },
      {
        path: 'deed-info',
        component: DeedInfoComponent,
        canActivate: [AuthGuard],
        data: { subscriptions: PGConstant.PERMITTED_PLANS },
      },
      {
        path: 'mortgage-history',
        component: MortgageHistoryComponent,
        canActivate: [AuthGuard],
        data: { subscriptions: PGConstant.PERMITTED_PLANS },
      },
      {
        path: 'structure-details',
        component: StructureDetailsComponent,
      },
      {
        path: 'residents',
        component: ResidentsComponent,
        canActivate: [AuthGuard],
        data: { subscriptions: PGConstant.PERMITTED_PLANS },
      },
      {
        path: 'enhancement-docs',
        component: EnhancementDocsComponent,
        canActivate: [AuthGuard],
        data: { subscriptions: PGConstant.PERMITTED_PLANS },
      },
      {
        path: 'standard-report',
        component: StandardReportComponent,
      },
      {
        path: 'deed-abstract',
        component: DeedAbstractReportComponent,
        canActivate: [AuthGuard],
        data: { subscriptions: PGConstant.PERMITTED_PLANS },
      },
      {
        path: 'mortgage-abstract',
        component: MortgageAbstractReportComponent,
        canActivate: [AuthGuard],
        data: { subscriptions: PGConstant.PERMITTED_PLANS },
      },
      {
        path: 'open-liens',
        component: OpenLiensAbstractReportComponent,
        canActivate: [AuthGuard],
        data: { subscriptions: PGConstant.PERMITTED_PLANS },
      },
    ],
  },
  {
    path: 'view-people',
    component: ViewPeopleComponent,
  },
  {
    path: 'view-owner',
    component: ViewOwnerComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchRoutingModule {}
