import React from "react";
import { useFormIdContext } from "../../providers/FormIdProvider";
import { useFormz } from "../../store";
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
const SubmitButton = ({ children, ...buttonProps }: React.PropsWithChildren<SubmitButtonProps>) => {
    const id = useFormIdContext();
    const isSubmitting = useFormz((state) => state.forms[id].isSubmitting);
    const isInvalid = useFormz((state) => state.forms[id].isInvalid);

    return (
        <button disabled={isSubmitting || isInvalid} {...buttonProps}>{children}</button>
    );
}

export default SubmitButton;
