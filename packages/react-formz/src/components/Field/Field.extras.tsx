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

/**
 * An abstraction of `Field` that can be used for text field values. The default
 * input type will be `text` but can be overriden.
 */
export const TextField = createField<string>("text");

/**
 * An abstraction of `Field` that can be used for number field values. The default
 * input type will be `number` but can be overriden.
 */
export const NumberField = createField<number>("number");

/**
 * An abstraction of `Field` that can be used for boolean field values. The default
 * input type will be `checkbox` but can be overriden.
 */
export const CheckboxField = createField<boolean>("checkbox");

/**
 * An abstraction of `Field` that can be used for radio field values. The default
 * input type will be `radio` but can be overriden.
 */
export const RadioField = createField<string>("radio");

/**
 * An abstraction of `Field` that can be used for select field values. The default
 * input type will be `select` but can be overriden.
 */
export const SelectField = createField<string>("select");

/**
 * An abstraction of `Field` that can be used for multi select field values. The default
 * input type will be `select` but can be overriden.
 */
export const MultiSelectField = createField<string>("select", {
  multiple: true,
});
