import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { PagerModel } from '../../shared/models/pager.model';
import { ApplicationService } from '../../shared/services/application/application.service';
import { SharedService } from '../../shared/services/shared/shared.service';
import { CurrentUserService } from '../../_services/current-user.service';

@Component({
  selector: 'app-recent-search-history',
  templateUrl: './recent-search-history.component.html',
  styleUrls: ['./recent-search-history.component.scss'],
})
export class RecentSearchHistoryComponent implements OnInit {
  public noResultFound = false;
  @Output() recentSearches: EventEmitter<any> = new EventEmitter();
  @Output() resultsFound: EventEmitter<boolean> = new EventEmitter();
  pager = {
    itemsPerPage: 3,
    currentPage: 1,
    search: '',
    sortDirection: 2,
    sortColumn: 'createdDate',
    searchValue: '',
  };
  searches: any = [];
  constructor(
    private currentUser: CurrentUserService,
    private appService: ApplicationService,
    private ss: SharedService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getSearches(this.pager);
  }

  private async getSearches(pager: PagerModel) {
    try {
      const user = await this.currentUser.currentUserValue;
      const result = await this.appService.getSearches(
        pager,
        user.userId
      );
      this.searches = result.data.result.items;
      this.noResultFound = this.searches && this.searches.length ? true : false;
      this.resultsFound.emit(this.noResultFound);
      this.recentSearches.emit(this.searches);
    } catch (e) {
      Swal.fire({
        icon: 'error',
        text: this.getErrorMessage(e),
      });
    }
  }

  public getGoogleImage(address: any) {
    const url = `https://maps.googleapis.com/maps/api/streetview?size=350x250&location=${address?.street},${address?.city},${address?.state?.abbreviation},${address?.zipCode}&key=${environment.GOOGLE_MAP_API_KEY}`;
    return url;
  }

  public imageNotFound(address: any): boolean {
    return (
      address.street &&
      address.city &&
      address.state.abbreviation &&
      address.zipCode
    );
  }

  public navigateToSearch(search: any) {
    this.router.navigateByUrl(
      '/search/view-search/' + search.psid + '/property-records'
    );
  }

  private getErrorMessage(error: unknown) {
    if (error instanceof Error) return error.message;
    return String(error);
  }
}
