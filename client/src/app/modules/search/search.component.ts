import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { PagerModel } from '../shared/models/pager.model';
import { ApplicationService } from '../shared/services/application/application.service';
import { AuthService } from '../_services/auth.service';
import { CurrentUserService } from '../_services/current-user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class SearchComponent implements OnInit {
  public active: string;
  public searchCount = 0;
  public pager = {
    itemsPerPage: 8,
    currentPage: 1,
    search: 'searchType',
    sortDirection: 2,
    sortColumn: 'createdDate',
    searchValue: 'Address',
  };
  public noResultFound = false;
  public searches: any = [];
  constructor(
    private appService: ApplicationService,
    private currentUser: CurrentUserService,
    private route: ActivatedRoute,
    private auth: AuthService
  ) {
    const activeRoute = this.route.snapshot.queryParamMap.get('type');
    this.active = activeRoute ? activeRoute : 'Address';
    this.pager.searchValue = activeRoute ? activeRoute : 'Address';
  }

  ngOnInit(): void {
    this.getSearches(this.pager);
  }

  private async getSearches(pager: PagerModel) {
    this.noResultFound = false;
    try {
      const user = await this.currentUser.currentUserValue;
      const result = await this.appService.getSearches(pager, user.userId);
      this.searches = result.data.result;
      this.noResultFound =
        this.searches.items && this.searches.items.length ? true : false;
    } catch (e: any) {
      if (e.status === 401) {
        Swal.fire({
          icon: 'error',
          text: 'Your session has expired',
        });
        this.currentUser.currentUserSubject.next(null);
        this.auth.signOut();
      } else {
        Swal.fire({
          icon: 'error',
          text: this.getErrorMessage(e),
        });
      }
    }
  }

  public pageChangeEvent(pager: PagerModel) {
    pager.searchValue = this.active;
    this.getSearches(pager);
  }

  public pageChange(pageSize: number) {
    this.pager.itemsPerPage = pageSize;
    this.getSearches(this.pager);
  }

  onNavChange(change: NgbNavChangeEvent) {
    this.searches = {
      result: {
        items: [],
        currentPage: null,
        pageCount: null,
        pageSize: null,
        rowCount: null,
      },
    };
    this.pager.searchValue = change.nextId;
    this.getSearches(this.pager);
  }

  private getErrorMessage(error: unknown) {
    if (error instanceof Error) return error.message;
    return String(error);
  }
}
