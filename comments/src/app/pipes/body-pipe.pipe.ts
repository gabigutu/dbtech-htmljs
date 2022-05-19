import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bodyPipe'
})
export class BodyPipePipe implements PipeTransform {

  transform(str: string, from: string, to: string): string {
    if (str === undefined) return '';
    const modifiedValue = str.replaceAll(from, to);
    return modifiedValue;
  }

}
