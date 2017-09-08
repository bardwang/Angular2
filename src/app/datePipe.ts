/**
 * Created by Bard on 8/18/2017.
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'Date'})
export class DatePipe implements PipeTransform {
  transform(value: string, args: string[]): any {
    if (!value) return value;

    return value.replace(/-/g,'/');
  }
}
