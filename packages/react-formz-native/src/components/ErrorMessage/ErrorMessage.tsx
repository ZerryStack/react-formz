import { useFieldErrorMessage, useFieldTouched } from "../../../../react-formz";
import React from "react";
import { Text } from "react-native";
import { ErrorMessageProps } from "./ErrorMessage.types";

const ErrorMessage = ({
  field,
  onlyShowIfTouched = true,
  component: Component,
  ...spanProps
}: ErrorMessageProps) => {
  const error = useFieldErrorMessage(field);
  const touched = useFieldTouched(field);
  
  if (error && (onlyShowIfTouched ? touched !== false : true)) {
    if (Component) {
      <Component nativeID={`${field}-error`} {...spanProps} accessibilityLiveRegion="polite" field={field} error={error}>
        {error.message}
      </Component>;
    }

    return (
      <Text accessibilityLiveRegion="polite" nativeID={`${field}-error`} {...spanProps}>
        {error.message}
      </Text>
    );
  }

  return null;
};

export default ErrorMessage;
