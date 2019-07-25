import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lengthPipe'
})
export class LengthPipe implements PipeTransform {

  transform(value: string, args?: number): string {
    args = args | 20;
    if (args <= value.length) { return (value.slice(0, args) + '...'); } else { return value; }
  }
}
