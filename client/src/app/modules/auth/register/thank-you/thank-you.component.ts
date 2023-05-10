import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/modules/shared/services/shared/shared.service';
import { AuthService } from 'src/app/modules/_services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss'],
})
export class ThankYouComponent implements OnInit, OnDestroy {
  public questions = [
    'My search is related to this area',
    'Why are you researching properties today?',
  ];
  public searchRelateds = [
    'Investing',
    'Insurance',
    'Lending',
    'Investigations',
    'Legal',
    'Other',
  ];
  public model = {
    related: null,
    research: null,
  };
  constructor(
    public ss: SharedService,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    if (!this.ss.isUnauthUser) {
      this.router.navigate(['/auth/login']);
    }
  }

  public async onSubmit() {
    try {
      const payload = {
        PurchaseQandA: [
          {
            question: this.questions[0],
            answer: this.model.related,
          },
          {
            question: this.questions[1],
            answer: this.model.research,
          },
        ],
        userID:this.ss.unauthUser.getValue().userId
      };
      await this.auth.postPurchaseQA(payload);
      this.router.navigate(['/auth/login']);
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

  ngOnDestroy(): void {
    this.ss.unauthUser.next({});
  }
}
