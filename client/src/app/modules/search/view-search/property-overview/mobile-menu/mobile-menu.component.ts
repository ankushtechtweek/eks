import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { SharedService } from 'src/app/modules/shared/services/shared/shared.service';
import { StaticService } from 'src/app/modules/shared/services/static/static.service';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
})
export class MobileMenuComponent implements OnChanges {
  @ViewChild('tabsScroll', { static: true }) tabsScroll!: ElementRef;
  @Input() public tabScrollEvent!: number;
  public searchTabs: {
    tab: string;
    route: string;
    icon: string;
    lock: boolean;
    isPremium: boolean;
  }[];

  constructor(private staticService: StaticService, public ss: SharedService) {
    this.searchTabs = [
      ...this.staticService.searchNavs,
      ...this.staticService.reportnavs,
    ];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tabScrollEvent'] && changes['tabScrollEvent'].currentValue) {
      this.tabsScroll.nativeElement.scrollTop =
        this.tabScrollEvent === 6 ? 0 : 300;
    } else {
      this.tabsScroll.nativeElement.scrollTop = 0;
    }
  }
}
