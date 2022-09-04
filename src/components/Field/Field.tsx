import React from "react";
import useField from "../../hooks/useField";
import { isBoolean } from "../../utils/is";
import { FieldProps } from "./Field.types";

const Field = ({ as: Tag, name, children, type = "text", ...restProps }: FieldProps): JSX.Element | null => {
  const field = useField(name, { type });
  const value = isBoolean(field.value) ? undefined : field.value ?? undefined;
  const checked = isBoolean(field.value) ? field.value : undefined;

  if (Tag) {
    return (
      <Tag {...restProps} type={type} value={value} checked={checked} onChange={field.onChange}>
        {children}
      </Tag>
    );
  }

  return null;
};

export default Field;
