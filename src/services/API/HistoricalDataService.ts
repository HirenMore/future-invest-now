import axios, { AxiosResponse } from "axios";
import { Constants } from "../../utills/constants";

export default class HistoricalDataService {
  getNews = (): Promise<any> => {
    return axios.get(
      "https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=" +
        Constants.API_KEY
    );
  };
  getWeeklyGraphData = (): Promise<any> => {
    return axios.get(
      "https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=IBM&apikey=" +
        Constants.API_KEY
    );
  };
}
