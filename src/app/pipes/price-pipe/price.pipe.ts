import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pricePipe'
})
export class PricePipe implements PipeTransform {

  transform(value: number, args?: number): string {
    return `${value}`.split('')
      .reduce((sum, elem, index, arr) => sum += ((arr.length - index) % 3 === 0) ? ' ' + elem : elem);
  }
}
// 1 000 000
// 0 123 456
