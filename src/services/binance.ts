import axios from "axios";
import { ExchangeInfo, Ticker, Ticker24H, Trades } from "../models/binance";
import { Validation } from "io-ts";

const BASE_URL = "https://api.binance.com/api/v3/";

export const EXCHANGE_INFO_URL = BASE_URL + "exchangeInfo";
export const TICKER_URL = BASE_URL + "ticker";
export const TICKER_24H_URL = BASE_URL + "ticker/24hr";
export const TRADES_URL = BASE_URL + "trades";

export function getExchangeInfo(): Promise<Validation<ExchangeInfo>> {
  const url = EXCHANGE_INFO_URL;
  return axios.get<ExchangeInfo>(url).then((res) => {
    return ExchangeInfo.decode(res.data);
  });
}

export function getTicker(symbol: string): Promise<Validation<Ticker>> {
  const url = new URL(TICKER_URL);
  url.searchParams.append("symbol", symbol);
  return axios.get<Ticker>(url.toString()).then((res) => {
    return Ticker.decode(res.data);
  });
}

export function getTicker24hr(symbol: string): Promise<Validation<Ticker24H>> {
  const url = new URL(TICKER_24H_URL);
  url.searchParams.append("symbol", symbol);
  return axios.get<Ticker24H>(url.toString()).then((res) => {
    return Ticker24H.decode(res.data);
  });
}

export function getTrades(
  symbol: string,
  signal: AbortSignal,
): Promise<Validation<Trades>> {
  const url = new URL(TRADES_URL);
  url.searchParams.append("symbol", symbol);
  console.log("fetching data from: " + url.toString());
  return axios.get<Trades>(url.toString(), { signal }).then((res) => {
    return Trades.decode(res.data);
  });
}
