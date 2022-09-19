import {
  FormzValues,
  UseFormResult,
  FormProps,
} from "../../../../react-formz";
import React from "react";

type HtmlFormProps = Omit<
  React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  >,
  "onSubmit"
>;

export interface WebFormProps<Values extends FormzValues>
  extends FormProps<Values>, HtmlFormProps {
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
  component?: "form" | React.ComponentType<{}>;
}

export interface FormChildrenProps<Values extends FormzValues> {
  children: (form: UseFormResult<Values>) => React.ReactNode;
  form: UseFormResult<Values>;
}
