import { useAsyncList } from "@react-stately/data";
import { isLeft } from "fp-ts/lib/Either";
import { getTrades } from "../services/binance";
import { Trade } from "../models/binance";

export function useTradeTableDataForSymbol(symbol: string) {
  const columns = Object.keys(Trade.props).map((key) => ({
    key,
    name: key,
    isRowHeader: true,
  }));

  const list = useAsyncList<Trade>({
    async load({ signal }) {
      const res = await getTrades(symbol, signal);

      if (isLeft(res)) {
        console.log(res.left);
        throw new Error(`Invalid data format`);
      }

      return { items: res.right };
    },
    sort({ items, sortDescriptor }) {
      return {
        items: items.sort((a, b) => {
          const key = sortDescriptor.column;
          const isDescending = sortDescriptor.direction === "ascending";

          if (!key || !(key in a) || !(key in b)) {
            return 0;
          }

          const first = a[key as keyof Trade];
          const second = b[key as keyof Trade];
          const compare = first < second ? 1 : -1;

          return isDescending ? compare * -1 : compare;
        }),
      };
    },
  });

  return { list, columns };
}
