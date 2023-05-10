import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'utcCurrent',
})
export class UTCtoCurrent implements PipeTransform {
  transform(dt: any) {
    let date = new Date(dt);
    let countDownDate = new Date(date.toLocaleString() + ' UTC').getTime();
    return countDownDate;
  }
}
