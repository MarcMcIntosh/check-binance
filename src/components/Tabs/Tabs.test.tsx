import { render, screen } from "../../utils/test-utils";

import { Tab, TabList, TabPanel, Tabs } from "./index";

describe("Tabs", () => {
  const tabs = [
    {
      id: "one",
      name: "One",
      content: "Content for tab 1",
    },
    {
      id: "two",
      name: "Two",
      content: "Content for tab 2",
    },
    {
      id: "three",
      name: "Three",
      content: "Content for tab 3",
    },
  ];

  const App = () => (
    <Tabs>
      <TabList>
        {tabs.map((tab) => (
          <Tab key={tab.id} id={tab.id}>
            {tab.name}
          </Tab>
        ))}
      </TabList>

      {tabs.map((tab) => (
        <TabPanel key={tab.id} id={tab.id}>
          {tab.content}
        </TabPanel>
      ))}
    </Tabs>
  );

  test.each(tabs)(
    "when clink on tab $name i should $content",
    async ({ name, content }) => {
      const { user } = render(<App />);
      await user.click(screen.getByText(name));
      expect(screen.getByText(content)).toBeInTheDocument();
    },
  );
});
