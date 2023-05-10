import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpgradeRoutingModule } from './upgrade-routing.module';
import { UpgradeComponent } from './upgrade.component';
import { SharedModule } from '../shared/shared.module';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ThankYouComponent } from './thank-you/thank-you.component';

@NgModule({
  declarations: [
    UpgradeComponent,
    ThankYouComponent
  ],
  imports: [
    CommonModule,
    UpgradeRoutingModule,
    SharedModule
  ],
  providers:[NgbActiveModal ]
})
export class UpgradeModule { }
