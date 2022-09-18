import { FieldProps, FieldValue } from "../../../../react-formz";
import { KeyboardType } from "react-native";
export interface NativeFieldProps<Value extends FieldValue = FieldValue, Key extends string = string, Ref = unknown> extends Omit<FieldProps<Value, Key, Ref>, "type"> {
    type?: KeyboardType
}