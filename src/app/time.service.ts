import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor() {
  }

  static getCurrentDate(): Date {
    return new Date();
  }

  static getEndDate(tasks: any) {
    let endDate = TimeService.getCurrentDate();
    for (const task of tasks) {
      if (task.expirationDate.getTime() > endDate.getTime()) {
        endDate = task.expirationDate;
      }
    }
    console.log(endDate);
    return endDate;
  }
}
