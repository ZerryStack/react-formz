import { FieldProps, FieldValue, LiteralUnion } from "../../../../react-formz";

export interface WebFieldProps<Value extends FieldValue = FieldValue, Key extends string = string, Ref = unknown> extends Omit<FieldProps<Value, Key, Ref>, "type"> {
    type?: LiteralUnion<React.HTMLInputTypeAttribute>
}