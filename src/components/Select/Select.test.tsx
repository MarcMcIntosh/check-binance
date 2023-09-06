import { FC } from "react";
import { render, screen, getByText } from "../../utils/test-utils";
import { Select, Item } from "./index";

const options = "abcdefghijklmnopqrstuvwxyz"
  .split("")
  .map((str) => ({ id: str, name: str.toLocaleUpperCase() }));

describe("Select", () => {
  test("it should display the selected options", async () => {
    const placeholder = "letters";
    const label = "letters";

    const onSelectionChange = vi.fn();
    const App: FC = () => (
      <Select
        onSelectionChange={onSelectionChange}
        placeholder={placeholder}
        label={label}
        items={options}
      >
        {(item) => <Item>{item.name}</Item>}
      </Select>
    );

    const { user } = render(<App />);

    await user.click(screen.getByLabelText(label));

    expect(document.activeElement).not.toBeNull();
    if (document.activeElement !== null) {
      const c = getByText(document.activeElement as HTMLElement, "C");
      await user.click(c);
    }

    expect(screen.getAllByRole("button")[0].textContent).toContain("C");
    expect(onSelectionChange).toHaveBeenCalled();
    expect(onSelectionChange).toHaveBeenLastCalledWith("c");
  });
});
