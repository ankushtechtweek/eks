import { Component, OnInit } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import PGConstant from '../../shared/constants';
import { ApplicationService } from '../../shared/services/application/application.service';
import { LoaderService } from '../../shared/services/loader/loader.service';
import { CurrentUserService } from '../../_services/current-user.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
})
export class PaymentDetailsComponent implements OnInit {
  readonly PGConstant: any = PGConstant;
  stripe: any;
  card: any;

  constructor(
    private loaderService: LoaderService,
    private currentUser: CurrentUserService,
    private appService: ApplicationService
  ) {}

  ngOnInit(): void {
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
    this.card.mount('#sub-card-element');
    this.card.on('focus', function () {
      let el = document.getElementById('sub-card-element');
      el?.classList.add('focused');
    });
    this.card.on('blur', function () {
      let el = document.getElementById('sub-card-element');
      el?.classList.remove('focused');
    });
  }

  public createPaymentMethod() {
    this.loaderService.show();
    const username = this.currentUser.fullName;
    const email = this.currentUser.email;
    this.stripe
      .createPaymentMethod('card', this.card, {
        billing_details: {
          email: email.toLowerCase(),
          name: username,
        },
      })
      .then((result: any) => {
        if (result.error) {
          this.showCardError(result.error);
          this.loaderService.hide();
        } else {
          this.updatePayment(result.paymentMethod.id);
        }
      });
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

  private async updatePayment(paymentMethod: string) {
    try {
      const result = await this.appService.updatePayment(paymentMethod);
      if (result.statusCode === 100) {
        Swal.fire({
          title: 'Success!',
          text: 'Card details updated successfully.',
          icon: 'success',
        });
        this.card.clear();
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

  private getErrorMessage(error: unknown) {
    if (error instanceof Error) return error.message;
    return String(error);
  }
}
