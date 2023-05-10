import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StaticService } from '../../shared/services/static/static.service';

@Component({
  selector: 'app-search-by',
  templateUrl: './search-by.component.html',
  styleUrls: ['./search-by.component.scss'],
})
export class SearchByComponent {
  public isSelected!: string;
  public addressTypes!: Array<any>;
  constructor(private staticService: StaticService, private router: Router) {
    this.addressTypes = this.staticService.getAddressTypes();
  }

  public navigate(type: string) {
    this.router.navigate([`/search/new-search/${type.toLowerCase()}`]);
  }
}
