import { useQuery } from "react-query";
import { getExchangeInfo, getTicker, getTicker24hr } from "../services/binance";
import { isLeft } from "fp-ts/lib/Either";

export function useExchangeInfo() {
  return useQuery("exchangeInfo", async () => {
    const result = await getExchangeInfo();
    if (isLeft(result)) {
      // eslint-disable-next-line no-console
      console.log(result.left);
      throw new Error("Exchange data validation error");
    } else {
      return result.right;
    }
  });
}

export function useTickerDateForSymbol(pair: string) {
  const ticker = useQuery(["ticker", pair], () => getTicker(pair));
  const ticker24hr = useQuery(["ticker24hr", pair], () => getTicker24hr(pair));
  return {
    ticker,
    ticker24hr,
  };
}
