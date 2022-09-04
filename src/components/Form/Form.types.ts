import React from "react";
import { UseFormOptions, UseFormResult } from "../../hooks/useForm";
import { FormzErrors, FormzValues } from "../../types/form";

type HtmlFormProps = Omit<
  React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  >,
  "children" | "onSubmit"
>;

export interface FormProps<Values extends FormzValues>
  extends UseFormOptions<Values>,
    HtmlFormProps {
  children?: React.ReactNode | ((form: UseFormResult<Values>) => JSX.Element);
  onSubmit?:
    | ((values: Values, errors: FormzErrors<Values>) => Promise<void>)
    | ((values: Values, errors: FormzErrors<Values>) => void);
}

export interface FormChildrenProps<Values extends FormzValues> {
  children: (form: UseFormResult<Values>) => React.ReactNode;
  form: UseFormResult<Values>;
}
