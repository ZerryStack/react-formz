import { FieldId, FieldValue } from "../../types/field";
import { FormzValues } from "../../types/form";
import useDependentFieldEvents, {
  UseDependentFieldEventsOptions,
} from "./useDependentFieldEvents";
import useField, { UseFieldOptions } from "./useField";

export interface UseDependentFieldOptions<
  Values extends FormzValues,
  Value extends FieldValue = FieldValue,
  DependentValues extends Partial<Values> = Partial<Values>
> extends UseDependentFieldEventsOptions<Values, Value, DependentValues>,
    Omit<UseFieldOptions<Value>, "validate"> {}

/**
 * A `DependentField` is a field that depends on the value of another field or fields in
 * its owner `Form`. The `useDependentField` hook has the exact same interface except with the added
 * ability to respond to changes in other fields within its parent form.
 *
 * @param options {@link UseDependentFieldOptions} - The hook options.
 * @typeParam `Values` {@link FormzValues} - The values of the parent form i.e. the data structure for your form.
 * @typeParam `Value` {@link FieldValue} - The value of the input/field.
 * @typeParam `Key` {@link FieldId} - The input/field `name` property. This value should correspond to a property in the form.
 * @typeParam `DependentValues` - The dependent values that this field will subscribe to.
 *
 */
function useDependentField<
  Values extends FormzValues,
  Value extends FieldValue = FieldValue,
  Key extends FieldId = FieldId,
  DependentValues extends Partial<Values> = Partial<Values>
>(
  name: Key,
  options: UseDependentFieldOptions<Values, Value, DependentValues>
) {
  const { validate, dependencies, onDependenciesChange, ...restOptions } =
    options;

  const { validate: dependentValidate } = useDependentFieldEvents(name, {
    validate,
    dependencies,
    onDependenciesChange,
  });

  const field = useField(name, {
    validate: dependentValidate,
    ...restOptions,
  });

  return field;
}

export function useDependentTextField<
  Values extends FormzValues,
  Key extends FieldId = FieldId,
  DependentValues extends Partial<Values> = Partial<Values>
>(
  name: Key,
  options: UseDependentFieldOptions<Values, string | undefined, DependentValues>
) {
  return useDependentField(name, {
    type: "text",
    ...options,
  });
}

export function useDependentNumberField<
  Values extends FormzValues,
  Key extends FieldId = FieldId,
  DependentValues extends Partial<Values> = Partial<Values>
>(
  name: Key,
  options: UseDependentFieldOptions<Values, number | undefined, DependentValues>
) {
  return useDependentField(name, {
    ...options,
    type: "number",
  });
}

export function useDependentBooleanField<
  Values extends FormzValues,
  Key extends FieldId = FieldId,
  DependentValues extends Partial<Values> = Partial<Values>
>(
  name: Key,
  options: UseDependentFieldOptions<Values, boolean, DependentValues>
) {
  return useDependentField(name, {
    ...options,
    type: "checkbook",
  });
}

export function useDependentRadioField<
  Values extends FormzValues,
  Key extends FieldId = FieldId,
  DependentValues extends Partial<Values> = Partial<Values>
>(
  name: Key,
  options: UseDependentFieldOptions<Values, string | undefined, DependentValues>
) {
  return useDependentField(name, {
    ...options,
    type: "radio",
  });
}

export function useDependentSelectField<
  Values extends FormzValues,
  Key extends FieldId = FieldId,
  DependentValues extends Partial<Values> = Partial<Values>
>(
  name: Key,
  options: UseDependentFieldOptions<Values, string | undefined, DependentValues>
) {
  return useDependentField(name, {
    ...options,
    type: "select",
  });
}

export function useDependentCustomField<
  Values extends FormzValues,
  Value extends FieldValue = FieldValue,
  Key extends FieldId = FieldId,
  DependentValues extends Partial<Values> = Partial<Values>
>(
  name: Key,
  options: UseDependentFieldOptions<Values, Value, DependentValues>
) {
  return useDependentField(name, options);
}

export default useDependentField;
