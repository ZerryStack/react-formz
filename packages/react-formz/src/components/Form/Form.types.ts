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
  children?: React.ReactNode;
  /**
   * A callback that will be called if and when a form is submitted and 
   * the form is not in an invalid state.
   */
  onSubmit?: FormSubmitCallback<Values>;
  /**
   * If the value is a component then that component will be rendered
   * instead of the native html `form` element. 
   * 
   * Example Usage:
   * 
   * ```
   * <Form component={MaterialUIForm} />
   * ```
   */
  component?: "form" | React.ComponentType<FormComponentProps>;
  /**
   * If true, the form state will reset after a successful submission.
   */
  resetOnSubmit?: boolean;
  /**
   * A callback that will be called after a form has successfully been rehydrated with
   * the locally cached form state from a previous session. You can use this event
   * callback to notify users that the form has been rehydrated.
   * 
   * Example Usage:
   * 
   * ```tsx
   * <Form onFormRehydrated={() => notifyUser("We've restore your form!")} />
   * ```
   */
  onFormRehydrated?: FormRehydrationCallback<Values>;
}

export interface FormChildrenProps<Values extends FormzValues> {
  children: (form: UseFormResult<Values>) => React.ReactNode;
  form: UseFormResult<Values>;
}