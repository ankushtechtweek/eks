import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApplicationService } from 'src/app/modules/shared/services/application/application.service';
import { SharedService } from 'src/app/modules/shared/services/shared/shared.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-residents',
  templateUrl: './residents.component.html',
})
export class ResidentsComponent implements OnInit, OnDestroy {
  public residents: any = [];
  private subscription!: Subscription;
  constructor(
    private appService: ApplicationService,
    private ss: SharedService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscription = this.ss.searchDetails.subscribe(
      (data: any) => {
        if (Object.keys(data).length > 1) {
          if (!this.ss.isResidents) {
            this.getResidents();
            return;
          }
          this.residents = this.ss.residents.getValue();
        }
      }
    );
  }

  private async getResidents() {
    const address = this.ss.propertyDetails.propertyAddressNavigation;
    try {
      const result = await this.appService.getResident(
        address.street,
        address.city,
        address.state.abbreviation,
        address.zipCode
      );
      if (result.statusCode === 100) {
        this.residents = result.result.current_residents;
        this.ss.residents.next(this.residents);
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

  public onSubmit(name: string) {
    const model = {
      name,
      city: this.ss.propertRecord.PropertyAddress.City,
      state: this.ss.propertRecord.PropertyAddress.State,
    };
    this.router.navigate(['/search/view-people'], { queryParams: model });
  }

  private getErrorMessage(error: unknown) {
    if (error instanceof Error) return error.message;
    return String(error);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
