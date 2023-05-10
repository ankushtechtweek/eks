import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import PGConstant from 'src/app/modules/shared/constants';
import { SharedService } from 'src/app/modules/shared/services/shared/shared.service';
import { AuthService } from 'src/app/modules/_services/auth.service';
import Swal from 'sweetalert2';
import * as _ from 'underscore';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss'],
})
export class SubscriptionsComponent implements OnInit {
  readonly PGConstant: any = PGConstant;
  public planselected!: string;
  public subscriptions: any = [];
  public subType = 'yearly';
  constructor(
    private auth: AuthService,
    private router: Router,
    private ss: SharedService
  ) {}

  ngOnInit(): void {
    this.getSubscriptions();
  }

  public get getSubScriptionByType() {
    return this.subscriptions.filter(
      (item: any) =>
        item.subscription_model === this.subType ||
        item.subscription_model === null
    );
  }

  public dividedBy(amount: number) {
    return Number((amount / 12).toFixed(2));
  }

  private async getSubscriptions() {
    try {
      const result = await this.auth.getSubscriptions();
      this.subscriptions = _.sortBy(result.result, 'plan_upgrade_seq');
      this.subscriptions.forEach(
        (item: any) => (item.features = JSON.parse(item.features))
      );
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
    return this.subscriptions[0].features;
  }

  public amount(price: number) {
    if (Number.isInteger(price)) {
      return { dollars: price, cents: null };
    }
    const parts = price.toString().split('.');
    return { dollars: parts[0], cents: parts[1] };
  }

  public purchaseNow(plan: any) {
    this.router.navigate(['/register/create-user']);
    this.ss.activePlan.next(plan);
  }

  public filteredAmount(amount: number, plan: string) {
    if (this.subType === 'yearly') {
      if (plan === PGConstant.PLAN_TYPE.THREE_DAY) return this.amount(amount);
      return this.amount(this.dividedBy(amount));
    }
    return this.amount(amount);
  }
}
