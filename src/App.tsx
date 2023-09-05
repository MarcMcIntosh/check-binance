import { useState } from "react";
import { Providers } from "./providers";

import { ExchangeForm } from "./features/ExchangeForm";
import { TradeTable } from "./features/TradeTable";

function App() {
  const [selectedSymbol, setSelectedSymbol] = useState<string>("");
  return (
    <Providers>
      <main>
        Hello!
        <ExchangeForm onSubmit={setSelectedSymbol} />
        <div>Symbol: {selectedSymbol}</div>
        {selectedSymbol && <TradeTable symbol={selectedSymbol} />}
      </main>
    </Providers>
  );
}

export default App;
