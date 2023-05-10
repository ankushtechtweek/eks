import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ApplicationService } from '../../shared/services/application/application.service';
import { CurrentUserService } from '../../_services/current-user.service';

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
})
export class PurchaseHistoryComponent implements OnInit {
  public subscriptions: any = [];
  public noResultFound = false;

  constructor(
    private appService: ApplicationService,
    private currentUser: CurrentUserService
  ) {}

  ngOnInit(): void {
    this.getPurchaseHistory();
  }

  private async getPurchaseHistory() {
    try {
      const user = await this.currentUser.currentUserValue;
      const result = await this.appService.getPurchaseHistory(user.userId);
      this.subscriptions = JSON.parse(result.result)?.data;
      this.noResultFound =
        this.subscriptions && this.subscriptions.length ? true : false;
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
}
