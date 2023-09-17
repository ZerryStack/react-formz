import { FieldId, FieldValue } from "@zerry/react-formz-core";
import React from "react";
import Field, { NativeFieldProps as FieldProps } from "../Field";

function createCustomField() {
  const component = React.forwardRef<
    unknown,
    FieldProps<FieldValue, FieldId, unknown>
  >((props: FieldProps<FieldValue, FieldId, unknown>, ref) => {
    return <Field {...props} ref={ref} />;
  });

  return component as <
    Value extends FieldValue,
    Key extends FieldId = FieldId,
    Ref = unknown
  >(
    props: FieldProps<Value, Key, Ref>
  ) => JSX.Element;
}

/**
 * A custom field is a `Field` where the value is not your typical text input value like
 * your usual string, number, date, etc.
 *
 * This field is great for integrating with third party libraries who's api's
 * are not standard text input such as `react-native-datepicker`.
 *
 * Example Usage:
 *
 * ```tsx
 * <CustomField<[Date, Date]>
 *  as={({ input: { value, ...input } }) => (
 *    <ReactNativeDatePicker {...input} startDate={value[0]} endDate={value[1]} />
 *  )}
 * />
 * ```
 */
const CustomField = createCustomField();

export default CustomField;
