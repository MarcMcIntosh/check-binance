import { FC, forwardRef, RefAttributes } from "react";

import {
  Cell,
  Row,
  Column,
  Table,
  TableBody,
  TableHeader,
  ColumnProps,
  SortDescriptor,
  Collection,
  TableHeaderProps,
  RowProps,
  TableProps,
  CellProps,
  TableBodyProps,
} from "react-aria-components";

import * as styles from "./Table.css";

export const MyTable = forwardRef<
  HTMLTableElement,
  TableProps & RefAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <Table {...props} ref={ref} className={className ?? styles.table} />
));
MyTable.displayName = "Table";

export function MyTableBody<T extends object>({
  className,
  ...props
}: TableBodyProps<T>) {
  return <TableBody {...props} className={className ?? styles.tableBody} />;
}

export function MyTableHeader<T extends object>({
  columns,
  children,
  className,
  ...props
}: TableHeaderProps<T>) {
  return (
    <TableHeader {...props} className={className ?? styles.tableHeader}>
      <Collection items={columns}>{children}</Collection>
    </TableHeader>
  );
}
export type MyColumnProps = ColumnProps & { sortDescriptor?: SortDescriptor };
export const MyColumn: FC<MyColumnProps> = ({ className, ...props }) => {
  return (
    <Column {...props} className={className ?? styles.column}>
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

export function MyRow<T extends object>({
  columns,
  children,
  className,
  ...props
}: RowProps<T>) {
  return (
    <Row {...props} className={className ?? styles.row}>
      <Collection items={columns}>{children}</Collection>
    </Row>
  );
}

export const MyCell = forwardRef<HTMLTableCellElement, CellProps>(
  ({ className, ...props }, ref) => {
    return <Cell {...props} ref={ref} className={className ?? styles.cell} />;
  },
);
MyCell.displayName = "Cell";
