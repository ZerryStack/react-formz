import React from "react";
import { Button } from "react-native";
import { useFormIdContext, useFormSubmission } from "@zerry/react-formz-core";
import { useFormSubmitContext } from "../../providers/FormSubmitProvider";
import { SubmitButtonProps } from "./SubmitButton.types";

const SubmitButton = ({ as: Component = Button, title }: SubmitButtonProps) => {
  const formId = useFormIdContext();
  const { onSubmit, resetOnSubmit } = useFormSubmitContext();
  const handleSubmit = useFormSubmission(formId, onSubmit, resetOnSubmit);

  return <Component title={title} onPress={() => handleSubmit()} />;
};

export default SubmitButton;
