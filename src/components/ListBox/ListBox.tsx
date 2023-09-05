import { ItemProps, ListBoxProps, ListBox, Item } from "react-aria-components";
import * as styles from "./ListBox.css";

export function MyListBox<T extends object>({
  children,
  className,
  ...props
}: ListBoxProps<T>) {
  return (
    <ListBox {...props} className={className ?? styles.listBox}>
      {children}
    </ListBox>
  );
}

export type MyItemProps = ItemProps;

export function MyItem(props: MyItemProps) {
  return (
    <Item
      {...props}
      className={({ isFocusVisible, isSelected }) =>
        `${styles.item} ${isFocusVisible ? "focused" : ""} ${
          isSelected ? "selected" : ""
        }`
      }
    />
  );
}
