import { useFormIdContext, useFormz } from "../../../../react-formz";
import React from "react";
import { SubmitButtonProps } from "./SubmitButton.types";

/**
 * A wrapper component that wraps the html `button` element and plugins
 * into a forms state. The button will be disabled when the form is submitting
 * or is invalid. You can custom this component as well.
 *
 * Example Customization:
 *
 * ```tsx
 * const MySubmitButton = styled(SubmitButton)`
 *  background: red;
 * `;
 *
 * const MySubmitButton = <SubmitButton className="myButton" />
 * ```
 */
const SubmitButtonInner = (
  {
    children,
    as: Component = "button",
    ...buttonProps
  }: React.PropsWithChildren<SubmitButtonProps>,
  ref: React.Ref<HTMLButtonElement>
) => {
  const id = useFormIdContext();
  const isSubmitting = useFormz((state) => state.forms[id].isSubmitting);
  const isInvalid = useFormz((state) => state.forms[id].isInvalid);

  return (
    <Component disabled={isSubmitting || isInvalid} {...buttonProps} ref={ref}>
      {children}
    </Component>
  );
};

const SubmitButton =
  React.forwardRef<
    HTMLButtonElement,
    React.PropsWithChildren<SubmitButtonProps>
  >(SubmitButtonInner);

export default SubmitButton;
