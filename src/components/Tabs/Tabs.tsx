import { FC, PropsWithChildren } from "react";
import * as AriaTabs from "react-aria-components";

export const Tabs: FC<AriaTabs.TabsProps> = (props) => (
  <AriaTabs.Tabs {...props} />
);

export const TabList: FC<AriaTabs.TabListProps<PropsWithChildren>> = (
  props,
) => <AriaTabs.TabList {...props} />;

export const Tab: FC<AriaTabs.TabProps> = (props) => (
  <AriaTabs.Tab {...props} />
);

export const TabPanel: FC<AriaTabs.TabPanelProps> = (props) => (
  <AriaTabs.TabPanel {...props} />
);
