import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  public recentSearches: any = [];
  public noResultFound: boolean = false;
}
