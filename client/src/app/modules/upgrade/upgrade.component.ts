import { Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import PGConstant from '../shared/constants';
import { SharedService } from '../shared/services/shared/shared.service';
import { AuthService } from '../_services/auth.service';
import { CurrentUserService } from '../_services/current-user.service';
import * as _ from 'underscore';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.scss'],
})
export class UpgradeComponent implements OnInit {
  @Input() modal: boolean = false;
  readonly PGConstant: any = PGConstant;
  public planselected!: string;
  public subscriptions: any = [];
  public subType = 'yearly';
  public timer = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };
  public expired!: boolean;

  constructor(
    private auth: AuthService,
    private ss: SharedService,
    public currentUser: CurrentUserService,
    public activeModal: NgbActiveModal,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getSubscriptions();
    this.initTimer();
  }

  private async initTimer() {
    const user = await this.currentUser.currentUserValue;
    console.log(user, 'user.....');
    if (user.appUserSubscriptions && user.appUserSubscriptions.length) {
      let date = new Date(user.appUserSubscriptions[0].endDate);
      let countDownDate = new Date(date.toLocaleString() + ' UTC').getTime();
      const x = setInterval(() => {
        // Get today's date and time
        let now = new Date().getTime();
        // Find the distance between now and the count down date
        let distance = countDownDate - now;
        // Time calculations for days, hours, minutes and seconds
        this.timer.days = Math.floor(distance / (1000 * 60 * 60 * 24));
        this.timer.hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        this.timer.minutes = Math.floor(
          (distance % (1000 * 60 * 60)) / (1000 * 60)
        );
        this.timer.seconds = Math.floor((distance % (1000 * 60)) / 1000);
        // If the count down is finished, write some text
        if (distance < 0) {
          clearInterval(x);
          this.expired = true;
        }
      }, 1000);
    } else {
      this.expired = true;
    }
  }

  public get getSubScriptionByType() {
    if (this.currentUser.is3DayPlan) {
      return this.subscriptions.filter(
        (item: any) =>
          item.subscription_model === this.subType ||
          item.subscription_model === null
      );
    }
    return this.subscriptions.filter(
      (item: any) => item.subscription_model === this.subType
    );
  }

  public get currentSeq() {
    return this.subscriptions.find(
      (plan: any) => plan.planName === this.currentUser.subscriptionType
    )?.plan_upgrade_seq;
  }

  private async getSubscriptions() {
    try {
      const result = await this.auth.getSubscriptions();
      this.subscriptions = _.sortBy(result.result, 'plan_upgrade_seq');
    } catch (e) {
      Swal.fire({
        icon: 'error',
        text: this.getErrorMessage(e),
      });
    }
  }

  private getErrorMessage(error: unknown) {
    if (error instanceof Error) return error.message;
    return String(error);
  }

  public get features() {
    return JSON.parse(this.subscriptions[0].features);
  }

  public dividedBy(amount: number) {
    return Number((amount / 12).toFixed(2));
  }

  public parseFeature(feature: any) {
    return JSON.parse(feature);
  }

  public endDate() {
    let result = new Date(this.currentUser.currentUserValue.createdDate);
    result.setDate(result.getDate() + 3);
    return result;
  }

  public amount(price: number) {
    if (Number.isInteger(price)) {
      return { dollars: price, cents: null };
    }
    const parts = price.toString().split('.');
    return { dollars: parts[0], cents: parts[1] };
  }

  public discount(price: number, planName: string) {
    if (planName != PGConstant.PLAN_TYPE.THREE_DAY) {
      price = Number((price - PGConstant.DiscountAmount).toFixed(2));
    }
    if (Number.isInteger(price)) {
      return { dollars: price, cents: null };
    }
    const parts = price.toString().split('.');
    return { dollars: parts[0], cents: parts[1] };
  }

  public upgradeAlert(plan: any) {
    Swal.fire({
      title: "<p class='h4'><strong>It's Time to Upgrade</strong></p>",
      html: `<p class='h6'> By clicking "Agree & Upgrade" you agree to enroll in automatic payments that will continue until you cancel.</p><br><p class='h6'>You can cancel any time, effective at the end of the billing period.</p>`,
      icon: 'question',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Agree & Upgrade',
      showCloseButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        this.upgradeNow(plan.planName, `plan changed to ${plan.planName}`);
      }
    });
  }

  private async upgradeNow(planName: string, reason: string) {
    try {
      const result = await this.auth.upgradeSubscription(planName, reason);
      if (result.statusCode === 100) {
        this.currentUser.currentUserSubject.next(result.result);
        this.ss.isUpgraded.next(true);
        this.router.navigate([
          `/upgrade/thank-you/${planName.replace(/ /g, '-')}`,
        ]);
        if (this.modal) {
          this.activeModal.close();
        }
      } else {
        this.errorMessage(result.statusMessage);
      }
    } catch (e) {
      this.errorMessage(this.getErrorMessage(e));
    }
  }

  private errorMessage(error: string) {
    Swal.fire({
      icon: 'error',
      text: error,
    });
  }

  public planCheck(upgradeSeq: number) {
    return (
      (this.currentSeq < upgradeSeq ? false : true) &&
      (this.currentUser.is3DayPlan ? true : this.currentUser.searchCount)
    );
  }

  public filteredAmount(amount: number, plan: string) {
    if (this.subType === 'yearly') {
      if (plan === PGConstant.PLAN_TYPE.THREE_DAY) return this.amount(amount);
      return this.amount(this.dividedBy(amount));
    }
    return this.amount(amount);
  }
}
