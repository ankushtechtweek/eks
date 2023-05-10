import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import PGConstant from '../../shared/constants';
import { ApplicationService } from '../../shared/services/application/application.service';
import { SharedService } from '../../shared/services/shared/shared.service';
import { StaticService } from '../../shared/services/static/static.service';
import { CurrentUserService } from '../../_services/current-user.service';
import {
  HistoricalTransactions,
  PorpertyRecord,
} from './_models/property-record.model';

@Component({
  selector: 'app-view-search',
  templateUrl: './view-search.component.html',
  styleUrls: ['./view-search.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ViewSearchComponent implements OnInit, OnDestroy {
  @ViewChild('goTop') overviewElement!: ElementRef;
  readonly PGConstant = PGConstant;
  public tabScrollEvent: number = 0;
  private scrollToBottom: number = 0;
  public currentRoute = 'property-records';
  private searchId: string;
  public isFavorite = false;
  public searchNavs: {
    tab: string;
    route: string;
    icon: string;
    lock: boolean;
    isPremium: boolean;
  }[];
  public reportNavs: {
    tab: string;
    route: string;
    icon: string;
    desc: string;
    lock: boolean;
    credits: string;
    isPremium: boolean;
    selected: boolean;
    name: string;
  }[];

  constructor(
    public staticService: StaticService,
    private route: ActivatedRoute,
    private appService: ApplicationService,
    public currentUser: CurrentUserService,
    private router: Router,
    public ss: SharedService
  ) {
    this.searchNavs = this.staticService.searchNavs;
    this.reportNavs = this.staticService.reportnavs;
    this.searchId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    if (!Object.keys(this.ss.searchDetails.getValue()).length) {
      this.getSearchById();
    } else {
      this.setPropertRecord();
    }
  }

  private async getSearchById() {
    try {
      const result = await this.appService.getSearchById(this.searchId);
      this.ss.searchDetails.next(result.data.result);
      this.setPropertRecord();
    } catch (e) {
      Swal.fire({
        icon: 'error',
        text: this.getErrorMessage(e),
      });
    }
  }

  private setPropertRecord() {
    const data = this.ss.searchDetails.getValue();
    if (Object.keys(data).length) {
      if (data.appOrders && data.appOrders.length) {
        const propertyData = data.appOrders[0]?.responseData
          ? JSON.parse(data.appOrders[0].responseData)
          : {};
        this.ss.appOrders.next(data.appOrders);
        this.propertyRecord(propertyData.property.DetailedData.Records);
        this.historicalTransactions(
          propertyData.property.HistoricalTransactions
        );
      }
    }
    if (!this.currentUser.is3DayPlan) {
      this.isReportsAvailable();
    }
  }

  private getStateFips() {
    const result: any = PGConstant.APNStates.find(
      (item) =>
        item.text ===
        this.ss.propertyDetails.propertyAddressNavigation.state.name
    );
    return result.value;
  }

  private async isReportsAvailable() {
    const countyFips = this.ss.propertRecord.Parcel.FIPSCode;
    const stateFips = this.getStateFips();
    try {
      const result = await this.appService.isReportAvailable(
        countyFips,
        stateFips
      );
      if (result.statusCode === 100) {
        if (
          result.result.DataCoverageDetails &&
          result.result.DataCoverageDetails.length
        ) {
          const isDeed = result.result.DataCoverageDetails[0].DataCoverage.find(
            (item: any) => item.ProductName === 'LastTransferDocument'
          );
          const isMortgage =
            result.result.DataCoverageDetails[0].DataCoverage.find(
              (item: any) => item.ProductName === 'LastFinanceDocument'
            );
          if (isDeed.IsCountyDataAvailable) {
            this.ss.isLastTransferDocument.next(true);
          }
          if (isMortgage.IsCountyDataAvailable) {
            this.ss.isLastFinanceDocument.next(true);
          }
        }
      }
    } catch (e) {
      Swal.fire({
        icon: 'error',
        text: this.getErrorMessage(e),
      });
    }
  }

  public get isCombineAvailable() {
    if (
      this.ss.isLastTransferDocument.getValue() &&
      this.ss.isLastFinanceDocument.getValue()
    )
      return true;
    return false;
  }

  public isAvailble(reprtType: string) {
    switch (reprtType) {
      case 'standard-report':
        return true;
      case 'deed-abstract':
        if (this.ss.isLastTransferDocument.getValue()) return true;
        return false;
      case 'mortgage-abstract':
        if (this.ss.isLastFinanceDocument.getValue()) return true;
        return false;
      case 'open-liens':
        return this.isCombineAvailable;
      default:
        return false;
    }
  }

  private propertyRecord(records: Array<any>) {
    if (records && records.length) {
      const data =
        Object.keys(records[0]).length > 1
          ? records[0]
          : this.staticService.getEmptyResponse;
      this.ss.propertyRecord.next(data);
    }
  }

  private historicalTransactions(records: any) {
    if (records.TotalRecords) {
      this.ss.noHistoricalData.next(false);
      this.ss.historicalTransactions.next(records);
    } else {
      this.ss.historicalTransactions.next(
        this.staticService.getHistoricalEmptyRes
      );
      this.ss.noHistoricalData.next(true);
    }
  }

  public async onStarCheckChange(checked: boolean, psId: string) {
    try {
      const result = await this.appService.addOrDeleteFav(psId);
      Swal.fire({
        icon: 'success',
        text: result.statusMessage,
      });
    } catch (e) {
      this.isFavorite = false;
      Swal.fire({
        icon: 'error',
        text: this.getErrorMessage(e),
      });
    }
  }

  public onScroll(event: any) {
    let currentRoute = this.router.url.split('/').pop();
    const route: any = this.staticService.getSearchRoutes.find(
      (route) => route.route === currentRoute
    );
    if (
      event.target.offsetHeight + Math.ceil(event.target.scrollTop) >=
      event.target.scrollHeight
    ) {
      this.router.navigate([
        `search/view-search/${this.searchId}/${route?.nextRoute}`,
      ]);
      this.overviewElement.nativeElement.scrollTop = 0;
      this.scrollToBottom = route.bottom;
    }
  }

  public viewMenu() {
    this.ss.toggleSearchMenu.next(true);
    setTimeout(() => (this.tabScrollEvent = this.scrollToBottom), 10);
  }

  private getErrorMessage(error: unknown) {
    if (error instanceof Error) return error.message;
    return String(error);
  }

  ngOnDestroy(): void {
    this.ss.searchDetails.next([]);
    this.ss.propertyRecord.next(<PorpertyRecord>{});
    this.ss.historicalTransactions.next(<HistoricalTransactions>{});
    this.ss.isLastTransferDocument.next(false);
    this.ss.noHistoricalData.next(false);
    this.ss.isLastFinanceDocument.next(false);
    this.ss.appOrders.next([]);
    this.ss.residents.next([]);
    this.ss.toggleSearchMenu.next(false);
  }
}
