import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import * as _ from 'underscore';
import PGConstant from '../../shared/constants';
import { ApplicationService } from '../../shared/services/application/application.service';
import { CommonService } from '../../shared/services/common/common.service';
import { SharedService } from '../../shared/services/shared/shared.service';
import { CurrentUserService } from '../../_services/current-user.service';

@Component({
  selector: 'app-view-owner',
  templateUrl: './view-owner.component.html',
})
export class ViewOwnerComponent implements OnDestroy {
  readonly PGConstant = PGConstant;
  private model = {
    name: '',
    city: '',
    state: '',
  };
  propertyOwner: any;
  constructor(
    public ss: SharedService,
    private router: Router,
    private route: ActivatedRoute,
    private appService: ApplicationService,
    private currentUser: CurrentUserService,
    private commonService: CommonService
  ) {
    const params: any = this.route.snapshot.queryParamMap;
    this.model.name = params.get('name');
    this.model.city = params.get('city');
    this.model.state = params.get('state');
    if (!this.ss.isCurrentOwner) {
      this.router.navigate(['/search/view-people'], {
        queryParams: this.model,
      });
      return;
    }
    this.propertyOwner = this.ss.currentOwner.getValue();
  }

  public async createSearch(address: any, owner: string) {
    if (!Object.keys(address).length) return;
    const stateId = PGConstant.STATES.find(
      (state) => state.abbreviation === address.state_code
    )?.stateId;
    const payload: any = {
      street: address.street_line_1,
      stateId: stateId,
      zipCode: address.postal_code,
      city: address.city,
    };
    try {
      const propertySearchCount = this.currentUser.searchCount;
      if (!propertySearchCount)
        return this.commonService.searchConfirmation(
          this.currentUser.subscriptionType
        );
      const result = await this.appService.createSearch(
        payload,
        'Owner',
        owner
      );
      if (result.data.statusCode === 100) {
        this.ss.searchDetails.next(result.data.result);
        this.currentUser.currentUserValue['remainingSearchCount'] =
          result.data.result.user.remainingSearchCount;
        this.currentUser.currentUserSubject.next(
          this.currentUser.currentUserValue
        );
        this.router.navigateByUrl(
          '/search/view-search/' + result.data.result.psid + '/property-records'
        );
      } else {
        this.errorAlert(result.data.statusMessage);
      }
    } catch (e) {
      this.errorAlert(this.getErrorMessage(e));
    }
  }

  private errorAlert(message: string) {
    Swal.fire({
      icon: 'error',
      text: message,
    });
  }

  public uniqArray(sourceArray: any) {
    return _.uniq(sourceArray, (x) => x.city);
  }

  private getErrorMessage(error: unknown) {
    if (error instanceof Error) return error.message;
    return String(error);
  }

  ngOnDestroy(): void {
    this.ss.currentOwner.next({});
  }
}
