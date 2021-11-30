import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
  // bad behaviour
  //pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    const resultArray = [];
      
    if (value.length === 0 || filterString === '')
    {
      //console.log(value);
      //console.log("ABBBCBCBCCBCB")
      return value;
    }
    for (const item of value)
    {
      //console.log("VALUEEEE"+value);
      console.log("ITEM PROP NAME: "+ item.status)
      if (item.status === filterString){
        
        resultArray.push(item);
      }
    } 
    return resultArray;
  }

}
