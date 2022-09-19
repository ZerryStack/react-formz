import { FieldId, FieldValue, FormzValues, UseDependentFieldEventsOptions } from "../../../../react-formz";
import { WebFieldProps } from "../Field/Field.types";

export interface DependentFieldProps<
  Values extends FormzValues = FormzValues,
  Value extends FieldValue = FieldValue,
  Key extends FieldId = FieldId,
  Ref = HTMLInputElement,
  DependentValues extends Partial<Values> = Partial<Values>
> extends Omit<WebFieldProps<Value, Key, Ref>, "validate">,
    UseDependentFieldEventsOptions<Values, Value, DependentValues> {}
