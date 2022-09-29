import { useEffect } from "react";
import { useFormIdContext } from "../../providers/FormIdProvider";
import useMemoizedSelector from "../../store/hooks/useMemoizedSelector";
import {
  DependentFieldValidator,
  DependentFieldChangeCallback,
  FieldValidator,
  FieldValue,
  FieldId,
} from "../../types/field";
import { FormzValues } from "../../types/form";
import useStableCallback from "../utils/useStableCallback";
import useFieldActions from "./useFieldActions";
import useFieldValidation from "./useFieldValidation";

export interface UseDependentFieldEventsOptions<
  Values extends FormzValues = FormzValues,
  Value extends FieldValue = FieldValue,
  DependentValues extends Partial<Values> = Partial<Values>
> {
  /**
   * A selector function for selecting the dependent values to watch.
   * The returned value should be an object.
   */
  dependencies: (values: Values) => DependentValues;
  /**
   * Validation function that will recieve the field value in addition to
   * the values of its' dependencies. You can use both arguments in conjuction
   * to validate the field.
   */
  validate?: DependentFieldValidator<Value, DependentValues>;
  /**
   * A callback function that will be called whenever at least one of the
   * dependencies changes. This function will recieve the dependencies object and
   * the field actions object so that you can take actions on the field whenever
   * its' dependencies change.
   */
  onDependenciesChange?: DependentFieldChangeCallback<Value, DependentValues>;
}

/**
 * React hook for customizing a fields validate function to accept a set of 
 * dependencies as a second option. In addition, allows for a callback to specified
 * that will be called when the dependencies change.
 * @param name The id/name of the field.
 * @param options Hook options
 */
function useDependentFieldEvents<
  Values extends FormzValues = FormzValues,
  Value extends FieldValue = FieldValue,
  DependentValues extends Partial<Values> = Partial<Values>,
  Key extends FieldId = FieldId,
>(name: Key, options: UseDependentFieldEventsOptions<Values, Value, DependentValues>) {
  const { dependencies, onDependenciesChange } = options;

  const formId = useFormIdContext();

  const fieldActions = useFieldActions(formId, name);

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
      if (options.validate) {
        return options.validate(value, dependentFields);
      }
      return null;
    }
  );

  const { validate } = useFieldValidation(formId, name, {
    validate: dependentValidate,
  });

  useEffect(() => {
    (async () => {
      handleDependenciesChange();
      await validate();
    })();
  }, [dependentFields]);

  return { validate: dependentValidate, dependentFields };
}

export default useDependentFieldEvents;

