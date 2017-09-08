/**
 * Created by Bard on 8/19/2017.
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'TableFilter'})
export class TablePipe implements PipeTransform {
  transform(items: any[], filter: string): any {
    debugger;
    if(!items || !filter || filter === "all"){
      return items;
    }
    return items.filter(item => item.table === filter);
  }
}
