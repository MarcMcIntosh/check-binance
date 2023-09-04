import type { Meta, StoryObj } from "@storybook/react";

import { TradeTable } from "./Table";

const meta: Meta<typeof TradeTable> = {
  title: "Trade Table",
  component: TradeTable,
};

export default meta;

type Story = StoryObj<typeof TradeTable>;

export const Primary: Story = {
  args: {
    symbol: "BTCUSDT",
  },
};
