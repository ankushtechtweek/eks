import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { PagerModel } from '../shared/models/pager.model';
import { ApplicationService } from '../shared/services/application/application.service';
import { CurrentUserService } from '../_services/current-user.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  public searches: any = [];
  public loadingIndicator = false;
  public noResultFound = false;
  public pager = {
    itemsPerPage: 4,
    currentPage: 1,
    search: 'IsFavourite',
    sortDirection: 2,
    sortColumn: 'createdDate',
    searchValue: '1',
  };

  constructor(
    private currentUser: CurrentUserService,
    private appService: ApplicationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getSearches(this.pager);
  }

  private async getSearches(pager: PagerModel) {
    try {
      this.loadingIndicator = true;
      const user = await this.currentUser.currentUserValue;
      const result = await this.appService.getSearches(
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

  public async onStarCheckChange(checked: boolean, psId: string) {
    try {
      const result = await this.appService.addOrDeleteFav(psId);
      Swal.fire({
        icon: 'success',
        text: result.statusMessage,
      });
      this.pager.currentPage = 1;
      this.getSearches(this.pager);
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

  public navigateToSearch(search: any) {
    this.router.navigateByUrl(
      '/search/view-search/' + search.psid + '/property-records'
    );
  }

  public pageChangeEvent(page: number) {
    this.pager.currentPage = page;
    this.getSearches(this.pager);
  }

  private getErrorMessage(error: unknown) {
    if (error instanceof Error) return error.message;
    return String(error);
  }
}
