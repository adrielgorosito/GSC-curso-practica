import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miPipe',
})
export class MiPipePipe implements PipeTransform {
  transform(value: number, elevado: number = 1): number {
    return value ** elevado;
  }
}
