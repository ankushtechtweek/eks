import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../shared/services/shared/shared.service';
@Component({
  selector: 'app-search-table',
  templateUrl: './search-table.component.html',
  styleUrls: ['./search-table.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SearchTableComponent {
  @Input() public searchType!: string;
  @Input() public noResultFound = false;
  @Input() public searches: any = {
    items: [],
    currentPage: null,
    pageCount: null,
    pageSize: null,
    rowCount: 0,
  };
  @Output() page: EventEmitter<any> = new EventEmitter();
  public pager = {
    itemsPerPage: 8,
    currentPage: 1,
    search: 'searchType',
    sortDirection: 2,
    sortColumn: 'createdDate',
  };
  constructor(private router: Router, private ss: SharedService) {}

  public setPage(pageNumber: number) {
    this.pager.currentPage = pageNumber;
    this.page.emit(this.pager);
  }

  public rowSelect(row: any): void {
    if (row.type === 'click') {
      this.navigateToSearch(row.row);
      console.log(row.row, 'row');
    }
  }

  public onSubmit(people: any) {
    const model = {
      name: people.propertyOwner,
      city: people.propertyAddressNavigation.city,
      state: people.propertyAddressNavigation.state.abbreviation,
    };
    this.router.navigate(['/search/view-people'], { queryParams: model });
  }

  public navigateToSearch(search: any) {
    this.router.navigateByUrl(
      '/search/view-search/' + search.psid + '/property-records'
    );
  }
}
