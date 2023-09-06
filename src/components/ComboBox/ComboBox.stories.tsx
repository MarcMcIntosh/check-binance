import type { Meta, StoryObj } from "@storybook/react";

// import { Select, Option } from "./Select";

import { ComboBox } from "./ComboBox";

const Component = () => (
  <ComboBox
    name="combobox"
    placeholder="select a letter"
    onSelectionChange={() => void 0}
    label="select thing"
    options={"abcdefghijklmnopqrstuvwxyz"
      .split("")
      .map((str) => ({ id: str, name: str }))}
  />
);

const meta: Meta<typeof Component> = {
  title: "ComboBox",
  component: Component,
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Primary: Story = {};
