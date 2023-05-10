import { Pipe, PipeTransform } from '@angular/core';
import * as mtimezone from 'moment-timezone';

@Pipe({
  name: 'unix',
})
export class UNIXDateTimeStamp implements PipeTransform {
  transform(value: any) {
    return mtimezone
      .tz(mtimezone.unix(value), 'America/Los_Angeles')
      .format('LLL (zz)');
  }
}
