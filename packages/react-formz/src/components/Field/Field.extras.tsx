import React from "react";
import { FieldId, FieldValue } from "../../types/field";
import Field from "./Field";
import { FieldProps } from "./Field.types";

function createField<Value extends FieldValue>(
  type?: React.HTMLInputTypeAttribute,
  additionalProps?: { multiple?: boolean }
) {
  const component = React.forwardRef<
    HTMLInputElement,
    FieldProps<FieldId, Value, HTMLInputElement>
  >((props: FieldProps<FieldId, Value, HTMLInputElement>, ref) => {
    return <Field type={type} {...additionalProps} {...props} ref={ref} />;
  });

  return component as <
    Key extends FieldId,
    Element = HTMLInputElement,
  >(
    props: FieldProps<Key, Value, Element>
  ) => JSX.Element;
}

/**
 * An abstraction of `Field` that can be used for text field values. The default
 * input type will be `text` but can be overriden.
 *
 * @typeParam `Key` {@link FieldId} - The input/field `name` property. This value should correspond to a property in the form.
 * @typeParam `Element` - The underlying html element either "input", "select", or "textarea".
 */
export const TextField = createField<string>("text");

/**
 * An abstraction of `Field` that can be used for number field values. The default
 * input type will be `number` but can be overriden.
 *
 * @typeParam `Key` {@link FieldId} - The input/field `name` property. This value should correspond to a property in the form.
 * @typeParam `Element` - The underlying html element either "input", "select", or "textarea".
 */
export const NumberField = createField<number>("number");

/**
 * An abstraction of `Field` that can be used for boolean field values. The default
 * input type will be `checkbox` but can be overriden.
 *
 * @typeParam `Key` {@link FieldId} - The input/field `name` property. This value should correspond to a property in the form.
 * @typeParam `Element` - The underlying html element either "input", "select", or "textarea".
 */
export const CheckboxField = createField<boolean>("checkbox");

/**
 * An abstraction of `Field` that can be used for radio field values. The default
 * input type will be `radio` but can be overriden.
 *
 * @typeParam `Key` {@link FieldId} - The input/field `name` property. This value should correspond to a property in the form.
 * @typeParam `Element` - The underlying html element either "input", "select", or "textarea".
 */
export const RadioField = createField<string>("radio");

/**
 * An abstraction of `Field` that can be used for select field values. The default
 * input type will be `select` but can be overriden.
 *
 * @typeParam `Key` {@link FieldId} - The input/field `name` property. This value should correspond to a property in the form.
 * @typeParam `Element` - The underlying html element either "input", "select", or "textarea".
 */
export const SelectField = createField<string>("select");

/**
 * An abstraction of `Field` that can be used for date field values. The default
 * input type will be `date` but can be overriden.
 *
 * @typeParam `Key` {@link FieldId} - The input/field `name` property. This value should correspond to a property in the form.
 * @typeParam `Element` - The underlying html element either "input", "select", or "textarea".
 */
 export const DateField = createField<Date | null | undefined>("date");

/**
 * An abstraction of `Field` that can be used for multi select field values. The default
 * input type will be `select` but can be overriden.
 *
 * @typeParam `Key` {@link FieldId} - The input/field `name` property. This value should correspond to a property in the form.
 * @typeParam `Element` - The underlying html element either "input", "select", or "textarea".
 */
export const MultiSelectField = createField<string>("select", {
  multiple: true,
});
