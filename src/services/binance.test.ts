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

const testOptions = {
  retry: 1,
  timeout: 20 * 1000,
};
describe("binance service", () => {
  test.each([
    [EXCHANGE_INFO_URL, "https://api.binance.com/api/v3/exchangeInfo"],
    [TICKER_URL, "https://api.binance.com/api/v3/ticker"],
    [TICKER_24H_URL, "https://api.binance.com/api/v3/ticker/24hr"],
    [TRADES_URL, "https://api.binance.com/api/v3/trades"],
  ])("binance urls, epxect(%s === %s", (url, expected) => {
    expect(url).toEqual(expected);
  });

  test(
    "getExchangeInfo",
    async () => {
      const result = await getExchangeInfo();
      expect(isRight(result)).toBe(true);
    },
    testOptions,
  );

  test(
    "getTicker",
    async () => {
      const result = await getTicker("BTCUSDT");
      expect(isRight(result)).toBe(true);
    },
    testOptions,
  );

  test(
    "getTicker24hr",
    async () => {
      const result = await getTicker24hr("BTCUSDT");
      expect(isRight(result)).toBe(true);
    },
    testOptions,
  );

  test(
    "getTrades",
    async () => {
      const signal = new AbortController().signal;
      const result = await getTrades("BTCUSDT", signal);
      expect(isRight(result)).toBe(true);
    },
    testOptions,
  );
});
