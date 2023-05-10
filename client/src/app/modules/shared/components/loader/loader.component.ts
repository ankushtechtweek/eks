import { Component, OnDestroy } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { LoaderService } from '../../services/loader/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
})
export class LoaderComponent implements OnDestroy {
  subscription!: Subscription;
  constructor(
    private loaderService: LoaderService,
    private spinner: NgxSpinnerService
  ) {
    this.subscription = this.loaderService.isLoading.subscribe((request) => {
      request ? this.spinner.show() : this.spinner.hide();
    });
  }

  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
}
