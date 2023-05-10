import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import PGConstant from '../shared/constants';
import { ApplicationService } from '../shared/services/application/application.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CurrentUserService {
  readonly PGConstant = PGConstant;
  public currentUserSubject!: BehaviorSubject<any>;
  constructor(
    private appService: ApplicationService,
    private auth: AuthService
  ) {
    this.currentUserSubject = new BehaviorSubject<any>(this.currentUser());
  }

  public get currentUserValue() {
    return this.currentUserSubject?.value;
  }

  private async currentUser() {
    if (this.currentUserValue) {
      return this.currentUserValue;
    }
    if (this.auth.currentTokenValue) {
      const user = await this.appService.getUserDetails();
      this.currentUserSubject.next(user.data.result);
      return this.currentUserValue;
    }
  }

  public get fullName(): string {
    const user = this.currentUserValue;
    return user?.firstName ? `${user.firstName} ${user.lastName}` : 'N/A';
  }

  public get email(): string {
    const user = this.currentUserValue;
    return user?.email ? user.email : 'N/A';
  }

  public get subscriptionType(): string {
    const user = this.currentUserValue;
    return user?.subscriptionType ? user.subscriptionType : 'N/A';
  }

  public get is3DayPlan(): boolean {
    const user = this.currentUserValue;
    return user?.subscriptionType === PGConstant.PLAN_TYPE.THREE_DAY;
  }

  public get searchCount(): number {
    const user = this.currentUserValue;
    return user?.remainingSearchCount ? user.remainingSearchCount : 0;
  }

  public get totalSearchCount(): number {
    const user = this.currentUserValue;
    return user?.totalSearchCount ? user.totalSearchCount : 0;
  }

  public get phone() {
    const user = this.currentUserValue;
    return user?.phone ? user.phone : 'N/A';
  }

  public get reportCount() {
    const user = this.currentUserValue;
    return user?.propertyReportCount ? user.propertyReportCount : 0;
  }

  public get createdAt(): string {
    const user = this.currentUserValue;
    return user?.createdDate ? user.createdDate : null;
  }

  public get isActive(): string {
    const user = this.currentUserValue;
    return user?.isActive ? user.isActive : 'N/A';
  }

  public get paymentStatus(): string {
    const user = this.currentUserValue;
    return user?.paymentStatus ? user.paymentStatus : 'N/A';
  }

  public get userCancellation(): string{
    const user = this.currentUserValue;
    return user?.cancellationDate ? user.cancellationDate : '';
  }
}
