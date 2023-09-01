import { cleanup, render } from "@testing-library/react";
import { afterEach } from "vitest";
import userEvent from "@testing-library/user-event";

afterEach(() => {
  cleanup();
});

function setup(ui: React.ReactElement, options = {}) {
  return {
    user: userEvent.setup(),
    ...render(ui, {
      // wrap provider(s) here if needed
      wrapper: ({ children }) => children,
      ...options,
    }),
  };
}

export * from "@testing-library/react";
// override render export
export { setup as render };
