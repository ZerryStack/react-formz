import React from "react";
import useField from "../../hooks/fields/useField";
import { FieldValue } from "../../types/field";
import { isValidInputValue } from "../../utils/is";
import { FieldProps } from "./Field.types";

const Field = <
  Key extends string = string,
  Value extends FieldValue = FieldValue,
  Element = HTMLInputElement
>(
  props: FieldProps<Key, Value, Element>
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
    label
  });

  const inputProps = {
    ...restProps,
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
          input={inputProps}
          error={field.error}
          storeValue={field.value}
        >
          {children}
        </Tag>
      );
    } else {
      return (
        <Tag {...inputProps}>
          {children}
        </Tag>
      );
    }
  }

  return null;
};

export const TextField = <Key extends string = string>(
  props: FieldProps<Key, string | undefined>
) => {
  return <Field<Key, string | undefined> {...props} />;
};

export const NumberField = <Key extends string = string>(
  props: FieldProps<Key, number | undefined>
) => {
  return <Field<Key, number | undefined> {...props} />;
};

export const CheckboxField = <Key extends string = string>(
  props: Omit<FieldProps<Key, boolean>, "type">
) => {
  return <Field<Key, boolean> {...props} type="checkbox" />;
};

export const SelectField = <Key extends string = string>(
  props: Omit<FieldProps<Key, string>, "type">
) => {
  return <Field<Key, string>  {...props} as="select" />;
};

export const MultiSelectField = <Key extends string = string>(
  props: Omit<FieldProps<Key, string>, "type">
) => {
  return <Field<Key, string>  {...props} as="select" multiple />;
};

export default Field;
