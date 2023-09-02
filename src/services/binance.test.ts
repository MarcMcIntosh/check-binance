import { isRight } from "fp-ts/lib/Either";
import {
  TICKER_URL,
  TRADES_URL,
  TICKER_24H_URL,
  EXCHANGE_INFO_URL,
  getExchangeInfo,
  getTicker,
  getTicker24hr,
  getTrades,
} from "./binance";

describe("binance service", () => {
  test.each([
    [
      EXCHANGE_INFO_URL().toString(),
      "https://api.binance.com/api/v3/exchangeInfo",
    ],
    [TICKER_URL().toString(), "https://api.binance.com/api/v3/ticker"],
    [TICKER_24H_URL().toString(), "https://api.binance.com/api/v3/ticker/24hr"],
    [TRADES_URL().toString(), "https://api.binance.com/api/v3/trades"],
  ])("binance urls, epxect(%s === %s", (url, expected) => {
    expect(url).toEqual(expected);
  });

  test("getExchangeInfo", async () => {
    const result = await getExchangeInfo();
    expect(isRight(result)).toBe(true);
  });

  test("getTicker", async () => {
    const result = await getTicker("BTCUSDT");
    expect(isRight(result)).toBe(true);
  });

  test("getTicker24hr", async () => {
    const result = await getTicker24hr("BTCUSDT");
    expect(isRight(result)).toBe(true);
  });

  test("getTrades", async () => {
    const result = await getTrades("BTCUSDT");
    expect(isRight(result)).toBe(true);
  });
});
