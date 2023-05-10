import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControlOptions,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ConfirmValidator } from '../../reset-password/confirm-validators';
import { loadStripe } from '@stripe/stripe-js';
import Swal from 'sweetalert2';
import { SharedService } from 'src/app/modules/shared/services/shared/shared.service';
import { Router } from '@angular/router';
import PGConstant from 'src/app/modules/shared/constants';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/modules/_services/auth.service';
import { LoaderService } from 'src/app/modules/shared/services/loader/loader.service';
import {
  CountryISO,
  PhoneNumberFormat,
  SearchCountryField,
} from 'ngx-intl-tel-input';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
})
export class CreateUserComponent implements OnInit, OnDestroy {
  readonly PGConstant: any = PGConstant;
  public userForm!: FormGroup;
  private stripe: any;
  private card: any;
  public isChecked!: boolean;
  public CountryISO = CountryISO;
  public SearchCountryField = SearchCountryField;
  public PhoneNumberFormat = PhoneNumberFormat;
  constructor(
    public fb: FormBuilder,
    private loaderService: LoaderService,
    public ss: SharedService,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    // redirect to home if already logged in
    if (!this.ss.isActivePlan) {
      this.router.navigate(['/register/subscriptions']);
      return;
    }
    this.initUserForm();
    this.initStripe();
  }

  async initStripe() {
    this.stripe = await loadStripe(environment.STRIPE_API_KEY);
    const elements = this.stripe.elements();
    let style = {
      base: {
        fontSize: '16px',
        color: '#32325d',
        fontFamily:
          '-apple-system, BlinkMacSystemFont, Segoe UI, Gilroy, sans-serif',
        fontSmoothing: 'antialiased',
        '::placeholder': {
          color: 'rgba(0,0,0,0.4)',
        },
      },
    };
    this.card = elements.create('card', { style: style });
    this.card.mount('#card-element');
    this.card.on('focus', function () {
      let el = document.getElementById('card-element');
      el?.classList.add('focused');
    });
    this.card.on('blur', function () {
      let el = document.getElementById('card-element');
      el?.classList.remove('focused');
    });
  }

  private initUserForm() {
    this.userForm = this.fb.group(
      {
        firstName: ['', Validators.compose([Validators.required])],
        lastName: ['', Validators.compose([Validators.required])],
        email: [
          '',
          Validators.compose([
            Validators.pattern(this.PGConstant.EMAIL_PATTERN),
            Validators.required,
          ]),
        ],
        phone: ['', Validators.compose([Validators.required])],
        password: [
          '',
          Validators.compose([
            Validators.pattern(this.PGConstant.PASSWORD_PATTERN),
            Validators.required,
          ]),
        ],
        subscriptionType: [
          this.ss.currentPlan.planName,
          Validators.compose([Validators.required]),
        ],
        paymentMethodID: [''],
        isdemo: [0],
        clientID: [1],
        roleID: [3],
        userName: [''],
        confirmPassword: ['', Validators.compose([Validators.required])],
      },
      {
        validator: ConfirmValidator('password', 'confirmPassword'),
      } as AbstractControlOptions
    );
  }

  private createPaymentMethodAndCustomer() {
    this.loaderService.show();
    const username =
      this.userForm.value.firstName + ' ' + this.userForm.value.lastName;
    this.stripe
      .createPaymentMethod('card', this.card, {
        billing_details: {
          email: this.userForm.value.email.toLowerCase(),
          name: username,
        },
      })
      .then((result: any) => {
        if (result.error) {
          Swal.fire({
            icon: 'error',
            text: result.error.message,
          });
          this.showCardError(result.error);
          this.loaderService.hide();
        } else {
          this.createCustomer(result.paymentMethod.id);
        }
      });
  }

  private async createCustomer(paymentId: string) {
    try {
      this.userForm.patchValue({
        paymentMethodID: paymentId,
        userName: this.userForm.value.email,
        phone: this.userForm.value.phone.nationalNumber,
      });
      const result = await this.auth.createUser(this.userForm.value);
      if (result.statusCode === 100) {
        this.ss.unauthUser.next({
          userId: result.result.userId,
          planName: this.ss.currentPlan.planName,
        });
        this.router.navigate([
          `/thank-you/${this.ss.currentPlan.planName.replace(/ /g, '-')}`,
        ]);
      } else {
        Swal.fire({
          icon: 'error',
          text: result.statusMessage,
        });
      }
    } catch (e) {
      Swal.fire({
        icon: 'error',
        text: this.getErrorMessage(e),
      });
    }
  }

  private showCardError(error: any) {
    let errorMsg: any = document.querySelector('#card-errors');
    errorMsg.textContent =
      error.message === PGConstant.unableToAuthChooseDiffPayment
        ? PGConstant.unableToAuthLoginAndPay
        : '';
    setTimeout(function () {
      errorMsg.textContent = '';
    }, 30000);
  }

  public async onSubmit() {
    if (this.userForm.invalid) {
      return this.userForm.markAllAsTouched();
    }
    try {
      this.createPaymentMethodAndCustomer();
    } catch (e) {
      Swal.fire({
        icon: 'error',
        text: this.getErrorMessage(e),
      });
    }
  }

  public focusOut() {
    if (this.f['phone'].invalid) return;
    this.userForm.patchValue({
      phone: this.f['phone'].value.nationalNumber,
    });
  }

  private getErrorMessage(error: unknown) {
    if (error instanceof Error) return error.message;
    return String(error);
  }

  get f() {
    return this.userForm.controls;
  }

  ngOnDestroy(): void {
    this.ss.activePlan.next({});
  }
}
