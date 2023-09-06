import { FC, PropsWithChildren } from "react";
import * as styles from "./Box.css";

export const Box: FC<
  PropsWithChildren & { className?: string; row?: boolean }
> = (props) => {
  return <div {...props} className={props.className ?? styles.box} />;
};
