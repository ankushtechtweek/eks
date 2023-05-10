import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PsDateFormat } from './pipes/ps-date-format.pipe';
import { NumberPipe } from './pipes/number.pipe';
import { UiSwitchModule } from 'ngx-ui-switch';
import { FormatedOutputValuePipe } from './pipes/formate.pipe';
import { NgxMaskModule } from 'ngx-mask';
import { ToggleSwitchComponent } from '../auth/register/toggle-switch/toggle-switch.component';
import { SearchTableComponent } from '../search/search-table/search-table.component';
import { UNIXDateTimeStamp } from './pipes/dateTimeStamp.pipe';
import { CountDownTimerComponent } from './components/count-down-timer/count-down-timer.component';
import { UTCtoCurrent } from './pipes/uct-current.pipe';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    PsDateFormat,
    NumberPipe,
    FormatedOutputValuePipe,
    ToggleSwitchComponent,
    SearchTableComponent,
    UNIXDateTimeStamp,
    CountDownTimerComponent,
    UTCtoCurrent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    UiSwitchModule,
    NgxMaskModule.forRoot(),
    NgxIntlTelInputModule,
    NgxPaginationModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    PsDateFormat,
    NumberPipe,
    UiSwitchModule,
    FormatedOutputValuePipe,
    NgxMaskModule,
    ToggleSwitchComponent,
    SearchTableComponent,
    UNIXDateTimeStamp,
    CountDownTimerComponent,
    UTCtoCurrent,
    NgxIntlTelInputModule,
    NgxPaginationModule
  ],
})
export class SharedModule {}
