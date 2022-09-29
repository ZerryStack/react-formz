import { FieldId, FieldValue, FormzValues, UseDependentFieldEventsOptions } from "../../../../react-formz";
import { FieldComponentProps, NativeFieldProps } from "../Field/Field.types";

export interface DependentFieldProps<
  Values extends FormzValues = FormzValues,
  Value extends FieldValue = FieldValue,
  Key extends FieldId = FieldId,
  Ref = HTMLInputElement,
  DependentValues extends Partial<Values> = Partial<Values>
> extends Omit<NativeFieldProps<Value, Key, Ref>, "validate" | "as">,
    UseDependentFieldEventsOptions<Values, Value, DependentValues> {
      as?: React.ComponentType<FieldComponentProps<Value, Key, Ref> & { dependencies: DependentValues }> 
    }
