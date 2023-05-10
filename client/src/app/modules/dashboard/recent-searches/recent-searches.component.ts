import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recent-searches',
  templateUrl: './recent-searches.component.html',
  styleUrls: ['./recent-searches.component.scss'],
})
export class RecentSearchesComponent {
  @Input() recentSearches: any = [];
  @Input() noResultFound: boolean = false;
}
