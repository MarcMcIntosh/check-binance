import { FC, ReactNode } from "react";
import {
  Cell,
  Row,
  Column,
  Table,
  TableBody,
  TableHeader,
  Text,
} from "react-aria-components";
import { camelToFlat } from "../../utils/normalizeString";

export const TickerTable: FC<{
  header: ReactNode;
  data: { key: string; value: string | number }[];
}> = ({ header, data }) => {
  const collumns = [{ key: "name" }, { key: "value" }];
  const rows = data.map(({ key, value }) => ({
    id: key,
    name: camelToFlat(key),
    value,
  }));
  return (
    <div>
      <Text>{header}</Text>
      <Table>
        <TableHeader columns={collumns}>
          {(column) => <Column {...column} isRowHeader />}
        </TableHeader>
        <TableBody items={rows}>
          {(row) => (
            <Row columns={collumns}>
              {(column) => <Cell>{[row[column.key as keyof typeof row]]}</Cell>}
            </Row>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
