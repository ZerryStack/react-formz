import { AnyObject } from "immer/dist/internal";
import React from "react";
import { UseFormOptions, UseFormResult } from "../../hooks/useForm";

type HtmlFormProps = React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;

export interface FormProps<Values extends AnyObject> extends UseFormOptions<Values>, Omit<HtmlFormProps, "children"> {
   children?: React.ReactNode | ((form: UseFormResult<Values>) => JSX.Element )
}

export interface FormChildrenProps<Values extends AnyObject> {
    children: ((form: UseFormResult<Values>) => React.ReactNode )
}