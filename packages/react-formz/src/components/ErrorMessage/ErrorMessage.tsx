import React from "react";
import useErrorMessage from "../../hooks/fields/useErrorMessage";
import useFieldTouched from "../../hooks/fields/useFieldTouched";
import { ErrorMessageProps } from "./ErrorMessage.types";

const ErrorMessage = ({
  field,
  onlyShowIfTouched = true,
  component: Component,
  ...spanProps
}: ErrorMessageProps) => {
  const error = useErrorMessage(field);
  const touched = useFieldTouched(field);
  
  if (error && (onlyShowIfTouched ? touched !== false : true)) {
    if (Component) {
      <Component id={`${field}-error`} {...spanProps} aria-live="polite" field={field} error={error}>
        {error.message}
      </Component>;
    }

    return (
      <span aria-live="polite" id={`${field}-error`} {...spanProps}>
        {error.message}
      </span>
    );
  }

  return null;
};

export default ErrorMessage;
