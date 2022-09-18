import { FormRehydrationCallback, FormSubmitCallback, FormzValues, SchemaValidator, UseFormOptions, UseFormResult } from "../../../../react-formz";
import React from "react";


export interface FormProps<Values extends FormzValues>
  extends UseFormOptions<Values> {
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
  component?: "form" | React.ComponentType<{}>;
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
  /**
   * Validates the form data against a schema. Could be `zod` or `yup` or any custom
   * schema validator.
   */
  schemaValidator?: SchemaValidator<Values>;
}

export interface FormChildrenProps<Values extends FormzValues> {
  children: (form: UseFormResult<Values>) => React.ReactNode;
  form: UseFormResult<Values>;
}