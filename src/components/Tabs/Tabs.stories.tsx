import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabList, Tab, TabPanel } from "./Tabs";

const Component = () => (
  <Tabs>
    <TabList>
      <Tab id="one">One</Tab>
      <Tab id="two">Two</Tab>
      <Tab id="three">Three</Tab>
    </TabList>
    <TabPanel id="one">Content for tab 1</TabPanel>
    <TabPanel id="two">Content for tab 2</TabPanel>
    <TabPanel id="three">Content for tab 3</TabPanel>
  </Tabs>
);

const meta: Meta<typeof Component> = {
  title: "Tabs",
  component: Component,
  // ...
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Primary: Story = {};
