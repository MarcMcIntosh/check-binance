import type { Meta, StoryObj } from "@storybook/react";

import { MySelect, MyItem } from "./Select";

const options = "abcdefghijklmnopqrstuvwxyz"
  .split("")
  .map((str) => ({ id: str, name: str }));

const Component = () => (
  <MySelect
    label="select thing"
    name="select"
    placeholder="any letter"
    items={options}
  >
    {(item) => <MyItem>{item.name}</MyItem>}
  </MySelect>
);

const meta: Meta<typeof Component> = {
  title: "Select",
  component: Component,
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Primary: Story = {};
