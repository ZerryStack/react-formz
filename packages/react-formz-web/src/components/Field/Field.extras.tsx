import { FieldId, FieldValue } from "../../../../react-formz";
import React from "react";
import Field from "./Field";
import { WebFieldProps as FieldProps } from "./Field.types";

function createField<Value extends FieldValue>(
  type?: React.HTMLInputTypeAttribute,
  additionalProps?: { multiple?: boolean }
) {
  const component = React.forwardRef<
    unknown,
    FieldProps<Value, FieldId, unknown>
  >((props: FieldProps<Value, FieldId, unknown>, ref) => {
    return <Field type={type} {...additionalProps} {...props} ref={ref} />;
  });

  return component as <
    Key extends FieldId,
    Ref = unknown,
  >(
    props: FieldProps<Value, Key, Ref>
  ) => JSX.Element;
}

/**
 * An abstraction of `Field` that can be used for text field values. The default
 * input type will be `text` but can be overriden.
 *
 * - `type` - text
 * - `value` - string | undefined
 * 
 * @typeParam `Key` {@link FieldId} - The input/field `name` property. This value should correspond to a property in the form.
 * @typeParam `Element` - The underlying html element either "input", "select", or "textarea".
 */
export const TextField = createField<string | undefined>("text");

/**
 * An abstraction of `Field` that can be used for number field values. The default
 * input type will be `number` but can be overriden.
 *
 * - `type` - number
 * - `value` - number
 * 
 * @typeParam `Key` {@link FieldId} - The input/field `name` property. This value should correspond to a property in the form.
 * @typeParam `Element` - The underlying html element either "input", "select", or "textarea".
 */
export const NumberField = createField<number>("number");

/**
 * An abstraction of `Field` that can be used for boolean field values. The default
 * input type will be `checkbox` but can be overriden.
 *
 * - `type` - checkbox
 * - `value` - boolean
 * 
 * @typeParam `Key` {@link FieldId} - The input/field `name` property. This value should correspond to a property in the form.
 * @typeParam `Element` - The underlying html element either "input", "select", or "textarea".
 */
export const CheckboxField = createField<boolean>("checkbox");

/**
 * An abstraction of `Field` that can be used for radio field values. The default
 * input type will be `radio` but can be overriden.
 *
 * - `type` - radio
 * - `value` - string | undefined
 * 
 * @typeParam `Key` {@link FieldId} - The input/field `name` property. This value should correspond to a property in the form.
 * @typeParam `Element` - The underlying html element either "input", "select", or "textarea".
 */
export const RadioField = createField<string | undefined>("radio");

/**
 * An abstraction of `Field` that can be used for select field values. The default
 * input type will be `select` but can be overriden.
 *
 * - `type` - select
 * - `value` - string | undefined
 * 
 * @typeParam `Key` {@link FieldId} - The input/field `name` property. This value should correspond to a property in the form.
 * @typeParam `Element` - The underlying html element either "input", "select", or "textarea".
 */
export const SelectField = createField<string | undefined>("select");

/**
 * An abstraction of `Field` that can be used for date field values. The default
 * input type will be `date` but can be overriden. The value will be a string.
 *
 * - `type` - date
 * - `value` - string | undefined
 * 
 * @typeParam `Key` {@link FieldId} - The input/field `name` property. This value should correspond to a property in the form.
 * @typeParam `Element` - The underlying html element either "input", "select", or "textarea".
 */
 export const DateField = createField<string | undefined>("date");

/**
 * An abstraction of `Field` that can be used for multi select field values. The default
 * input type will be `select` but can be overriden.
 * 
 * - `type` - select
 * - `value` - string
 *
 * @typeParam `Key` {@link FieldId} - The input/field `name` property. This value should correspond to a property in the form.
 * @typeParam `Element` - The underlying html element either "input", "select", or "textarea".
 */
export const MultiSelectField = createField<string>("select", {
  multiple: true,
});
