import React from "react";
import useField from "../../hooks/fields/useField";
import useFieldArrayHelpers from "../../hooks/fields/useFieldArrayHelpers";
import { FieldId } from "../../types/field";
import { ArrayFieldProps } from "./ArrayField.types";

const ArrayField = <
  Value,
  Key extends FieldId = FieldId,
  Props extends Record<string, any> = Record<string, any>
>(
  props: ArrayFieldProps<Value, Key, Props>
) => {
  const { render: Component, name, validate, ...restProps } = props;
    
  const field = useField<Key, Value[]>(name, {
    validate,
  });

  const arrayHelpers = useFieldArrayHelpers<Value>(field.formId, name);
  
  return <Component {...restProps} values={field.value} arrayHelpers={arrayHelpers} />;
};

export default ArrayField;
