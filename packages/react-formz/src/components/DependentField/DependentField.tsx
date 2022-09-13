import React from "react";
import useDependentFieldEvents from "../../hooks/fields/useDependentFieldEvents";
import { FieldId, FieldValue } from "../../types/field";
import { FormzValues } from "../../types/form";
import Field from "../Field";
import { DependentFieldProps } from "./DependentField.types";

const DependentFieldInner = <
  Values extends FormzValues = FormzValues,
  Value extends FieldValue = FieldValue,
  Key extends FieldId = FieldId,
  Element = HTMLInputElement,
  DependentValues extends Partial<Values> = Partial<Values>
>(
  props: DependentFieldProps<Values, Value, Key, Element, DependentValues>,
  ref: React.Ref<Element>
) => {
  const { dependencies, onDependenciesChange, name, validate, ...restProps } = props;

  const { validate: dependentValidate } = useDependentFieldEvents(name, {
    dependencies,
    onDependenciesChange,
    validate
  });

  return <Field {...restProps} name={name} ref={ref} validate={dependentValidate} />;
};

/**
 * A `DependentField` is a field that depends on the value of another field or fields in
 * its owner `Form`. The `DependentField` has the exact same interface except with the added
 * ability to respond to changes in other fields within its parent form.
 *
 * Example Usage:
 *
 * ```tsx
 * <DependentField
 *  name="favoriteDrink"
 *  dependencies={(values) => ({ dob: values.dob })}
 *  validate={(_, { dob }) => {
 *      if (dob <= 21) {
 *      return "Must be 21 years old"
 *    }
 * }}
 * onDependenciesChange={(dependencies, actions) => {
 *   if (dependencies.dob <= 21) {
 *    actions.setValue("N/A");
 *   }
 * }}
 * />
 * ```
 * @param props {@link FieldProps} - The react props for the field component.
 * @typeParam `Values` {@link FormzValues} - The values of the parent form i.e. the data structure for your form.
 * @typeParam `Key` {@link FieldId} - The input/field `name` property. This value should correspond to a property in the form.
 * @typeParam `Value` {@link FieldValue} - The value of the input/field.
 * @typeParam `Element` - The underlying html element either "input", "select", or "textarea".
 * @typeParam `DependentValues` - The dependent values that this field will subscribe to.
 *
 */
const DependentField = React.forwardRef<any, DependentFieldProps>(
  DependentFieldInner
) as <
  Values extends FormzValues = FormzValues,
  Value extends FieldValue = FieldValue,
  Key extends FieldId = FieldId,
  Element = HTMLInputElement,
  DependentValues extends Partial<Values> = Partial<Values>
>(
  props: DependentFieldProps<Values, Value, Key, Element, DependentValues>
) => JSX.Element;

export default DependentField;
