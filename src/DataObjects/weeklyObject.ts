export class WeeklyObject {
  transactionDate: Date;
  open: string = "";
  high: string = "";
  low: string = "";
  close: string = "";
  volume: number = 0;
  constructor() {
    this.transactionDate = new Date();
  }
}

export const createWeeklyObject = (data: any, transactionDate: string) => {
  let weeklyObject = new WeeklyObject();
  // transactionDate format is (YYYY-MM-DD) 2000-01-14
  weeklyObject.transactionDate = new Date(transactionDate);

  weeklyObject.open = data?.["1. open"];
  weeklyObject.high = data?.["2. high"];
  weeklyObject.low = data?.["3. low"];
  weeklyObject.close = data?.["4. close"];
  weeklyObject.volume = data?.["volume"];

  return weeklyObject;
};
