import axios from "axios";
import { ExchangeInfo, Ticker, Ticker24H, Trades } from "../models/binance";
import { Validation } from "io-ts";

const BASE_URL = "https://api.binance.com/api/v3/";

export const EXCHANGE_INFO_URL = () => new URL("exchangeInfo", BASE_URL);
export const TICKER_URL = () => new URL("ticker", BASE_URL);
export const TICKER_24H_URL = () => new URL("ticker/24hr", BASE_URL);
export const TRADES_URL = () => new URL("trades", BASE_URL);

export function getExchangeInfo(): Promise<Validation<ExchangeInfo>> {
  const url = EXCHANGE_INFO_URL().toString();
  return axios.get<ExchangeInfo>(url).then((res) => {
    return ExchangeInfo.decode(res.data);
  });
}

export function getTicker(symbol: string): Promise<Validation<Ticker>> {
  const url = TICKER_URL();
  url.searchParams.append("symbol", symbol);
  return axios.get<Ticker>(url.toString()).then((res) => {
    return Ticker.decode(res.data);
  });
}

export function getTicker24hr(symbol: string): Promise<Validation<Ticker24H>> {
  const url = TICKER_24H_URL();
  url.searchParams.append("symbol", symbol);
  return axios.get<Ticker24H>(url.toString()).then((res) => {
    return Ticker24H.decode(res.data);
  });
}

export function getTrades(symbol: string): Promise<Validation<Trades>> {
  const url = TRADES_URL();
  url.searchParams.append("symbol", symbol);
  return axios.get<Trades>(url.toString()).then((res) => {
    return Trades.decode(res.data);
  });
}
