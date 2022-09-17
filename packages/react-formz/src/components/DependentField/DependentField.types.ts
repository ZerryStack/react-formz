import { UseDependentFieldEventsOptions } from "../../hooks/fields/useDependentFieldEvents";
import { FieldId, FieldValue } from "../../types/field";
import { FormzValues } from "../../types/form";
import { BaseFieldProps } from "../Field";

export interface BaseDependentFieldProps<
  Values extends FormzValues = FormzValues,
  Value extends FieldValue = FieldValue,
  Key extends FieldId = FieldId,
  Ref = unknown,
  DependentValues extends Partial<Values> = Partial<Values>
> extends Omit<BaseFieldProps<Value, Key, Ref>, "validate">,
    UseDependentFieldEventsOptions<Values, Value, DependentValues> {}

export type DependentFieldProps<
  Values extends FormzValues = FormzValues,
  Value extends FieldValue = FieldValue,
  Key extends FieldId = FieldId,
  Ref = unknown,
  DependentValues extends Partial<Values> = Partial<Values>
> = BaseDependentFieldProps<Values, Value, Key, Ref, DependentValues>;
