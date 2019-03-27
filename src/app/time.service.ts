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

  static getDatesFromTo(start, end) {
    const startDate = new Date(start);
    const stopDate = TimeService.addDays(new Date(end), 1);

    const dateArray = [];
    let currentDate = startDate;
    while (currentDate <= stopDate) {
      dateArray.push(new Date(currentDate));
      currentDate = TimeService.addDays(currentDate, 1);
    }
    return dateArray;
  }

  static addDays(date: Date, days: number) {
    return new Date(date.setDate(date.getDate() + days));
  }

  static getMonthDays(currentDate: Date) {
    const result = [];
    const daysAmount = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    for (let i = 1; i <= daysAmount; i++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
      result.push(date);
    }
    return result;
  }
}
