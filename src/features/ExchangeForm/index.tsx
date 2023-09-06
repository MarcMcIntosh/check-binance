import { FC, Key } from "react";
import { useExchangeInfo } from "../../hooks/binance";
import { Select, Item } from "../../components/Select";

import { useState } from "react";
import { Button } from "../../components/Button";
import { BinanceSymbol, ExchangeInfo } from "../../models/binance";
import { Box } from "../../components/Box";

function unique(arr: string[]) {
  return arr.reduce<string[]>((acc, cur) => {
    if (acc.includes(cur)) return acc;
    return acc.concat(cur);
  }, []);
}

const useSelectedSymbols = (symbols: BinanceSymbol[]) => {
  const [selectedBaseAsset, setSelectedBaseAsset] = useState<string | null>(
    null,
  );

  const [selectedQuoteAsset, setSelectedQuoteAsset] = useState<string | null>(
    null,
  );

  const traidingPairs = symbols.filter((symbol) => {
    return symbol.status === "TRADING";
  });

  const allBaseAssets = traidingPairs.map((symbol) => symbol.baseAsset);
  const allQuoteAsset = traidingPairs.map((symbol) => symbol.quoteAsset);

  const baseAssets = unique(allBaseAssets).filter(
    (str) => str !== selectedQuoteAsset,
  );
  const quoteAsset = unique(allQuoteAsset).filter(
    (str) => str !== selectedBaseAsset,
  );

  const baseOptions = baseAssets.map((str) => ({ id: str, name: str }));
  const quoteOptions = quoteAsset.map((str) => ({ id: str, name: str }));

  return {
    selectedBaseAsset,
    selectedQuoteAsset,
    baseOptions,
    quoteOptions,
    setSelectedBaseAsset,
    setSelectedQuoteAsset,
  };
};

const SelectPairsFrom: FC<{
  exchangeInfo: ExchangeInfo;
  onSubmit: (symbol: string) => void;
}> = ({ exchangeInfo, onSubmit }) => {
  const {
    selectedBaseAsset,
    selectedQuoteAsset,
    baseOptions,
    quoteOptions,
    setSelectedBaseAsset,
    setSelectedQuoteAsset,
  } = useSelectedSymbols(exchangeInfo.symbols);

  const handleSelectChange =
    (fn: typeof setSelectedBaseAsset) => (key: Key) => {
      const value = typeof key === "number" ? key + "" : key;
      fn(value);
    };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        selectedBaseAsset &&
          selectedQuoteAsset &&
          onSubmit(selectedBaseAsset + selectedQuoteAsset);
      }}
    >
      <Box>
        <Select
          onSelectionChange={handleSelectChange(setSelectedBaseAsset)}
          selectedKey={selectedBaseAsset}
          items={baseOptions}
          label="base asset"
          placeholder="Select a base"
        >
          {(item) => <Item>{item.name}</Item>}
        </Select>

        <Select
          onSelectionChange={handleSelectChange(setSelectedQuoteAsset)}
          selectedKey={selectedQuoteAsset}
          items={quoteOptions}
          label="quote asset"
          placeholder="Select a quote"
        >
          {(item) => <Item>{item.name}</Item>}
        </Select>
      </Box>
      <Box>
        <Button
          type="submit"
          isDisabled={!selectedBaseAsset || !selectedQuoteAsset}
        >
          Submit
        </Button>
        {selectedBaseAsset && selectedQuoteAsset && (
          <div>Symbol: {selectedBaseAsset + selectedQuoteAsset}</div>
        )}
      </Box>
    </form>
  );
};

export const ExchangeForm: FC<{ onSubmit: (symbol: string) => void }> = ({
  onSubmit,
}) => {
  const exchangeInfo = useExchangeInfo();

  if (!exchangeInfo.data && exchangeInfo.error) {
    // eslint-disable-next-line no-console
    console.error(exchangeInfo.error);
    return <div>Error fetching exchange info</div>;
  }

  if (!exchangeInfo.data) {
    return <div>...loading exchange info</div>;
  }

  return (
    <SelectPairsFrom onSubmit={onSubmit} exchangeInfo={exchangeInfo.data} />
  );
};
