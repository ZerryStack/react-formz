import React from "react";
import { useFormIdContext } from "../../providers/FormIdProvider";
import { useFormz } from "../../store";
import { SubmitButtonProps } from "./SubmitButton.types";

const SubmitButton = ({ children, ...buttonProps }: React.PropsWithChildren<SubmitButtonProps>) => {
    const id = useFormIdContext();
    const isSubmitting = useFormz((state) => state.forms[id].isSubmitting);
    const isInvalid = useFormz((state) => state.forms[id].isInvalid);

    return (
        <button disabled={isSubmitting || isInvalid} {...buttonProps}>{children}</button>
    );
}

export default SubmitButton;
