import { FieldId, FieldValue } from "../../../../react-formz";
import React from "react";
import Field from "./Field";
import { NativeFieldProps as FieldProps } from "./Field.types";
import { TextInput, KeyboardType } from "react-native";

function createField<Value extends FieldValue>(
  type?: KeyboardType,
  additionalProps?: { multiple?: boolean }
) {
  const component = React.forwardRef<
    TextInput,
    FieldProps<Value, FieldId, TextInput>
  >((props: FieldProps<Value, FieldId, TextInput>, ref) => {
    return <Field type={type} {...additionalProps} {...props} ref={ref} />;
  });

  return component as <Key extends FieldId, Ref = TextInput>(
    props: FieldProps<Value, Key, Ref>
  ) => JSX.Element;
}

/**
 * An abstraction of `Field` that can be used for text field values. The default
 * input type will be `default` but can be overriden.
 *
 * - `type` - default
 * - `value` - string | undefined
 *
 * @typeParam `Key` {@link FieldId} - The input/field `name` property. This value should correspond to a property in the form.
 * @typeParam `Element` - The underlying input element such as a `TextInput`.
 */
export const TextField = createField<string | undefined>("default");

/**
 * An abstraction of `Field` that can be used for text field values. The default
 * input type will be `email-address` but can be overriden.
 *
 * - `type` - email-address
 * - `value` - string | undefined
 *
 * @typeParam `Key` {@link FieldId} - The input/field `name` property. This value should correspond to a property in the form.
 * @typeParam `Element` - The underlying input element such as a `TextInput`.
 */
export const EmailField = createField<string | undefined>("email-address");

/**
 * An abstraction of `Field` that can be used for text field values. The default
 * input type will be `numeric` but can be overriden.
 *
 * - `type` - numeric
 * - `value` - string | undefined
 *
 * @typeParam `Key` {@link FieldId} - The input/field `name` property. This value should correspond to a property in the form.
 * @typeParam `Element` - The underlying input element such as a `TextInput`.
 */
export const NumericField = createField<number | undefined>("numeric");

/**
 * An abstraction of `Field` that can be used for text field values. The default
 * input type will be `decimal-pad` but can be overriden.
 *
 * - `type` - decimal-pad
 * - `value` - string | undefined
 *
 * @typeParam `Key` {@link FieldId} - The input/field `name` property. This value should correspond to a property in the form.
 * @typeParam `Element` - The underlying input element such as a `TextInput`.
 */
export const DecimalField = createField<number | undefined>("decimal-pad");
