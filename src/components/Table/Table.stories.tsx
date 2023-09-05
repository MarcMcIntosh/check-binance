import type { Meta, StoryObj } from "@storybook/react";

import { Cell, Row, Column, Table, TableBody, TableHeader } from "./index";

const items = [
  { id: 1, name: "Charizard", type: "Fire, Flying", level: "67" },
  { id: 2, name: "Blastoise", type: "Water", level: "56" },
  { id: 3, name: "Venusaur", type: "Grass, Poison", level: "83" },
  { id: 4, name: "Pikachu", type: "Electric", level: "100" },
];

const Component = () => (
  <Table aria-label="Pokemon table">
    <TableHeader>
      <Column isRowHeader>Name</Column>
      <Column>Type</Column>
      <Column>Level</Column>
    </TableHeader>
    <TableBody items={items}>
      {(item) => (
        <Row>
          <Cell>{item.name}</Cell>
          <Cell>{item.type}</Cell>
          <Cell>{item.level}</Cell>
        </Row>
      )}
    </TableBody>
  </Table>
);

const meta: Meta<typeof Component> = {
  title: "Table",
  component: Component,
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Primary: Story = {};
