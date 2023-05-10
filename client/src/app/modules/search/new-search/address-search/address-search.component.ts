import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  map,
  Observable,
  of,
  switchMap,
} from 'rxjs';
import PGConstant from 'src/app/modules/shared/constants';
import { ApplicationService } from 'src/app/modules/shared/services/application/application.service';
import { CommonService } from 'src/app/modules/shared/services/common/common.service';
import { SharedService } from 'src/app/modules/shared/services/shared/shared.service';
import { CurrentUserService } from 'src/app/modules/_services/current-user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-address-search',
  templateUrl: './address-search.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class AddressSearchComponent implements OnInit {
  readonly PGConstant = PGConstant;
  public suiteList: any = [];
  private addressForm!: FormGroup;
  public modal: any = {
    searchText: null,
  };
  constructor(
    public ss: SharedService,
    private fb: FormBuilder,
    private appService: ApplicationService,
    private currentUser: CurrentUserService,
    private router: Router,
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.initAddressForm();
  }

  private initAddressForm() {
    this.addressForm = this.fb.group({
      street: ['', Validators.compose([Validators.required])],
      stateId: ['', Validators.compose([Validators.required])],
      zipCode: ['', Validators.compose([Validators.required])],
      county: [''],
      city: ['', Validators.compose([Validators.required])],
    });
  }

  public search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(PGConstant.DEBOUNCE_TIME),
      distinctUntilChanged(),
      switchMap((term) => {
        return this.appService.typeAHead(term).pipe(
          map((response) => {
            return this.lists(JSON.parse(response.result));
          }),
          catchError(() => {
            return of([]);
          })
        );
      })
    );

  private lists(data: any) {
    const suiteLists = data.filter((item: any) => item.Address.SuiteCount);
    const plainAddress = data.filter((item: any) => !item.Address.SuiteCount);
    return [...suiteLists, ...plainAddress];
  }

  public selectedItem(item: any) {
    const address = item.item.Address;
    if (address.SuiteCount) {
      this.suiteList = [...address.SuiteList];
      this.setAddress(item.item.Address.AddressLine1, item.item.Address, true);
      return;
    }
    this.setAddress(item.item.Address.AddressLine1, item.item.Address, false);
  }

  public selectedSuit(value: string) {
    const address = this.modal.searchText.Address.AddressLine1 + ', ' + value;
    this.setAddress(address, this.modal.searchText.Address, true);
  }

  public setAddress(AddressLine1: string, address: any, isSuit: boolean) {
    const stateId = PGConstant.STATES.find(
      (state) => state.abbreviation === address.State
    )?.stateId;
    this.addressForm.patchValue({
      street: AddressLine1,
      city: address.City,
      zipCode: address.PostalCode.split('-')[0],
      stateId: stateId,
    });
    if (!isSuit) {
      this.createSearch();
    }
  }

  public isSearchText(searchTxt: string) {
    if (!searchTxt) this.suiteList = [];
  }

  public resultFormatBandListValue(value: any) {
    const address = value.Address;
    return `${address.AddressLine1}, ${address.City}, ${address.State}, ${
      address.PostalCode.split('-')[0]
    }`;
  }

  public inputFormatBandListValue(value: any) {
    if (Object.keys(value).length) {
      const address = value.Address;
      return `${address.AddressLine1}, ${address.City}, ${address.State}, ${
        address.PostalCode.split('-')[0]
      }`;
    }
    return '';
  }

  public async createSearch() {
    const propertySearchCount = this.currentUser.searchCount;
    if (!propertySearchCount)
      return this.commonService.searchConfirmation(
        this.currentUser.subscriptionType
      );
    try {
      const result = await this.appService.createSearch(
        this.addressForm.value,
        'Address',
        ''
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

  private getErrorMessage(error: unknown) {
    if (error instanceof Error) return error.message;
    return String(error);
  }
}
