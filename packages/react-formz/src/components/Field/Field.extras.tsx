import React from "react";
import { FieldValue } from "../../types/field";
import Field from "./Field";
import { FieldProps } from "./Field.types";

function createField<Value extends FieldValue>(
  type?: React.HTMLInputTypeAttribute,
  additionalProps?: { multiple?: boolean }
) {
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

export const TextField = createField<string>("text");

export const NumberField = createField<number>("number");

export const CheckboxField = createField<boolean>("checkbox");

export const RadioField = createField<string>("radio");

export const SelectField = createField<string>("select");

export const MultiSelectField = createField<string>("select", {
  multiple: true,
});
