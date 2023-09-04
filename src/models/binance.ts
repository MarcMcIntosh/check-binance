import * as t from "io-ts";

export type Codec = t.TypeC<t.Props>;

// response from GET /api/v3/exchangeInfo

export const BinanceSymbol = t.type({
  symbol: t.string,
  status: t.string, // "TRADING", could be an enum,
  baseAsset: t.string,
  quoteAsset: t.string,
});

export type BinanceSymbol = t.TypeOf<typeof BinanceSymbol>;

export const ExchangeInfo = t.type({
  timezone: t.string,
  serverTime: t.number,
  symbols: t.array(BinanceSymbol),
});

export type ExchangeInfo = t.TypeOf<typeof ExchangeInfo>;

// response from GET /api/v3/ticker can be ticker or an array of ticker
export const Ticker = t.type({
  symbol: t.string,
  priceChange: t.string,
  priceChangePercent: t.string,
  weightedAvgPrice: t.string,
  openPrice: t.string,
  highPrice: t.string,
  lowPrice: t.string,
  lastPrice: t.string,
  volume: t.string,
  quoteVolume: t.string, // Sum of (price * volume) for all trades
  openTime: t.number, // Open time for ticker window
  closeTime: t.number, // Current Time of the Request
  firstId: t.number, // Trade IDs
  lastId: t.number,
  count: t.number, // Number of trades in the interval
});

// const d = Object.keys(Ticker._A);

export type Ticker = t.TypeOf<typeof Ticker>;

// responce from GET /api/v3/ticker/24hr can be a ticker24h or an array of ticker24h
export const Ticker24H = t.type({
  symbol: t.string,
  priceChange: t.string,
  priceChangePercent: t.string,
  weightedAvgPrice: t.string,
  prevClosePrice: t.string,
  lastPrice: t.string,
  lastQty: t.string,
  bidPrice: t.string,
  bidQty: t.string,
  askPrice: t.string,
  askQty: t.string,
  openPrice: t.string,
  highPrice: t.string,
  lowPrice: t.string,
  volume: t.string,
  quoteVolume: t.string,
  openTime: t.number,
  closeTime: t.number,
  firstId: t.number, // First tradeId
  lastId: t.number, // Last tradeId
  count: t.number, // Trade count
});

export type Ticker24H = t.TypeOf<typeof Ticker24H>;

// response from GET /api/v3/trades
export const Trade = t.type({
  id: t.number,
  price: t.string,
  qty: t.string,
  quoteQty: t.string,
  time: t.number,
  isBuyerMaker: t.boolean,
  isBestMatch: t.boolean,
});

export type Trade = t.TypeOf<typeof Trade>;

export const Trades = t.array(Trade);
export type Trades = t.TypeOf<typeof Trades>;
