import { FC, PropsWithChildren } from "react";
import { QueryProvider } from "./QueryProvider";

export const Providers: FC<PropsWithChildren> = (props) => (
  <QueryProvider {...props} />
);
