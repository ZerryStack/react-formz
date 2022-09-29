import { FieldId, FieldValue, FormzValues, useDependentFieldEvents } from "../../../../react-formz";
import React from "react";
import Field, { FieldComponentProps } from "../Field";
import { DependentFieldProps } from "./DependentField.types";

const DependentFieldInner = <
  Values extends FormzValues = FormzValues,
  Value extends FieldValue = FieldValue,
  Key extends FieldId = FieldId,
  Ref = HTMLInputElement,
  DependentValues extends Partial<Values> = Partial<Values>
>(
  props: DependentFieldProps<Values, Value, Key, Ref, DependentValues>,
  ref: React.Ref<Ref>
) => {
  const { dependencies, onDependenciesChange, name, validate, as: Component, ...restProps } = props;

  const { validate: dependentValidate, dependentFields } = useDependentFieldEvents(name, {
    dependencies,
    onDependenciesChange,
    validate
  });

  const DependentComponent = (props: FieldComponentProps<Value, Key, Ref>) => {
    if (!Component) return null;

    return <Component {...props} dependencies={dependentFields} />
  }

  return <Field<Value, Key, Ref> {...restProps} as={DependentComponent} name={name} ref={ref} validate={dependentValidate} />;
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
 * @typeParam `Ref` - The react ref.
 * @typeParam `DependentValues` - The dependent values that this field will subscribe to.
 *
 */
const DependentField = React.forwardRef<any, DependentFieldProps>(
  DependentFieldInner
) as <
  Values extends FormzValues = FormzValues,
  Value extends FieldValue = FieldValue,
  Key extends FieldId = FieldId,
  Ref = HTMLInputElement,
  DependentValues extends Partial<Values> = Partial<Values>
>(
  props: DependentFieldProps<Values, Value, Key, Ref, DependentValues>
) => JSX.Element;

export default DependentField;
