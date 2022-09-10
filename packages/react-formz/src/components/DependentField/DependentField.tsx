import React, { useEffect } from "react";
import useFieldActions from "../../hooks/fields/useFieldActions";
import useFieldValidation from "../../hooks/fields/useFieldValidation";
import useStableCallback from "../../hooks/utils/useStableCallback";
import { useFormIdContext } from "../../providers/FormIdProvider";
import useMemoizedSelector from "../../store/hooks/useMemoizedSelector";
import { FieldId, FieldValidator, FieldValue } from "../../types/field";
import { FormzValues } from "../../types/form";
import Field from "../Field";
import { DependentFieldProps } from "./DependentField.types";

const DependentFieldInner = <
  Values extends FormzValues = FormzValues,
  Key extends FieldId = FieldId,
  Value extends FieldValue = FieldValue,
  Element = HTMLInputElement,
  Component extends React.ComponentType<{}> = React.ComponentType<{}>,
  DependentValues extends Partial<Values> = Partial<Values>
>(
  props: DependentFieldProps<
    Values,
    Key,
    Value,
    Element,
    Component,
    DependentValues
  >,
  ref: React.Ref<Element>
) => {
  const { dependencies, onDependenciesChange, ...restProps } = props;

  const formId = useFormIdContext();

  const fieldActions = useFieldActions(formId, props.name);

  const dependentFields = useMemoizedSelector<DependentValues>((state) =>
    dependencies(state.forms[formId].values)
  );

  const handleDependenciesChange = useStableCallback(() => {
    if (onDependenciesChange) {
      onDependenciesChange(dependentFields, fieldActions);
    }
  });

  const dependentValidate = useStableCallback<FieldValidator<Value>>(
    (value) => {
      if (props.validate) {
        return props.validate(value, dependentFields);
      }
      return null;
    }
  );

  const { validate } = useFieldValidation(formId, props.name, {
    validate: dependentValidate,
  });

  useEffect(() => {
    (async () => {
      handleDependenciesChange();
      await validate();
    })();
  }, [dependentFields]);

  return <Field {...restProps} ref={ref} validate={dependentValidate} />;
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
 * @typeParam `Component` - If rendering your own component via the `as` prop the `Component` type parameter applies to that component.
 * @typeParam `DependentValues` - The dependent values that this field will subscribe to.
 *
 */
const DependentField = React.forwardRef<any, DependentFieldProps>(
  DependentFieldInner
) as <
  Values extends FormzValues = FormzValues,
  Key extends FieldId = FieldId,
  Value extends FieldValue = FieldValue,
  Element = HTMLInputElement,
  Component extends React.ComponentType<{}> = React.ComponentType<{}>,
  DependentValues extends Partial<Values> = Partial<Values>
>(
  props: DependentFieldProps<
    Values,
    Key,
    Value,
    Element,
    Component,
    DependentValues
  >
) => JSX.Element;

export default DependentField;
