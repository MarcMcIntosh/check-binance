import { FC } from "react";
import { Button as AriaButton, ButtonProps } from "react-aria-components";

export const Button: FC<ButtonProps> = (props) => <AriaButton {...props} />;
