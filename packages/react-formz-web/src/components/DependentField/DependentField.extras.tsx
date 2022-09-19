import { FieldId, FieldValue, FormzValues } from "../../../../react-formz";
import React from "react";
import DependentField from "./DependentField";
import { DependentFieldProps } from "./DependentField.types";

function createField<Value extends FieldValue>(
  type?: React.HTMLInputTypeAttribute,
  additionalProps?: { multiple?: boolean }
) {
  const component = React.forwardRef<
    HTMLInputElement,
    DependentFieldProps<FormzValues, Value, FieldId, HTMLInputElement>
  >(
    (
      props: DependentFieldProps<FormzValues, Value, FieldId, HTMLInputElement>,
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
 * input type will be `text` but can be overriden.
 *
 * @typeParam `Values` {@link FormzValues} - The values of the parent form i.e. the data structure for your form.
 * @typeParam `Key` {@link FieldId} - The input/field `name` property. This value should correspond to a property in the form.
 * @typeParam `Ref` - The type of react ref that will be passed to the underlying element.
 * @typeParam `DependentValues` - The dependent values that this field will subscribe to.
 */
export const DependentTextField = createField<string>("text");

/**
 * An abstraction of `DependentField` that can be used for number field values. The default
 * input type will be `number` but can be overriden.
 *
 * @typeParam `Values` {@link FormzValues} - The values of the parent form i.e. the data structure for your form.
 * @typeParam `Key` {@link FieldId} - The input/field `name` property. This value should correspond to a property in the form.
 * @typeParam `Ref` - The type of react ref that will be passed to the underlying element.
 * @typeParam `DependentValues` - The dependent values that this field will subscribe to.
 */
export const DependentNumberField = createField<number>("number");

/**
 * An abstraction of `DependentField` that can be used for boolean field values. The default
 * input type will be `checkbox` but can be overriden.
 *
 * @typeParam `Values` {@link FormzValues} - The values of the parent form i.e. the data structure for your form.
 * @typeParam `Key` {@link FieldId} - The input/field `name` property. This value should correspond to a property in the form.
 * @typeParam `Ref` - The type of react ref that will be passed to the underlying element.
 * @typeParam `DependentValues` - The dependent values that this field will subscribe to.
 */
export const DependentCheckboxField = createField<boolean>("checkbox");

/**
 * An abstraction of `DependentField` that can be used for radio field values. The default
 * input type will be `radio` but can be overriden.
 *
 * @typeParam `Values` {@link FormzValues} - The values of the parent form i.e. the data structure for your form.
 * @typeParam `Key` {@link FieldId} - The input/field `name` property. This value should correspond to a property in the form.
 * @typeParam `Ref` - The type of react ref that will be passed to the underlying element.
 * @typeParam `DependentValues` - The dependent values that this field will subscribe to.
 */
export const DependentRadioField = createField<string>("radio");

/**
 * An abstraction of `DependentField` that can be used for select field values. The default
 * input type will be `select` but can be overriden.
 *
 * @typeParam `Values` {@link FormzValues} - The values of the parent form i.e. the data structure for your form.
 * @typeParam `Key` {@link FieldId} - The input/field `name` property. This value should correspond to a property in the form.
 * @typeParam `Ref` - The type of react ref that will be passed to the underlying element.
 * @typeParam `DependentValues` - The dependent values that this field will subscribe to.
 */
export const DependentSelectField = createField<string>("select");

/**
 * An abstraction of `DependentField` that can be used for multi select field values. The default
 * input type will be `select` but can be overriden.
 *
 * @typeParam `Values` {@link FormzValues} - The values of the parent form i.e. the data structure for your form.
 * @typeParam `Key` {@link FieldId} - The input/field `name` property. This value should correspond to a property in the form.
 * @typeParam `Ref` - The type of react ref that will be passed to the underlying element.
 * @typeParam `DependentValues` - The dependent values that this field will subscribe to.
 */
export const DependentMultiSelectField = createField<string>("select", {
  multiple: true,
});
