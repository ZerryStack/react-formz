import React from "react";
import { FieldId, FieldValue } from "../../types/field";
import { FormzValues } from "../../types/form";
import DependentField from "./DependentField";
import { DependentFieldProps } from "./DependentField.types";

function createField<Value extends FieldValue>(
  type?: React.HTMLInputTypeAttribute,
  additionalProps?: { multiple?: boolean }
) {
  const component = React.forwardRef<
    HTMLInputElement,
    DependentFieldProps<FormzValues, FieldId, Value, HTMLInputElement>
  >(
    (
      props: DependentFieldProps<FormzValues, FieldId, Value, HTMLInputElement>,
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
    Element = HTMLInputElement,
    DependentValues extends Partial<Values> = Partial<Values>
  >(
    props: DependentFieldProps<
      Values,
      Key,
      Value,
      Element,
      DependentValues
    >
  ) => JSX.Element;
}

/**
 * An abstraction of `DependentField` that can be used for text field values. The default
 * input type will be `text` but can be overriden.
 * 
 * @typeParam `Values` {@link FormzValues} - The values of the parent form i.e. the data structure for your form.
 * @typeParam `Key` {@link FieldId} - The input/field `name` property. This value should correspond to a property in the form.
 * @typeParam `Element` - The underlying html element either "input", "select", or "textarea".
 * @typeParam `DependentValues` - The dependent values that this field will subscribe to.
 */
export const DependentTextField = createField<string>("text");

/**
 * An abstraction of `DependentField` that can be used for number field values. The default
 * input type will be `number` but can be overriden.
 * 
 * @typeParam `Values` {@link FormzValues} - The values of the parent form i.e. the data structure for your form.
 * @typeParam `Key` {@link FieldId} - The input/field `name` property. This value should correspond to a property in the form.
 * @typeParam `Element` - The underlying html element either "input", "select", or "textarea".
 * @typeParam `DependentValues` - The dependent values that this field will subscribe to.
 */
export const DependentNumberField = createField<number>("number");

/**
 * An abstraction of `DependentField` that can be used for boolean field values. The default
 * input type will be `checkbox` but can be overriden.
 * 
 * @typeParam `Values` {@link FormzValues} - The values of the parent form i.e. the data structure for your form.
 * @typeParam `Key` {@link FieldId} - The input/field `name` property. This value should correspond to a property in the form.
 * @typeParam `Element` - The underlying html element either "input", "select", or "textarea".
 * @typeParam `DependentValues` - The dependent values that this field will subscribe to.
 */
export const DependentCheckboxField = createField<boolean>("checkbox");

/**
 * An abstraction of `DependentField` that can be used for radio field values. The default
 * input type will be `radio` but can be overriden.
 * 
 * @typeParam `Values` {@link FormzValues} - The values of the parent form i.e. the data structure for your form.
 * @typeParam `Key` {@link FieldId} - The input/field `name` property. This value should correspond to a property in the form.
 * @typeParam `Element` - The underlying html element either "input", "select", or "textarea".
 * @typeParam `DependentValues` - The dependent values that this field will subscribe to.
 */
export const DependentRadioField = createField<string>("radio");

/**
 * An abstraction of `DependentField` that can be used for select field values. The default
 * input type will be `select` but can be overriden.
 * 
 * @typeParam `Values` {@link FormzValues} - The values of the parent form i.e. the data structure for your form.
 * @typeParam `Key` {@link FieldId} - The input/field `name` property. This value should correspond to a property in the form.
 * @typeParam `Element` - The underlying html element either "input", "select", or "textarea".
 * @typeParam `DependentValues` - The dependent values that this field will subscribe to.
 */
export const DependentSelectField = createField<string>("select");

/**
 * An abstraction of `DependentField` that can be used for multi select field values. The default
 * input type will be `select` but can be overriden.
 * 
 * @typeParam `Values` {@link FormzValues} - The values of the parent form i.e. the data structure for your form.
 * @typeParam `Key` {@link FieldId} - The input/field `name` property. This value should correspond to a property in the form.
 * @typeParam `Element` - The underlying html element either "input", "select", or "textarea".
 * @typeParam `DependentValues` - The dependent values that this field will subscribe to.
 */
export const DependentMultiSelectField = createField<string>("select", {
  multiple: true,
});
