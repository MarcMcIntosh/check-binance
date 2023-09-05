import type { Meta, StoryObj } from "@storybook/react";

import { TickerTable } from "./TickerTable";
import { tickerStub } from "../../__stubs__";

const meta: Meta<typeof TickerTable> = {
  title: "Ticker Table",
  component: TickerTable,
};

export default meta;

type Story = StoryObj<typeof TickerTable>;

export const Primary: Story = {
  args: {
    header: "Ticker table",
    data: Object.entries(tickerStub).map(([key, value]) => ({ key, value })),
  },
};
