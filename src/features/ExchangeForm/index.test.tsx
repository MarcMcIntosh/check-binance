import { rest } from "msw";
import { setupServer } from "msw/node";
import { ExchangeForm } from "./index";
import { render, screen, getByText, waitFor } from "../../utils/test-utils";
import { Providers } from "../../providers";
import { queryClient } from "../../providers/constants";
import { EXCHANGE_INFO_URL } from "../../services/binance";
import { exchangeInfoStub } from "../../__stubs__";

const server = setupServer(
  rest.get(EXCHANGE_INFO_URL, async (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(exchangeInfoStub));
  }),
);

beforeAll(() => {
  server.listen({ onUnhandledRequest: "error" });
});

afterAll(() => {
  server.close();
});

beforeEach(() => {
  queryClient.clear();
});

describe("ExchangeForm", () => {
  test("it should provide the user with a selection of currencies from the exchange", async () => {
    const handleSubmit = vi.fn();
    const App = () => (
      <Providers>
        <ExchangeForm onSubmit={handleSubmit} />
      </Providers>
    );
    const { user } = render(<App />);

    const baseButton = await waitFor(() => screen.getByLabelText("base asset"));
    await user.click(baseButton);

    expect(document.activeElement).not.toBeNull();
    if (document.activeElement !== null) {
      const eth = getByText(document.activeElement as HTMLElement, "ETH");
      await user.click(eth);
    }

    await user.click(screen.getByLabelText("quote asset"));
    if (document.activeElement !== null) {
      const eth = getByText(document.activeElement as HTMLElement, "BTC");
      await user.click(eth);
    }

    await user.click(screen.getByText("Submit"));

    expect(handleSubmit).toHaveBeenCalled();
    expect(handleSubmit).toHaveBeenLastCalledWith("ETHBTC");
  });
});
