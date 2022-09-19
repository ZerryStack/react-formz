import { ArrayHelpers, FieldId, FieldValidator } from "../../../../react-formz";
import React from "react";

export interface ArrayFieldComponentProps<Value> {
  values: Value[];
  arrayHelpers: ArrayHelpers<Value>;
}

export type ArrayFieldComponent<Value> = React.ComponentType<
  ArrayFieldComponentProps<Value>
>;

export interface ArrayFieldProps<Value, Key extends FieldId = FieldId> {
  name: Key;
  render: ArrayFieldComponent<Value>;
  validate?: FieldValidator<Value[]>;
}
