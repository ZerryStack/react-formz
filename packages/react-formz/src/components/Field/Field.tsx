import React from "react";
import useField from "../../hooks/fields/useField";
import { FieldValue } from "../../types/field";
import { isValidInputValue } from "../../utils/is";
import { FieldProps } from "./Field.types";

const FieldInner = <
  Key extends string = string,
  Value extends FieldValue = FieldValue,
  Element = HTMLInputElement,
  Component extends React.ComponentType<{}> = React.ComponentType<{}>
>(
  props: FieldProps<Key, Value, Element, Component> &
    React.ComponentProps<Component>,
  ref: React.Ref<Element>
): JSX.Element | null => {
  const {
    as: Tag,
    name,
    children,
    type = "text",
    required,
    validate,
    pattern,
    min,
    max,
    label,
    ...restProps
  } = props;

  const field = useField<Key, Value>(name, {
    type,
    required,
    validate,
    pattern,
    min,
    max,
    label,
  });

  const inputProps = {
    label,
    name,
    required,
    type,
    checked: field.checked,
    onBlur: field.onBlur,
    onChange: field.onChange,
    "aria-invalid": field.error !== undefined || undefined,
    "aria-required": required ?? undefined,
    value: isValidInputValue(field.value) ? field.value : undefined,
  };

  if (Tag) {
    if (typeof Tag === "function") {
      return (
        <Tag
          {...restProps}
          input={inputProps}
          error={field.error}
          storeValue={field.value}
          ref={ref}
        >
          {children}
        </Tag>
      );
    } else {
      return (
        <Tag {...inputProps} ref={ref as any}>
          {children}
        </Tag>
      );
    }
  }

  return null;
};

const Field = React.forwardRef<any, FieldProps>(FieldInner) as <
  Key extends string = string,
  Value extends FieldValue = FieldValue,
  Element = HTMLInputElement,
  Component extends React.ComponentType<{}> = React.ComponentType<{}>
>(
  props: FieldProps<Key, Value, Element, Component>
) => JSX.Element;

/**
 * Factory function to create fields with standard values.
 */
function createComponent<Value extends FieldValue>(type?: React.HTMLInputTypeAttribute, additionalProps?: { multiple?: boolean }) {
  const component = React.forwardRef<
    HTMLInputElement,
    FieldProps<string, Value, HTMLInputElement>
  >((props: FieldProps<string, Value, HTMLInputElement>, ref) => {
    return <Field type={type} {...additionalProps} {...props} ref={ref} />;
  });

  return component as <
    Key extends string,
    Element = HTMLInputElement,
    Component extends React.ComponentType<{}> = React.ComponentType<{}>
  >(
    props: FieldProps<Key, Value, Element, Component>
  ) => JSX.Element;
}

export const TextField = createComponent<string>("text");

export const NumberField = createComponent<number>("number");

export const CheckboxField = createComponent<boolean>("checkbox");

export const RadioField = createComponent<string>("radio");

export const SelectField = createComponent<string>("select");

export const MultiSelectField = createComponent<string>("select", { multiple: true });

export default Field;
