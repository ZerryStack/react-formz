import React from "react";
import useField from "../../hooks/fields/useField";
import { TextFieldValue } from "../../types/field";
import { FieldProps } from "./Field.types";

const Field = <
  Key extends string = string,
  Value extends TextFieldValue = TextFieldValue
>({
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
}: FieldProps<Key, Value>): JSX.Element | null => {
  const field = useField<Key, Value>(name, {
    type,
    required,
    validate,
    pattern,
    min,
    max,
  });

  if (Tag) {
    return (
      <Tag
        {...restProps}
        type={type}
        value={field.value}
        checked={field.checked}
        onChange={field.onChange}
        onBlur={field.onBlur}
        error={field.error}
        required={required}
        name={name}
        aria-invalid={field.error !== undefined || undefined}
        aria-required={required ?? undefined}
      >
        {children}
      </Tag>
    );
  }

  return null;
};

export default Field;
