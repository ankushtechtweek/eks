import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginRequestModel } from '../auth/login/_models/login.request';
import { LoginResponseModel } from '../auth/login/_models/login.response';
import { LocalStorageService } from '../shared/services/local-storage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public tokenSubject!: BehaviorSubject<any>;

  constructor(
    private router: Router,
    private http: HttpClient,
    private ls: LocalStorageService
  ) {
    this.tokenSubject = new BehaviorSubject<any>(this.currentToken());
  }

  public login(user: LoginRequestModel) {
    let params = new HttpParams();
    params = params.append('username', user.username);
    params = params.append('password', user.password);
    params = params.append('grant_type', user.grant_type);
    params = params.append('client_id', user.client_id);
    params = params.append('client_secret', user.client_secret);
    params = params.append('scope', user.scope);
    params = params.append('role', 'Standard');
    return lastValueFrom(
      this.http.post<LoginResponseModel>(
        environment.IDENTITY_URL + '/connect/token',
        params.toString(),
        { headers: this.httpHeaders() }
      )
    );
  }

  public getSubscriptions() {
    return lastValueFrom(
      this.http.get<any>(
        `${environment.API_SUB}/subscriptionplans/GetSubscriptionPlans`
      )
    );
  }

  public upgradeSubscription(planName: string, cancelReason: string) {
    return lastValueFrom(
      this.http.post<any>(`${environment.PS_USER}/UpgradeUserSubscription`, {
        planName,
        cancelReason,
      })
    );
  }

  public saveDoNotSell(payload: any) {
    return lastValueFrom(
      this.http.post<any>(`${environment.PS_USER}/SaveDoNotSell`, payload)
    );
  }

  public createUser(payload: any) {
    return lastValueFrom(
      this.http.post<any>(`${environment.PS_USER}/SaveUserProfile`, payload)
    );
  }

  public postPurchaseQA(payload: any) {
    return lastValueFrom(
      this.http.post<any>(`${environment.PS_USER}/PostPruchaseQandA`, payload)
    );
  }

  public forgotPassword(email: string) {
    return lastValueFrom(
      this.http.get<any>(
        `${environment.PS_USER}/forgotpassword?email=${encodeURIComponent(
          email
        )}&role=Standard`
      )
    );
  }

  public resetPassword(payload: any) {
    return lastValueFrom(
      this.http.post<any>(`${environment.PS_USER}/resetpassword`, payload)
    );
  }

  private httpHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
  }

  public get currentTokenValue() {
    return this.tokenSubject.value;
  }

  public currentToken() {
    return this.ls.get('token');
  }

  /** signout */
  public signOut() {
    this.router.navigate(['/auth/login']);
    this.ls.remove('token');
    this.clearSubjects();
  }

  private clearSubjects() {
    this.tokenSubject.next(null);
  }
}
