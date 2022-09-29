import {
  FieldValue,
  FieldId,
  logger,
} from "../../../../react-formz";
import React from "react";
import { NativeFieldProps } from "./Field.types";
import useNativeField from "../../hooks/fields/useField";
import { TextInput } from "react-native";
import useInternalFieldValue from "../../hooks/fields/useInternalFieldValue";

const FieldInner = <
  Value extends FieldValue = FieldValue,
  Key extends FieldId = FieldId,
  Ref = TextInput
>(
  props: NativeFieldProps<Value, Key, Ref>,
  ref: React.Ref<Ref>
): JSX.Element | null => {
  const {
    as: Tag,
    name,
    children,
    type = "default",
    required,
    validate,
    pattern,
    min,
    max,
    label,
    ...restProps
  } = props;

  const field = useNativeField<Key, Value>(name, {
    type,
    required,
    validate,
    pattern,
    min,
    max,
    label,
  });

  const {
    handleBlur,
    handleChange,
    handleFinishEditing,
    value,
  } = useInternalFieldValue(name, field);

  const inputProps = {
    label,
    name,
    required,
    type,
    onBlur: handleBlur,
    onChangeText: handleChange,
    "aria-invalid": field.error !== undefined || undefined,
    "aria-required": required ?? undefined,
    "aria-describedby": `${name}-error`,
    nativeID: name,
    value: value,
    onEndEditing: handleFinishEditing,
    onSubmitEditing: handleFinishEditing,
  };

  if (Tag) {
    return (
      <Tag
        {...restProps}
        key={name}
        input={inputProps}
        error={field.error}
        ref={ref}
        actions={field.actions}
      >
        {children}
      </Tag>
    );
  }

  logger.warn(
    `You did not pass in a component to render using the "as" prop for your Field.`
  );

  return null;
};

/**
 * A `Field` is a consumer of some data in its' parent `Form`. The user interface of a `Field`
 * is completely determined by you, the developer. This component abstracts away all of the
 * complexities of dealing with inputs, values, events, and validations.
 *
 * ```tsx
 * function UserProfile() {
 *   return (
 *     <Form name="UserProfile" initialValues={{ firstName: "" }}>
 *        <Field name="firstName" type="text" required pattern={/\w+/} as={({ input }) => <input {...input} />} />
 *     </Form>
 *   );
 * }
 * ```
 * @param props {@link FieldProps} - The react props for the field component.
 * @typeParam `Value` {@link FieldValue} - The value of the input/field.
 * @typeParam `Key` {@link FieldId} - The input/field `name` property. This value should correspond to a property in the form.
 * @typeParam `Ref` - The type of react ref that will be passed to the underlying element.
 */

const Field = React.forwardRef<any, NativeFieldProps>(FieldInner) as <
  Value extends FieldValue = FieldValue,
  Key extends FieldId = FieldId,
  Ref = TextInput
>(
  props: NativeFieldProps<Value, Key, Ref>
) => JSX.Element;

export default Field;
