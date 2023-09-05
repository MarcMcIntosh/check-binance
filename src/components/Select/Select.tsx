import type { SelectProps } from "react-aria-components";
import { Text } from "react-aria-components";
import {
  Select,
  Label,
  Button,
  SelectValue,
  Popover,
} from "react-aria-components";

import { ListBox, Item, ItemProps } from "../ListBox";

import * as styles from "./Select.css";

interface MySelectProps<T extends object>
  extends Omit<SelectProps<T>, "children"> {
  label?: string;
  description?: string;
  errorMessage?: string;
  children: React.ReactNode | ((item: T) => React.ReactNode);
}

export function MySelect<T extends object>({
  label,
  description,
  errorMessage,
  children,
  ...props
}: MySelectProps<T>) {
  return (
    <Select {...props} className={props.className ?? styles.select}>
      <Label>{label}</Label>
      <Button className={props.className ? undefined : styles.button}>
        <SelectValue
          className={props.className ? undefined : styles.selectValue}
        >
          {props.selectedKey}
        </SelectValue>
        <span aria-hidden="true">▼</span>
      </Button>
      {description && <Text slot="description">{description}</Text>}
      {errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}
      <Popover className={props.className ? undefined : styles.popover}>
        <ListBox>{children}</ListBox>
      </Popover>
    </Select>
  );
}

export function MyItem(props: ItemProps) {
  return <Item {...props} />;
}
