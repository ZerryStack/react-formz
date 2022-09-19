import { FieldId, FieldValue, FormzValues } from "../../../../react-formz";
import React from "react";
import DependentField from "./DependentField";
import { DependentFieldProps } from "./DependentField.types";
import { KeyboardType, TextInput } from "react-native";

function createField<Value extends FieldValue>(
  type?: KeyboardType,
  additionalProps?: { multiple?: boolean }
) {
  const component = React.forwardRef<
    TextInput,
    DependentFieldProps<FormzValues, Value, FieldId, TextInput>
  >(
    (
      props: DependentFieldProps<FormzValues, Value, FieldId, TextInput>,
      ref
    ) => {
      return (
        <DependentField type={type} {...additionalProps} {...props} ref={ref} />
      );
    }
  );

  return component as <
    Values extends FormzValues,
    Key extends FieldId = FieldId,
    Ref = HTMLInputElement,
    DependentValues extends Partial<Values> = Partial<Values>
  >(
    props: DependentFieldProps<Values, Value, Key, Ref, DependentValues>
  ) => JSX.Element;
}

/**
 * An abstraction of `DependentField` that can be used for text field values. The default
 * keyboard type will be `default` but can be overriden.
 *
 * @typeParam `Values` {@link FormzValues} - The values of the parent form i.e. the data structure for your form.
 * @typeParam `Key` {@link FieldId} - The input/field `name` property. This value should correspond to a property in the form.
 * @typeParam `Ref` - The type of react ref that will be passed to the underlying element.
 * @typeParam `DependentValues` - The dependent values that this field will subscribe to.
 */
export const DependentTextField = createField<string | undefined>("default");

/**
 * An abstraction of `DependentField` that can be used for text field values. The default
 * keyboard type will be `email-address` but can be overriden.
 *
 * @typeParam `Values` {@link FormzValues} - The values of the parent form i.e. the data structure for your form.
 * @typeParam `Key` {@link FieldId} - The input/field `name` property. This value should correspond to a property in the form.
 * @typeParam `Ref` - The type of react ref that will be passed to the underlying element.
 * @typeParam `DependentValues` - The dependent values that this field will subscribe to.
 */
export const DependentEmailField = createField<string | undefined>(
  "email-address"
);

/**
 * An abstraction of `DependentField` that can be used for text field values. The default
 * keyboard type will be `numeric` but can be overriden.
 *
 * @typeParam `Values` {@link FormzValues} - The values of the parent form i.e. the data structure for your form.
 * @typeParam `Key` {@link FieldId} - The input/field `name` property. This value should correspond to a property in the form.
 * @typeParam `Ref` - The type of react ref that will be passed to the underlying element.
 * @typeParam `DependentValues` - The dependent values that this field will subscribe to.
 */
export const DependentNumericField = createField<number | undefined>("numeric");

/**
 * An abstraction of `DependentField` that can be used for text field values. The default
 * keyboard type will be `number-pad` but can be overriden.
 *
 * @typeParam `Values` {@link FormzValues} - The values of the parent form i.e. the data structure for your form.
 * @typeParam `Key` {@link FieldId} - The input/field `name` property. This value should correspond to a property in the form.
 * @typeParam `Ref` - The type of react ref that will be passed to the underlying element.
 * @typeParam `DependentValues` - The dependent values that this field will subscribe to.
 */
export const DependentNumberField = createField<number | undefined>(
  "number-pad"
);
