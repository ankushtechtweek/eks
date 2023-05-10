import { Pipe, PipeTransform } from '@angular/core';
import PGConstant from '../constants';
import * as moment from 'moment';

@Pipe({
  name: 'psDate',
})
export class PsDateFormat implements PipeTransform {
  transform(value: string) {
    try {
      const parsedDate = moment(value, PGConstant.Date_FORMAT.api);
      if (!parsedDate.isValid()) {
        return '-';
      }
      return parsedDate.format(PGConstant.Date_FORMAT.ui);
    } catch {
      return '-';
    }
  }
}
