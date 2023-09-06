import { FC, Key } from "react";
import {
  Button,
  ComboBox as AriaComboBox,
  ComboBoxProps,
  Input,
  Item,
  ItemProps,
  Label,
  ListBox,
  Popover,
} from "react-aria-components";
import { Text } from "react-aria-components";

interface MyComboBoxProps<T extends object>
  extends Omit<ComboBoxProps<T>, "children"> {
  label?: string;
  description?: string | null;
  errorMessage?: string | null;
  children: React.ReactNode | ((item: T) => React.ReactNode);
  placeholder: string;
}

function MyComboBox<T extends object>({
  label,
  description,
  errorMessage,
  children,
  ...props
}: MyComboBoxProps<T>) {
  return (
    <AriaComboBox menuTrigger="focus" formValue="text" {...props}>
      <Label>{label}</Label>
      <div className="my-combobox-container">
        <Input placeholder={props.placeholder} value={props.inputValue} />
        <Button>▼</Button>
      </div>
      {description && <Text slot="description">{description}</Text>}
      {errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}
      <Popover>
        <ListBox>{children}</ListBox>
      </Popover>
    </AriaComboBox>
  );
}

function MyItem(props: ItemProps) {
  return (
    <Item
      {...props}
      className={({ isFocused, isSelected }) =>
        `my-item ${isFocused ? "focused" : ""} ${isSelected ? "selected" : ""}`
      }
    />
  );
}

export const ComboBox: FC<{
  label: string;
  options: { id: string; name: string }[];
  name: string;
  onSelectionChange: (key: Key) => void;
  value?: string;
  placeholder: string;
}> = ({ label, options, onSelectionChange, value, name, placeholder }) => (
  <MyComboBox
    name={name}
    formValue="text"
    aria-label={label}
    placeholder={placeholder}
    onSelectionChange={onSelectionChange}
    items={options}
    inputValue={value}
  >
    {(item) => <MyItem textValue={item.name}>{item.name}</MyItem>}
  </MyComboBox>
);
