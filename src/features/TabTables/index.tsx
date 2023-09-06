import { FC } from "react";

import { Tab, TabList, Tabs, TabPanel } from "../../components/Tabs";
import { TickerTable } from "../TickerTable";
import { TradeTable } from "../TradeTable";
import { useTickerDateForSymbol } from "../../hooks/binance";
import { isRight } from "fp-ts/lib/Either";

export const TabTables: FC<{ selectedSymbol: string }> = ({
  selectedSymbol,
}) => {
  const { ticker, ticker24hr } = useTickerDateForSymbol(selectedSymbol);
  return (
    <Tabs>
      <TabList>
        <Tab id="tracker">Tracker</Tab>
        <Tab id="tracker24hr">Tracker24hr</Tab>
        <Tab id="trades">Trades</Tab>
      </TabList>
      <TabPanel id="tracker">
        {ticker.isLoading && "...Loading"}
        {ticker.isError && `Error retrieving data`}
        {ticker.data && isRight(ticker.data) && (
          <TickerTable
            header="Ticker"
            data={Object.entries(ticker.data.right).map(([key, value]) => ({
              key,
              value,
            }))}
          ></TickerTable>
        )}
      </TabPanel>
      <TabPanel id="tracker24hr">
        {ticker24hr.isLoading && "...Loading"}
        {ticker24hr.isError && `Error retrieving data`}
        {ticker24hr.data && isRight(ticker24hr.data) && (
          <TickerTable
            header="Ticker"
            data={Object.entries(ticker24hr.data.right).map(([key, value]) => ({
              key,
              value,
            }))}
          ></TickerTable>
        )}
      </TabPanel>
      <TabPanel id="trades">
        <TradeTable symbol={selectedSymbol} />
      </TabPanel>
    </Tabs>
  );
};
