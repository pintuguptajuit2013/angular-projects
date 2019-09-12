import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelcase'
})
export class CamelcasePipe implements PipeTransform {

  transform(input: any[]): any {
    if(!input)
    return null;
    let output:string ="";
    for(let i=0;i<input.length;i++){
      output=output+input[i].charAt(0).toUpperCase()+input[i].substr(1).toLowerCase()+" ";
    }
    return output;
  }

}
