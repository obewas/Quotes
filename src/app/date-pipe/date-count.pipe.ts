import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date();
    let todayWithNoTime:any = new Date(today.getFullYear(),today.getMonth(), today.getDate())
    var dateDiff = Math.abs(value-todayWithNoTime)
    const secInADay = 86400;

    var dateDiffSecs = dateDiff * 0.001;
    var dateCount = dateDiffSecs/secInADay;
    if (dateCount >= 1 && value > todayWithNoTime) {
        return dateCount;
    } else{
      return 0;
    }

}
}
