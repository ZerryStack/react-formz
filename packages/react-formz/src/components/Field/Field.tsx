import React from "react";
import useField from "../../hooks/fields/useField";
import { FieldValue } from "../../types/field";
import { isValidInputValue } from "../../utils/is";
import { FieldProps } from "./Field.types";

const Field = <
  Key extends string = string,
  Value extends FieldValue = FieldValue
>(
  props: FieldProps<Key, Value>
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
    ...restProps
  } = props;

  const field = useField<Key, Value>(name, {
    type,
    required,
    validate,
    pattern,
    min,
    max,
  });

  const inputProps = {
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
          {...inputProps}
          error={field.error}
          storeValue={field.value}
        >
          {children}
        </Tag>
      );
    } else {
      return (
        <Tag {...restProps} {...inputProps}>
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

export const ArrayField = <Key extends string = string>(
  props: Omit<FieldProps<Key, readonly string[]>, "type">
) => {
  return <Field<Key, readonly string[]> as="select" {...props} />;
};

export default Field;
