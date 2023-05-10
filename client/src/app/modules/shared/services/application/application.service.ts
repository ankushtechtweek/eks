import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { UserResponseModel } from 'src/app/modules/auth/login/_models/user.response';
import { environment } from 'src/environments/environment';
import { AddressModel } from '../../models/address.model';
import { PagerModel } from '../../models/pager.model';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { SharedService } from '../shared/shared.service';

@Injectable({
  providedIn: 'root',
})
export class ApplicationService {
  constructor(
    private http: HttpClient,
    private ss: SharedService,
    private handler: HttpBackend,
    private ls: LocalStorageService
  ) {}

  public getUserDetails() {
    const request = {
      RequestType: this.ss.requestTypes.GetUserDetailsBasedonToken,
    };
    return lastValueFrom(
      this.http.post<UserResponseModel>(`${environment.PS}`, request)
    );
  }

  public getSearches(pager: PagerModel, userId: string) {
    const request = {
      RequestType: this.ss.requestTypes.GetApplicationsBasedOnUser,
      UserID: userId,
      FilterOptions: {
        PageSize: pager.itemsPerPage,
        PageNumber: pager.currentPage,
        SearchColumn: pager.search,
        SearchValue: pager.searchValue,
        SortColumn: pager.sortColumn,
        SortDirection: pager.sortDirection,
      },
    };
    return lastValueFrom(this.http.post<any>(`${environment.PS}`, request));
  }

  public getDownloadHistory(pager: PagerModel, userId: string) {
    const request = {
      RequestType: this.ss.requestTypes.DownloadHistory,
      UserID: userId,
      FilterOptions: {
        PageSize: pager.itemsPerPage,
        PageNumber: pager.currentPage,
        SearchColumn: pager.search,
        SearchValue: pager.searchValue,
        SortColumn: pager.sortColumn,
        SortDirection: pager.sortDirection,
      },
    };
    return lastValueFrom(this.http.post<any>(`${environment.PS}`, request));
  }

  //skip interceptor
  private jwt(): any {
    const token = this.ls.get('token');
    if (token && token.access_token) {
      return new HttpHeaders({ Authorization: 'Bearer ' + token.access_token })
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json');
    }
  }

  public getSearchById(appId: string) {
    const request = {
      RequestType: this.ss.requestTypes.GetCompleteApplication,
      PSID: appId,
    };
    return lastValueFrom(this.http.post<any>(`${environment.PS}`, request));
  }

  public cancelSubscription(email: string, cancellationReason: string) {
    return lastValueFrom(
      this.http.post<any>(`${environment.PS_USER}/CancelStripeSubscription`, {
        email,
        cancellationReason,
      })
    );
  }

  public createSearch(address: AddressModel, type: string, owner: string) {
    const request = {
      Application: {
        PropertyAddressNavigation: address,
        SearchType: type,
        PropertyOwner: owner,
      },
      RequestType: this.ss.requestTypes.CreateApplication,
    };
    return lastValueFrom(this.http.post<any>(`${environment.PS}`, request));
  }

  public createAPNSearch(apn: string, fipsCode: string) {
    const request = {
      Application: {
        PropertyAddressNavigation: {
          street: null,
          city: null,
          county: null,
          zipCode: null,
          stateId: null,
        },
        SearchType: 'APN',
        APN: apn,
        FipsCode: fipsCode,
      },
      RequestType: this.ss.requestTypes.CreateApplication,
    };
    return lastValueFrom(this.http.post<any>(`${environment.PS}`, request));
  }

  public peopleSearch(name: string, city: string, state: string) {
    return lastValueFrom(
      this.http.get<any>(
        `${environment.APPLICATION_URL}/GetPeopleResponse?name=${name}&city=${city}&statecode=${state}`
      )
    );
  }

  public getReportPDF(file: string) {
    return lastValueFrom(
      this.http.get<any>(
        `${environment.APPLICATION_URL}/DownloadFilesfromAws?fileName=${file}`
      )
    );
  }

  public isReportAvailable(countyFips: string, stateFips: string) {
    return lastValueFrom(
      this.http.get<any>(
        `${environment.APPLICATION_URL}/GetCoverageResponse?statefips=${stateFips}&countyfips=${countyFips}`
      )
    );
  }

  public getCoordinates(lat: number, lng: number) {
    return lastValueFrom(
      this.http.get<any>(
        `${environment.APPLICATION_URL}/GetRegridResponse?lat=${lat}&lng=${lng}`
      )
    );
  }

  public updateUserProfile(user: any) {
    return lastValueFrom(
      this.http.post<any>(`${environment.PS_USER}/UpdateUserProfile`, user)
    );
  }

  public downloadPDF(
    orderType: string,
    psId: string,
    ownerName: string,
    refId: string
  ) {
    return lastValueFrom(
      this.http.post<any>(`${environment.APPLICATION_URL}/CreateOrder`, {
        orderType,
        psId,
        ownerName,
        refId,
      })
    );
  }

  public getBlobFromURL(url: string) {
    let httpClient = new HttpClient(this.handler);
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/pdf');
    return lastValueFrom(
      httpClient.get(url, { headers: headers, responseType: 'blob' })
    );
  }

  public purchaseCredits(email: string, credits: number, planName: string) {
    return lastValueFrom(
      this.http.post<any>(`${environment.PS_USER}/PurchaseCredits`, {
        email,
        credits,
        planName,
      })
    );
  }

  public getPurchaseHistory(userId: string) {
    return lastValueFrom(
      this.http.get<any>(
        `${environment.PS_USER}/GetPurchaseHistory?userId=${userId}`
      )
    );
  }

  public getResident(street: string, city: string, state: string, zip: string) {
    return lastValueFrom(
      this.http.get<any>(
        `${environment.APPLICATION_URL}/GetResidentResponse?streetline1=${street}&city=${city}r&statecode=${state}&streetline2&postalcode=${zip}`
      )
    );
  }

  public downloadCombineReport(payload: any) {
    return lastValueFrom(
      this.http.post<any>(
        `${environment.APPLICATION_URL}/GenerateCombinedReport`,
        payload
      )
    );
  }

  public addOrDeleteFav(psId: string) {
    return lastValueFrom(
      this.http.get<any>(
        `${environment.APPLICATION_URL}/AddorDeleteUserFavourites?PSID=${psId}`
      )
    );
  }

  public updatePayment(paymentMedhod: string) {
    return lastValueFrom(
      this.http.get<any>(
        `${environment.PS_USER}/UpdateUserCardDetails?paymentMethodId=${paymentMedhod}`
      )
    );
  }

  public changePassword(oldPassword: string, newPassword: string) {
    return lastValueFrom(
      this.http.post<any>(`${environment.PS_USER}/ChangePassword`, {
        oldPassword,
        newPassword,
      })
    );
  }

  public typeAHead(searcValue: string) {
    return this.http.get<any>(
      `${environment.APPLICATION_URL}/AutoFillSearch?strAddress=${searcValue}`
    );
  }

  public geoCode(address: any) {
    let httpClient = new HttpClient(this.handler);
    return lastValueFrom(
      httpClient.get<any>(
        'https://maps.googleapis.com/maps/api/geocode/json?address=' +
          address +
          '&key=' +
          environment.GOOGLE_MAP_API_KEY
      )
    );
  }
}
