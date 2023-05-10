import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import PGConstant from 'src/app/modules/shared/constants';

@Component({
  selector: 'app-subscription-header',
  templateUrl: './subscription-header.component.html',
})
export class SubscriptionHeaderComponent implements OnInit, OnDestroy {
  readonly PGConstant = PGConstant;
  public address: any = {
    address: '',
    city: '',
    zip: '',
    state: '',
  };
  public apn: any = {
    APNcode: null,
    FIPSCode: null,
    StateCode: null,
  };
  private subscription!: Subscription;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.subscription = this.route.queryParams.subscribe((params) => {
      if (Object.keys(params).some((key) => key === 'APNcode')) {
        this.apn = params;
        this.address = {
          address: '',
          city: '',
          zip: '',
          state: '',
        };
      } else {
        this.address = params;
        this.apn = {
          APNcode: null,
          FIPSCode: null,
          StateCode: null,
        };
      }
    });
  }

  public getAPNCounty(fipsCode: string) {
    const result: any = PGConstant.APNCounty.find(
      (item) => item.value === fipsCode
    );
    return result.text;
  }

  public getAPNState(state: string) {
    const result: any = PGConstant.APNStates.find(
      (item) => item.value === state
    );
    return result.text;
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
