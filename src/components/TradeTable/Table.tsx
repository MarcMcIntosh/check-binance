import { FC } from "react";
import {
  Cell,
  Column,
  ColumnProps,
  Row,
  SortDescriptor,
  Table,
  TableBody,
  TableHeader,
} from "react-aria-components";
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
          <MyColumn
            allowsSorting
            sortDescriptor={list.sortDescriptor}
            isRowHeader={column.isRowHeader}
          >
            {column.name}
          </MyColumn>
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

const MyColumn: FC<ColumnProps & { sortDescriptor?: SortDescriptor }> = (
  props,
) => {
  return (
    <Column {...props}>
      {({ allowsSorting, sortDirection }) => (
        <>
          {props.children}
          {allowsSorting && props.sortDescriptor?.column == props.id && (
            <span aria-hidden="true">
              {sortDirection === "ascending" ? "▲" : "▼"}
            </span>
          )}
        </>
      )}
    </Column>
  );
};
