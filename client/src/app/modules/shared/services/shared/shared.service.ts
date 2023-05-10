import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
  HistoricalTransactions,
  PorpertyRecord,
} from 'src/app/modules/search/view-search/_models/property-record.model';
import { StaticService } from '../static/static.service';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  public toggleSideMenu = new BehaviorSubject<any>(false);
  public toggleSearchMenu = new BehaviorSubject<any>(false);
  public isLastTransferDocument = new BehaviorSubject<any>(false);
  public isLastFinanceDocument = new BehaviorSubject<any>(false);
  public searchDetails = new BehaviorSubject<any>({});
  public coordinates = new BehaviorSubject<any>([]);
  public propertyRecord = new BehaviorSubject<PorpertyRecord>(this.staticService.getEmptyResponse);
  public historicalTransactions = new BehaviorSubject<HistoricalTransactions>(this.staticService.getHistoricalEmptyRes);
  public activePlan = new BehaviorSubject<any>({});
  public subscriptions = new BehaviorSubject<any>([]);
  public unauthUser = new BehaviorSubject<any>({});
  public appOrders = new BehaviorSubject<any>([]);
  public residents = new BehaviorSubject<any>([]);
  public currentOwner = new BehaviorSubject<any>({});
  public isUpgraded = new BehaviorSubject<boolean>(false);
  public noHistoricalData =  new BehaviorSubject<boolean>(false);

  constructor(private staticService:StaticService) {}

  get requestTypes() {
    return {
      CreateApplication: 1,
      CreateApplicationWithOrders: 2,
      CreateOrder: 3,
      GetApplicationsBasedOnUser: 4,
      GetVPTBasedOnUser: 5,
      GetStates: 6,
      GetApplicationAddressDetails: 7,
      GetApplicationFileDetails: 8,
      GetApplicationOrderDetails: 9,
      GetCompleteApplication: 10,
      UpdateApplicationDetails: 11,
      GetClients: 12,
      GetUserVPTS: 13,
      GetClientVPTS: 14,
      SaveCustomerVendorProductType: 15,
      RemoveCustomerVednorProductType: 16,
      SaveClientProfile: 17,
      GetClientDetail: 18,
      GetVendors: 19,
      SaveVendorProfile: 20,
      GetVendorProductTypes: 21,
      SaveVendorProductTypes: 22,
      RemoveVendorProductTypes: 23,
      GetVendorDetails: 24,
      GetUsers: 25,
      SaveUser: 26,
      GetUserDetails: 27,
      RemoveUser: 28,
      GetClientTypes: 29,
      GetVendorType: 30,
      GetAvailableServices: 31,
      GetProductTypesBasedOnService: 32,
      GetOrderTypesBasedOnProductID: 33,
      GetVendorRequestDetails: 34,
      SaveVendorProductRequestDetails: 35,
      GetVendorRequestIdBasedonVendorProductID: 36,
      GetClientVPTSBasedOnServiceIDAPI: 37,
      GetVPTBasedOnService: 38,
      GetDahboardOrderData: 39,
      GetDahboardProductData: 40,
      GetDahboardCustomerData: 41,
      GetRoles: 42,
      GetUserDetailsBasedonToken: 43,
      UpdateBorrowerApplication: 45,
      UpdateCoBorrowerApplication: 46,
      UpdateLoanApplication: 47,
      DownloadHistory: 54,
    };
  }

  public get propertRecord(): PorpertyRecord {
    return this.propertyRecord.getValue();
  }

  public get propertyDetails() {
    return this.searchDetails.getValue();
  }

  public get hisTransactions(): HistoricalTransactions {
    return this.historicalTransactions.getValue();
  }

  public get currentPlan() {
    return this.activePlan.getValue();
  }

  public get isPropertyRecord() {
    return Object.keys(this.propertRecord).length;
  }

  public get isUnauthUser() {
    return Object.keys(this.unauthUser.getValue()).length;
  }

  public get isHisTransactions() {
    return Object.keys(this.hisTransactions).length;
  }

  public get isResidents() {
    return this.residents.getValue() && this.residents.getValue().length;
  }

  public get isActivePlan() {
    return Object.keys(this.currentPlan).length;
  }

  public get isAppOrders() {
    return this.appOrders.getValue() && this.appOrders.getValue().length;
  }

  public get isCurrentOwner() {
    return Object.keys(this.currentOwner.getValue()).length;
  }
}
