import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { PagerModel } from '../shared/models/pager.model';
import { ApplicationService } from '../shared/services/application/application.service';
import { CurrentUserService } from '../_services/current-user.service';

@Component({
  selector: 'app-download-history',
  templateUrl: './download-history.component.html',
})
export class DownloadHistoryComponent implements OnInit {
  public noResultFound = false;
  public loadingIndicator!: boolean;
  public searches: any = [];
  private pager = {
    itemsPerPage: 8,
    currentPage: 1,
    search: '',
    sortDirection: 2,
    sortColumn: 'createdDate',
    searchValue: '',
  };

  constructor(
    private currentUser: CurrentUserService,
    private appService: ApplicationService
  ) {}

  ngOnInit(): void {
    this.getSearches(this.pager);
  }

  private async getSearches(pager: PagerModel) {
    try {
      this.loadingIndicator = true;
      const user = await this.currentUser.currentUserValue;
      const result = await this.appService.getDownloadHistory(
        pager,
        user.userId
      );
      this.searches = result.data.result;
      this.noResultFound =
        this.searches.items && this.searches.items.length ? true : false;
      this.loadingIndicator = false;
    } catch (e) {
      Swal.fire({
        icon: 'error',
        text: this.getErrorMessage(e),
      });
      this.loadingIndicator = false;
    }
  }

  private getErrorMessage(error: unknown) {
    if (error instanceof Error) return error.message;
    return String(error);
  }

  public pageChangeEvent(pager: PagerModel) {
    this.getSearches(pager);
  }
}
