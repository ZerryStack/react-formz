import React from "react";
import useField from "../../hooks/useField";
import { FieldProps } from "./Field.types";

const Field = ({ as: Tag, name, children, ...restProps }: FieldProps): JSX.Element | null => {
  const field = useField({ name });

  if (Tag) {
    return (
      <Tag {...restProps} value={field.value} onChange={field.onChange}>
        {children}
      </Tag>
    );
  }

  return null;
};

export default Field;
