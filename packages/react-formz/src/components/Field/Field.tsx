import React from "react";
import useField from "../../hooks/fields/useField";
import { FieldId, FieldValue } from "../../types/field";
import { isValidInputValue } from "../../utils/is";
import { FieldInputProps, FieldProps } from "./Field.types";

const FieldInner = <
  Key extends FieldId = FieldId,
  Value extends FieldValue = FieldValue,
  Element = HTMLInputElement,
  Component extends React.ComponentType<{}> = React.ComponentType<{}>
>(
  props: FieldProps<Key, Value, Element, Component> &
    React.ComponentProps<Component>,
  ref: React.Ref<Element>
): JSX.Element | null => {
  const {
    as: Tag,
    name,
    children,
    type = "text",
    required,
    validate,
    pattern,
    min,
    max,
    label,
    ...restProps
  } = props;

  const field = useField<Key, Value>(name, {
    type,
    required,
    validate,
    pattern,
    min,
    max,
    label,
  });

  const inputProps: FieldInputProps<Key, Value> = {
    label,
    name,
    required,
    type,
    checked: field.checked,
    onBlur: field.onBlur,
    onChange: field.onChange,
    "aria-invalid": field.error !== undefined || undefined,
    "aria-required": required ?? undefined,
    value: isValidInputValue(field.value) ? field.value : undefined,
  };

  if (Tag) {
    if (typeof Tag === "function") {
      return (
        <Tag
          {...restProps}
          input={inputProps}
          error={field.error}
          storeValue={field.value}
          ref={ref}
          actions={field.actions}
        >
          {children}
        </Tag>
      );
    } else {
      return (
        <Tag {...inputProps} ref={ref as any}>
          {children}
        </Tag>
      );
    }
  }

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
 * @typeParam Key {@link FieldId} - The input/field `name` property. This value should correspond to a property in the form.
 * @typeParam Value {@link FieldValue} - The value of the input/field.
 * @typeParam Element - The underlying html element either "input", "select", or "textarea".
 * @typeParam Component - If rendering your own component via the `as` prop the `Component` type parameter applies to that component.
 */

const Field = React.forwardRef<any, FieldProps>(FieldInner) as <
  Key extends FieldId = FieldId,
  Value extends FieldValue = FieldValue,
  Element = HTMLInputElement,
  Component extends React.ComponentType<{}> = React.ComponentType<{}>
>(
  props: FieldProps<Key, Value, Element, Component>
) => JSX.Element;

export default Field;