import { FieldId, useFieldArrayHelpers } from "../../../../react-formz";
import React from "react";
import useWebField from "../../hooks/fields/useField";
import { ArrayFieldProps } from "./ArrayField.types";

const ArrayField = <
  Value,
  Key extends FieldId = FieldId,
  Props extends Record<string, any> = Record<string, any>
>(
  props: ArrayFieldProps<Value, Key, Props>
) => {
  const { render: Component, name, validate, ...restProps } = props;
    
  const field = useWebField<Key, Value[]>(name, {});

  const arrayHelpers = useFieldArrayHelpers<Value>(field.formId, name, validate);
  
  return <Component {...restProps} values={field.value} arrayHelpers={arrayHelpers} />;
};

export default ArrayField;
