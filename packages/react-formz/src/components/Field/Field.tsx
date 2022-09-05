import React from "react";
import useField from "../../hooks/useField";
import { TextFieldValue } from "../../types/field";
import { isString } from "../../utils/is";
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
  const field = useField<Key, Value>(name, { type, required, validate, pattern, min, max });

  if (Tag) {
    return (
      <Tag
        {...restProps}
        type={type}
        value={field.value}
        checked={field.checked}
        onChange={field.onChange}
        onBlur={field.onBlur}
        required={required}
        error={isString(Tag) ? undefined : field.error}
        name={name}
        aria-invalid={field.error !== undefined}
      >
        {children}
      </Tag>
    );
  }

  return null;
};

export default Field;
