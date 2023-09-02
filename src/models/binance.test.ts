import { Validation } from "io-ts";
import { ExchangeInfo, Ticker, Ticker24H, Trades } from "./binance";
import { isRight, right } from "fp-ts/lib/Either";

describe("models/binance", () => {
  test("ExchangeInfo", () => {
    const data = {
      timezone: "UTC",
      serverTime: 1565246363776,
      rateLimits: [
        {
          //These are defined in the `ENUM definitions` section under `Rate Limiters (rateLimitType)`.
          //All limits are optional
        },
      ],
      exchangeFilters: [
        //These are the defined filters in the `Filters` section.
        //All filters are optional.
      ],
      symbols: [
        {
          symbol: "ETHBTC",
          status: "TRADING",
          baseAsset: "ETH",
          baseAssetPrecision: 8,
          quoteAsset: "BTC",
          quotePrecision: 8,
          quoteAssetPrecision: 8,
          orderTypes: [
            "LIMIT",
            "LIMIT_MAKER",
            "MARKET",
            "STOP_LOSS",
            "STOP_LOSS_LIMIT",
            "TAKE_PROFIT",
            "TAKE_PROFIT_LIMIT",
          ],
          icebergAllowed: true,
          ocoAllowed: true,
          quoteOrderQtyMarketAllowed: true,
          allowTrailingStop: false,
          cancelReplaceAllowed: false,
          isSpotTradingAllowed: true,
          isMarginTradingAllowed: true,
          filters: [
            //These are defined in the Filters section.
            //All filters are optional
          ],
          permissions: ["SPOT", "MARGIN"],
          defaultSelfTradePreventionMode: "NONE",
          allowedSelfTradePreventionModes: ["NONE"],
        },
      ],
    };

    const result: Validation<ExchangeInfo> = ExchangeInfo.decode(data);

    expect(isRight(result)).toBeTruthy();
    expect(result._tag === "Right");
    expect(result).toStrictEqual(right(data));
  });

  test("Ticker", () => {
    const data = {
      symbol: "BNBBTC",
      priceChange: "-8.00000000", // Absolute price change
      priceChangePercent: "-88.889", // Relative price change in percent
      weightedAvgPrice: "2.60427807", // QuoteVolume / Volume
      openPrice: "9.00000000",
      highPrice: "9.00000000",
      lowPrice: "1.00000000",
      lastPrice: "1.00000000",
      volume: "187.00000000",
      quoteVolume: "487.00000000", // Sum of (price * volume) for all trades
      openTime: 1641859200000, // Open time for ticker window
      closeTime: 1642031999999, // Current Time of the Request
      firstId: 0, // Trade IDs
      lastId: 60,
      count: 61, // Number of trades in the interval
    };

    const result: Validation<Ticker> = Ticker.decode(data);

    expect(isRight(result)).toBeTruthy();
    expect(result).toStrictEqual(right(data));
  });

  test("Ticker24H", () => {
    const data = {
      symbol: "BNBBTC",
      priceChange: "-94.99999800",
      priceChangePercent: "-95.960",
      weightedAvgPrice: "0.29628482",
      prevClosePrice: "0.10002000",
      lastPrice: "4.00000200",
      lastQty: "200.00000000",
      bidPrice: "4.00000000",
      bidQty: "100.00000000",
      askPrice: "4.00000200",
      askQty: "100.00000000",
      openPrice: "99.00000000",
      highPrice: "100.00000000",
      lowPrice: "0.10000000",
      volume: "8913.30000000",
      quoteVolume: "15.30000000",
      openTime: 1499783499040,
      closeTime: 1499869899040,
      firstId: 28385, // First tradeId
      lastId: 28460, // Last tradeId
      count: 76, // Trade count
    };

    const result: Validation<Ticker24H> = Ticker24H.decode(data);

    expect(isRight(result)).toBeTruthy();
    expect(result).toStrictEqual(right(data));
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
