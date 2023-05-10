import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'number',
})
export class NumberPipe implements PipeTransform {
  transform(value: string) {
    if (value) {
      return Number(value);
    }
    return 0;
  }
}
