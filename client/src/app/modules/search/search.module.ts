import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { NewSearchComponent } from './new-search/new-search.component';
import { ViewSearchComponent } from './view-search/view-search.component';
import { SharedModule } from '../shared/shared.module';
import { AddressSearchComponent } from './new-search/address-search/address-search.component';
import { ApnSearchComponent } from './new-search/apn-search/apn-search.component';
import { PeopleSearchComponent } from './new-search/people-search/people-search.component';
import { PropertyRecordsComponent } from './view-search/property-overview/property-records/property-records.component';
import { MapsPhotosComponent } from './view-search/property-overview/maps-photos/maps-photos.component';
import { DeedInfoComponent } from './view-search/property-overview/deed-info/deed-info.component';
import { MortgageHistoryComponent } from './view-search/property-overview/mortgage-history/mortgage-history.component';
import { StructureDetailsComponent } from './view-search/property-overview/structure-details/structure-details.component';
import { ResidentsComponent } from './view-search/property-overview/residents/residents.component';
import { EnhancementDocsComponent } from './view-search/property-overview/enhancement-docs/enhancement-docs.component';
import { PropertySizeComponent } from './view-search/property-overview/structure-details/groups/property-size/property-size.component';
import { PoolComponent } from './view-search/property-overview/structure-details/groups/pool/pool.component';
import { InternalStructureInformationComponent } from './view-search/property-overview/structure-details/groups/internal-structure-information/internal-structure-information.component';
import { InternalRoomInformationComponent } from './view-search/property-overview/structure-details/groups/internal-room-information/internal-room-information.component';
import { InternalAmenitiesComponent } from './view-search/property-overview/structure-details/groups/internal-amenities/internal-amenities.component';
import { ExternalStructureInformationComponent } from './view-search/property-overview/structure-details/groups/external-structure-information/external-structure-information.component';
import { ExternalAmenitiesComponent } from './view-search/property-overview/structure-details/groups/external-amenities/external-amenities.component';
import { ExternalBuildingsComponent } from './view-search/property-overview/structure-details/groups/external-buildings/external-buildings.component';
import { UtilitiesComponent } from './view-search/property-overview/structure-details/groups/utilities/utilities.component';
import { ParkingComponent } from './view-search/property-overview/structure-details/groups/parking/parking.component';
import { YardGardenInformationComponent } from './view-search/property-overview/structure-details/groups/yard-garden-information/yard-garden-information.component';
import { DocumentInformationComponent } from './view-search/property-overview/deed-info/groups/document-information/document-information.component';
import { TransactionInformationComponent } from './view-search/property-overview/deed-info/groups/transaction-information/transaction-information.component';
import { PrimaryGrantorComponent } from './view-search/property-overview/deed-info/groups/primary-grantor/primary-grantor.component';
import { SecondaryGrantorComponent } from './view-search/property-overview/deed-info/groups/secondary-grantor/secondary-grantor.component';
import { PrimaryGranteeComponent } from './view-search/property-overview/deed-info/groups/primary-grantee/primary-grantee.component';
import { SecondaryGranteeComponent } from './view-search/property-overview/deed-info/groups/secondary-grantee/secondary-grantee.component';
import { TitleCompanyInfoComponent } from './view-search/property-overview/deed-info/groups/title-company-info/title-company-info.component';
import { PropertyOwnershipComponent } from './view-search/property-overview/property-records/groups/property-ownership/property-ownership.component';
import { PropertyDetailsComponent } from './view-search/property-overview/property-records/groups/property-details/property-details.component';
import { LastSaleComponent } from './view-search/property-overview/property-records/groups/last-sale/last-sale.component';
import { TaxInformationComponent } from './view-search/property-overview/property-records/groups/tax-information/tax-information.component';
import { EstimatedPropertyValueComponent } from './view-search/property-overview/property-records/groups/estimated-property-value/estimated-property-value.component';
import { MapSearchComponent } from './new-search/map-search/map-search.component';
import { StandardReportComponent } from './view-search/reports/standard-report/standard-report.component';
import { DeedAbstractReportComponent } from './view-search/reports/deed-abstract-report/deed-abstract-report.component';
import { MortgageAbstractReportComponent } from './view-search/reports/mortgage-abstract-report/mortgage-abstract-report.component';
import { OpenLiensAbstractReportComponent } from './view-search/reports/open-liens-abstract-report/open-liens-abstract-report.component';
import { PayAsUGoComponent } from './view-search/reports/pay-as-u-go/pay-as-u-go.component';
import { InAppPurchaseComponent } from './view-search/reports/in-app-purchase/in-app-purchase.component';
import { ViewPeopleComponent } from './view-people/view-people.component';
import { PdfViewerComponent } from './view-search/reports/pdf-viewer/pdf-viewer.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ViewOwnerComponent } from './view-owner/view-owner.component';
import { OptionalModalComponent } from './view-search/reports/open-liens-abstract-report/optional-modal/optional-modal.component';
import { MobileMenuComponent } from './view-search/property-overview/mobile-menu/mobile-menu.component';


@NgModule({
  declarations: [
    SearchComponent,
    NewSearchComponent,
    ViewSearchComponent,
    AddressSearchComponent,
    ApnSearchComponent,
    PeopleSearchComponent,
    PropertyRecordsComponent,
    MapsPhotosComponent,
    DeedInfoComponent,
    MortgageHistoryComponent,
    StructureDetailsComponent,
    ResidentsComponent,
    EnhancementDocsComponent,
    PropertySizeComponent,
    PoolComponent,
    InternalStructureInformationComponent,
    InternalRoomInformationComponent,
    InternalAmenitiesComponent,
    ExternalStructureInformationComponent,
    ExternalAmenitiesComponent,
    ExternalBuildingsComponent,
    UtilitiesComponent,
    ParkingComponent,
    YardGardenInformationComponent,
    DocumentInformationComponent,
    TransactionInformationComponent,
    PrimaryGrantorComponent,
    SecondaryGrantorComponent,
    PrimaryGranteeComponent,
    SecondaryGranteeComponent,
    TitleCompanyInfoComponent,
    PropertyOwnershipComponent,
    PropertyDetailsComponent,
    LastSaleComponent,
    TaxInformationComponent,
    EstimatedPropertyValueComponent,
    MapSearchComponent,
    StandardReportComponent,
    DeedAbstractReportComponent,
    MortgageAbstractReportComponent,
    OpenLiensAbstractReportComponent,
    PayAsUGoComponent,
    InAppPurchaseComponent,
    ViewPeopleComponent,
    PdfViewerComponent,
    ViewOwnerComponent,
    OptionalModalComponent,
    MobileMenuComponent,
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    SharedModule,
    AgmCoreModule,
    PdfViewerModule,
  ]
})
export class SearchModule { }
