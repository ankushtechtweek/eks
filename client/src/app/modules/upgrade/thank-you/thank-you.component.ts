import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../shared/services/shared/shared.service';
import { StaticService } from '../../shared/services/static/static.service';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
})
export class ThankYouComponent implements OnInit, OnDestroy {
  public planName: string;

  constructor(
    private route: ActivatedRoute,
    public staticService: StaticService,
    private ss: SharedService,
    private router: Router
  ) {
    this.planName = this.route.snapshot.params['plan'];
  }

  ngOnInit(): void {
    if (!this.ss.isUpgraded.getValue()) {
      this.router.navigate(['/upgrade']);
    }
  }

  ngOnDestroy(): void {
    this.ss.isUpgraded.next(false);
  }
}
