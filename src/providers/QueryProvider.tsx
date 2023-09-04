import { FC, PropsWithChildren } from "react";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./constants";

export const QueryProvider: FC<PropsWithChildren> = (props) => (
  <QueryClientProvider client={queryClient} {...props} />
);
