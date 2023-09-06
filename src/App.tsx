import { useState } from "react";
import { Providers } from "./providers";

import { ExchangeForm } from "./features/ExchangeForm";
import { TabTables } from "./features/TabTables";

function App() {
  const [selectedSymbol, setSelectedSymbol] = useState<string>("");
  return (
    <Providers>
      <main>
        <ExchangeForm onSubmit={setSelectedSymbol} />
        {selectedSymbol && <TabTables selectedSymbol={selectedSymbol} />}
      </main>
    </Providers>
  );
}

export default App;
