import { FC } from "react";
import { Button, ButtonProps } from "react-aria-components";

import * as styles from "./Button.css";

export const MyButton: FC<ButtonProps> = ({ className, ...props }) => (
  <Button {...props} className={className ?? styles.button} />
);
