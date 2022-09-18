import { FieldId, FieldValue } from "../../../../react-formz";
import React from "react";
import Field, { FieldProps } from "../Field";

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
 * A custom field is a `Field` where the value is not your typical html input value like
 * your usual string, number, date, etc.
 *
 * This field is great for integrating with third party libraries who's api's
 * are not standard html input such as `react-select`.
 *
 * Example Usage:
 *
 * ```tsx
 * <CustomField<[Date, Date]>
 *  as={({ input: { value, ...input } }) => (
 *    <ReactDatePicker {...input} startDate={value[0]} endDate={value[1]} />
 *  )}
 * />
 * ```
 */
const CustomField = createCustomField();

export default CustomField;
