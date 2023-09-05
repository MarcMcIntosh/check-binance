import { FC } from "react";
import { SortDescriptor } from "react-aria-components";
import {
  Cell,
  Column,
  Row,
  Table,
  TableBody,
  TableHeader,
} from "../../components/Table";
import { useTradeTableDataForSymbol } from "../../hooks/useTradeTableDataForSymbol";

import type { Trade } from "../../models/binance";

export const TradeTable: FC<{ symbol: string }> = ({ symbol }) => {
  const { columns, list } = useTradeTableDataForSymbol(symbol);

  const sort = (sortDescriptor: SortDescriptor) => {
    list.sort(sortDescriptor);
  };

  return (
    <Table
      aria-label={`${symbol} trade table`}
      sortDescriptor={list.sortDescriptor}
      onSortChange={sort}
    >
      <TableHeader columns={columns}>
        {(column) => (
          <Column
            allowsSorting
            sortDescriptor={list.sortDescriptor}
            isRowHeader={column.isRowHeader}
          >
            {column.name}
          </Column>
        )}
      </TableHeader>
      <TableBody items={list.items}>
        {(item) => (
          <Row columns={columns}>
            {(column) => <Cell>{item[column.key as keyof Trade] + ""}</Cell>}
          </Row>
        )}
      </TableBody>
    </Table>
  );
};
