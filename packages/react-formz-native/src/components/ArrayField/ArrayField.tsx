import { FieldId, useFieldArrayHelpers } from "@zerry/react-formz-core";
import React from "react";
import useNativeField from "../../hooks/fields/useField";
import { ArrayFieldProps } from "./ArrayField.types";
import { ArrayFieldProvider } from "../../providers/ArrayFieldProvider";

const ArrayField = <Value, Key extends FieldId = FieldId>(
  props: ArrayFieldProps<Value, Key>
) => {
  const { render: Component, name, validate, ...restProps } = props;

  const field = useNativeField<Key, Value[]>(name, {});

  const arrayHelpers = useFieldArrayHelpers<Value>(
    field.formId,
    name,
    validate
  );

  return (
    <ArrayFieldProvider>
      <Component
        {...restProps}
        values={field.value}
        arrayHelpers={arrayHelpers}
      />
    </ArrayFieldProvider>
  );
};

export default ArrayField;
