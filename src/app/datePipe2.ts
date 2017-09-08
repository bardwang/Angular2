/**
 * Created by Bard on 8/21/2017.
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'Date2'})
export class DatePipe2 implements PipeTransform {
  transform(value: string, args: string[]): any {
    if (!value) return value;

    var date = value.split("-");
    var result = date[2] + "-" + date[0] + "-" + date[1];

    return result;
  }
}
