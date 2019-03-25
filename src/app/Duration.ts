export interface Duration {
  times: TimesMeasure;
  amount: number;
}

export enum TimesMeasure {
  HOUR, MINUTE, DAY, MONTH, YEARS
}
