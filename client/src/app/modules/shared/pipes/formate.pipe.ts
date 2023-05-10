import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
 name: 'formatedOutputValue'
})
export class FormatedOutputValuePipe implements PipeTransform {

 transform(value: any, args?: any): any {
  const parts = value.toString().split('.')
  return { dollars: parts[0], cents: parts[1] }
 }
}
