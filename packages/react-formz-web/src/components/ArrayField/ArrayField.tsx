import { FieldId, useFieldArrayHelpers } from "@zerry/react-formz-core";
import React from "react";
import useWebField from "../../hooks/fields/useField";
import { ArrayFieldProps } from "./ArrayField.types";

const ArrayField = <
  Value,
  Key extends FieldId = FieldId,
>(
  props: ArrayFieldProps<Value, Key>
) => {
  const { render: Component, name, validate, ...restProps } = props;
    
  const field = useWebField<Key, Value[]>(name, {});

  const arrayHelpers = useFieldArrayHelpers<Value>(field.formId, name, validate);
  
  return <Component {...restProps} values={field.value} arrayHelpers={arrayHelpers} />;
};

export default ArrayField;
