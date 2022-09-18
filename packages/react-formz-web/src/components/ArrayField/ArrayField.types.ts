import { AnyObject, ArrayHelpers, FieldId, FieldValidator } from "../../../../react-formz";
import React from "react";

type RemoveBaseProps<Props extends AnyObject> = Omit<
  Props,
  keyof BaseArrayFieldProps<string>
>;

export interface ArrayFieldComponentProps<Value> {
  values: Value[];
}

export type ArrayFieldComponent<Value, Props extends AnyObject> =
  React.ComponentType<ArrayFieldComponentProps<Value> & RemoveBaseProps<Props> & { arrayHelpers: ArrayHelpers<Value> }>;

export interface BaseArrayFieldProps<
  Value,
  Key extends FieldId = FieldId,
  Props extends Record<string, any> = Record<string, any>
> {
  name: Key;
  render: ArrayFieldComponent<Value, Props>;
  validate?: FieldValidator<Value[]>;
}

export type ArrayFieldProps<
  Value,
  Key extends FieldId = FieldId,
  Props extends Record<string, any> = Record<string, any>
> = BaseArrayFieldProps<Value, Key, Props> & Props;
