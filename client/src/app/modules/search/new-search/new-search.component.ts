import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { StaticService } from '../../shared/services/static/static.service';

@Component({
  selector: 'app-new-search',
  templateUrl: './new-search.component.html',
  styleUrls: ['./new-search.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NewSearchComponent {
  public navItems: { nav: string; route: string }[];
  public active: string | undefined;
  constructor(private staticService: StaticService, private router: Router) {
    this.navItems = this.staticService.navItems;
    this.active = this.router.url.split('/').pop();
  }
}
