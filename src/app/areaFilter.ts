/**
 * Created by Bard on 8/19/2017.
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'AreaFilter'})
export class AreaPipe implements PipeTransform {
  transform(items: any[], filter: string): any {
    if(!items || !filter || filter === "all"){
      return items;
    }
    return items.filter(item => item.area === filter);
  }
}
