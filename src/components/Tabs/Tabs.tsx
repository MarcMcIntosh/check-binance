import { FC, PropsWithChildren } from "react";
import * as AriaTabs from "react-aria-components";
import * as styles from "./Tabs.css";

export const Tabs: FC<AriaTabs.TabsProps> = ({ className, ...props }) => (
  <AriaTabs.Tabs {...props} className={className ?? styles.tabs} />
);

export const TabList: FC<AriaTabs.TabListProps<PropsWithChildren>> = ({
  className,
  ...props
}) => <AriaTabs.TabList {...props} className={className ?? styles.tabList} />;

export const Tab: FC<AriaTabs.TabProps> = ({ className, ...props }) => (
  <AriaTabs.Tab {...props} className={className ?? styles.tab} />
);

export const TabPanel: FC<AriaTabs.TabPanelProps> = ({
  className,
  ...props
}) => <AriaTabs.TabPanel {...props} className={className ?? styles.tabPanel} />;
