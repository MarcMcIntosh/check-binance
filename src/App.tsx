import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import { ExchangeForm } from "./features/ExchangeForm";

const queryClient = new QueryClient();

function App() {
  const [selectedSymbol, setSelectedSymbol] = useState<string>("");
  return (
    <QueryClientProvider client={queryClient}>
      <main>
        Hello!
        <ExchangeForm onSubmit={setSelectedSymbol} />
        <div>Symbol: {selectedSymbol}</div>
      </main>
    </QueryClientProvider>
  );
}

export default App;
