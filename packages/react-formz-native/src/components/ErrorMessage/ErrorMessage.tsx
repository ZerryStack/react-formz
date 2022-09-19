import { useFieldErrorMessage, useFieldTouched } from "../../../../react-formz";
import React from "react";
import { Text } from "react-native";
import { ErrorMessageProps } from "./ErrorMessage.types";

const ErrorMessage = ({
  field,
  onlyShowIfTouched = true,
  component: Component,
  ...textProps
}: ErrorMessageProps) => {
  const error = useFieldErrorMessage(field);
  const touched = useFieldTouched(field);
  
  if (error && (onlyShowIfTouched ? touched !== false : true)) {
    if (Component) {
      <Component nativeID={`${field}-error`} {...textProps} accessibilityLiveRegion="polite" field={field} error={error}>
        {error.message}
      </Component>;
    }

    return (
      <Text accessibilityLiveRegion="polite" nativeID={`${field}-error`} {...textProps}>
        {error.message}
      </Text>
    );
  }

  return null;
};

export default ErrorMessage;
