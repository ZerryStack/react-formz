import React from "react";
import { Field, FieldValue } from "@zerry/react-formz";
import { FieldInputProps, FieldProps } from "./Field.types";

const ReactNativeField = <
  Value extends FieldValue = FieldValue,
  Key extends string = string,
  Ref = unknown
>({
  as: As,
  ...props
}: FieldProps<Value, Key, Ref>) => {
  return (
    <Field<Value, Key, Ref>
      {...props}
      as={({ input: { onChange, ...input }, ...rest }) => {
        const newInput: FieldInputProps<Key, Value> = {
          ...input,
          onChangeText: (value) => {
            onChange(value);
          },
        };

        return <As key={input.name} {...rest} input={newInput} />;
      }}
    />
  );
};

export default ReactNativeField;
