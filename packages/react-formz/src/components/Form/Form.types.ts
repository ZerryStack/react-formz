import React from "react";
import { UseFormOptions, UseFormResult } from "../../hooks/forms/useForm";
import {
  FormRehydrationCallback,
  FormSubmitCallback,
  FormzValues,
} from "../../types/form";

type HtmlFormProps = Omit<
  React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  >,
  "children" | "onSubmit"
>;

type FormComponentProps = Omit<
  React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  >,
  "ref"
>;
export interface FormProps<Values extends FormzValues>
  extends UseFormOptions<Values>,
    HtmlFormProps {
  children?: React.ReactNode | ((form: UseFormResult<Values>) => JSX.Element);
  onSubmit?: FormSubmitCallback<Values>;
  component?: "form" | React.ComponentType<FormComponentProps>;
  /**
   * If true, the form state will reset after a successful submission.
   */
  resetOnSubmit?: boolean;
  onFormRehydrated?: FormRehydrationCallback<Values>;
}

export interface FormChildrenProps<Values extends FormzValues> {
  children: (form: UseFormResult<Values>) => React.ReactNode;
  form: UseFormResult<Values>;
}
