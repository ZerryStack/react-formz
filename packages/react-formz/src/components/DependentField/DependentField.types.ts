import { FieldId, DependentFieldValidator, FieldValue, DependentFieldChangeCallback } from "../../types/field";
import { FormzValues } from "../../types/form";
import { BaseFieldProps } from "../Field";

export interface BaseDependentFieldProps<
  Values extends FormzValues = FormzValues,
  Value extends FieldValue = FieldValue,
  Key extends FieldId = FieldId,
  Element = HTMLInputElement,
  DependentValues extends Partial<Values> = Partial<Values>
> extends Omit<BaseFieldProps<Key, Value, Element> , "validate">{
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

export type DependentFieldProps<
  Values extends FormzValues = FormzValues,
  Value extends FieldValue = FieldValue,
  Key extends FieldId = FieldId,
  Element = HTMLInputElement,
  DependentValues extends Partial<Values> = Partial<Values>
> = BaseDependentFieldProps<Values, Value, Key, Element, DependentValues>;
