export const exchangeInfoStub = {
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
