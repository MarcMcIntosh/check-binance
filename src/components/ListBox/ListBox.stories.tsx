import type { Meta, StoryObj } from "@storybook/react";

import { ListBox, Item } from ".";

const Component = () => (
  <ListBox aria-label="Ice cream flavor" selectionMode="single">
    <Item>Chocolate</Item>
    <Item>Mint</Item>
    <Item>Strawberry</Item>
    <Item>Vanilla</Item>
  </ListBox>
);

const meta: Meta<typeof Component> = {
  title: "List Box",
  component: Component,
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Primary: Story = {};
