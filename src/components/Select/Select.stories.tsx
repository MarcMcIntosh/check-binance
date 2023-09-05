import type { Meta, StoryObj } from "@storybook/react";

import { Select, Item } from "./index";

const options = "abcdefghijklmnopqrstuvwxyz"
  .split("")
  .map((str) => ({ id: str, name: str }));

const Component = () => (
  <Select
    label="select thing"
    name="select"
    placeholder="any letter"
    items={options}
  >
    {(item) => <Item>{item.name}</Item>}
  </Select>
);

const meta: Meta<typeof Component> = {
  title: "Select",
  component: Component,
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Primary: Story = {};
