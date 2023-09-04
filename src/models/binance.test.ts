import { Validation } from "io-ts";
import { ExchangeInfo, Ticker, Ticker24H, Trades } from "./binance";
import { isRight, right } from "fp-ts/lib/Either";

import { exchangeInfoStub, tickerStub, ticker24hrStub } from "../__stubs__";

describe("models/binance", () => {
  test("ExchangeInfo", () => {
    const result: Validation<ExchangeInfo> =
      ExchangeInfo.decode(exchangeInfoStub);

    expect(isRight(result)).toBeTruthy();
    expect(result._tag === "Right");
    expect(result).toStrictEqual(right(exchangeInfoStub));
  });

  test("Ticker", () => {
    const result: Validation<Ticker> = Ticker.decode(tickerStub);
    expect(isRight(result)).toBeTruthy();
    expect(result).toStrictEqual(right(tickerStub));
  });

  test("Ticker24H", () => {
    const result: Validation<Ticker24H> = Ticker24H.decode(ticker24hrStub);

    expect(isRight(result)).toBeTruthy();
    expect(result).toStrictEqual(right(ticker24hrStub));
  });

  test("Trades", () => {
    const data = [
      {
        id: 28457,
        price: "4.00000100",
        qty: "12.00000000",
        quoteQty: "48.000012",
        time: 1499865549590,
        isBuyerMaker: true,
        isBestMatch: true,
      },
    ];

    const result: Validation<Trades> = Trades.decode(data);

    expect(isRight(result)).toBeTruthy();
    expect(result).toStrictEqual(right(data));
  });
});
