import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor() {
  }

  static getCurrentDate() {
    return new Date();
  }

  static getEndDate(tasks: any) {
    let endDate = TimeService.getCurrentDate();

    for (const task of tasks) {
      const date = new Date(task.expirationDate);
      if (date.getTime() > endDate.getTime()) {
        endDate = date;
      }
    }
    return endDate;
  }

  static getTimeString(date, incrementMonth: boolean) {
    let result = '';
    result += date.getDate() + '-';
    if (incrementMonth) {
      result += date.getMonth() + 1;
    } else {
      result += date.getMonth();
    }
    result += '-' + date.getFullYear();
    return result;
  }

  static stringToDate(s: string) {
    const date = s.split('/');
    return new Date(+date[2], +date[1], +date[0]);
  }
}
