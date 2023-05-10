import { MapsAPILoader } from '@agm/core';
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import PGConstant from 'src/app/modules/shared/constants';
import { StaticService } from 'src/app/modules/shared/services/static/static.service';

@Component({
  selector: 'app-test-report',
  templateUrl: './test-report.component.html',
  styleUrls: ['./test-report.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TestReportComponent implements OnInit, OnDestroy {
  readonly PGConstant = PGConstant;
  public address: any = {
    address: '123 Main St',
    city: 'Anytown',
    zip: '12345',
    state: 'TX',
    test: true,
  };
  public apn: any = {
    APNcode: null,
    FIPSCode: null,
    StateCode: null,
  };
  public activeTab = 'property-records';
  private subscription!: Subscription;
  public positions = {
    lat: 0,
    lng: 0,
  };
  public searchNavs!: {
    tab: string;
    route: string;
    icon: string;
    lock: boolean;
    isPremium: boolean;
  }[];
  public reportNavs!: {
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
    private route: ActivatedRoute,
    private staticService: StaticService,
    private mapsAPILoader: MapsAPILoader
  ) {}

  ngOnInit(): void {
    this.searchNavs = this.staticService.searchNavs;
    this.reportNavs = this.staticService.reportnavs;
    this.subscription = this.route.queryParams.subscribe((params) => {
      if (Object.keys(params).length) {
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
          this.getPositions(this.address);
        }
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

  private getPositions(address: any): void {
    this.mapsAPILoader.load().then(() => {
      let that = this;
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode(
        {
          address: `${address.street} ${address.city} ${address.county} ${address.state} ${address.zip}`,
        },
        async (results, status) => {
          if (status === google.maps.GeocoderStatus.OK) {
            this.positions.lat = results[0].geometry.location.lat();
            this.positions.lng = results[0].geometry.location.lng();
          } else if (status === google.maps.GeocoderStatus.OVER_QUERY_LIMIT) {
            setTimeout(function () {
              //Recursively calling getPosition method for lost addresses
              that.getPositions(address);
            }, 1000);
          }
        }
      );
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
