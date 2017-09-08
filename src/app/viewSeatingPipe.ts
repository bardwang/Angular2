/**
 * Created by Bard on 8/20/2017.
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'SeatFilter'})
export class SeatPipe implements PipeTransform {
  transform(items: any[]): any {
    if(!items){
      return items;
    }
    items = items.filter(function(item){
      return item.area !== undefined;
    })

    items.sort(function(a, b){
      var first = a.area + a.table;
      var second = b.area + b.table;
      if(first < second){
        return -1;
      }else if(first > second){
        return 1;
      }else{
        return 0;
      }
    });
    return items;
  }
}
