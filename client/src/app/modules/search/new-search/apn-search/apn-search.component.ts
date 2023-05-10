import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import PGConstant from 'src/app/modules/shared/constants';
import { ApplicationService } from 'src/app/modules/shared/services/application/application.service';
import { CommonService } from 'src/app/modules/shared/services/common/common.service';
import { SharedService } from 'src/app/modules/shared/services/shared/shared.service';
import { CurrentUserService } from 'src/app/modules/_services/current-user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-apn-search',
  templateUrl: './apn-search.component.html',
})
export class ApnSearchComponent implements OnInit {
  readonly PGConstant = PGConstant;
  apnForm!: FormGroup;
  APNStates = PGConstant.APNStates;
  APNCounties: {
    text: string;
    value: string | null;
    statematch?: string;
    disabled?: boolean;
  }[] = [{ value: null, text: 'Select County', disabled: true }];
  constructor(
    private fb: FormBuilder,
    private appService: ApplicationService,
    private currentUser: CurrentUserService,
    private ss: SharedService,
    private router: Router,
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.initAPNForm();
  }

  private initAPNForm() {
    this.apnForm = this.fb.group({
      apn: ['', Validators.compose([Validators.required])],
      fipsCode: [null, Validators.compose([Validators.required])],
      state: [null, Validators.compose([Validators.required])],
    });
  }

  public onAPNStateChange(value: string) {
    const selectedState = PGConstant.APNStates.find(
      (state) => state.value === value
    );
    const initialCounty = [
      {
        value: null,
        text: 'Select County',
        disabled: true,
      },
    ];
    const APNCounties = PGConstant.APNCounty.filter(
      (state) => state.statematch === value && state.text != selectedState?.text
    );
    this.APNCounties = [...initialCounty, ...APNCounties];
  }

  public async onSubmit(form: FormGroup) {
    if (form.invalid) {
      return form.markAllAsTouched();
    }
    const propertySearchCount = this.currentUser.searchCount;
    if (!propertySearchCount)
      return this.commonService.searchConfirmation(
        this.currentUser.subscriptionType
      );
    try {
      const result = await this.appService.createAPNSearch(
        form.value.apn,
        form.value.fipsCode
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
        Swal.fire({
          icon: 'error',
          text: result.data.statusMessage,
        });
      }
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

  get f() {
    return this.apnForm.controls;
  }
}
