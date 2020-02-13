import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'passwd'
})
export class PasswdPipe implements PipeTransform {

  transform(show: boolean, pass: string): string {
    const result: string = show ? pass : pass.replace(/./g, '*');
    return result;
  }

}
