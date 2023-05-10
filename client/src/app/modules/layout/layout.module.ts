import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LiveChatWidgetModule } from '@livechat/widget-angular';


@NgModule({
  declarations: [
    LayoutComponent,
    LeftNavComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    LiveChatWidgetModule
  ]
})
export class LayoutModule { }
