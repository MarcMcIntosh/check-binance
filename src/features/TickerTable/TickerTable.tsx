import { FC } from "react";
import {
  Cell,
  Row,
  Column,
  Table,
  TableBody,
  TableHeader,
} from "../../components/Table";
import { camelToFlat } from "../../utils/normalizeString";

export const TickerTable: FC<{
  header: string;
  data: { key: string; value: string | number }[];
}> = ({ header, data }) => {
  const columns = [{ key: "name" }, { key: "value" }];
  const rows = data.map(({ key, value }) => ({
    id: key,
    name: camelToFlat(key),
    value,
  }));
  return (
    <Table aria-label={header}>
      <TableHeader columns={columns}>
        <Column isRowHeader>{header}</Column>
        <Column />
        {/* {(column) => <Column {...column} isRowHeader />} */}
      </TableHeader>
      <TableBody items={rows}>
        {(row) => (
          <Row columns={columns}>
            {(column) => <Cell>{[row[column.key as keyof typeof row]]}</Cell>}
          </Row>
        )}
      </TableBody>
    </Table>
  );
};
