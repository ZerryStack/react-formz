import { FormzError } from "../../../../react-formz";
import React from "react";

type HtmlSpanProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

export interface ErrorMessageBaseProps {
    field: string;
    onlyShowIfTouched?: boolean;
}

export interface ErrorMessageComponentProps extends ErrorMessageBaseProps {
    error: FormzError;
    "aria-live": "polite";
}

export interface ErrorMessageProps extends ErrorMessageBaseProps, HtmlSpanProps {
    component?: "span" | React.ComponentType<ErrorMessageComponentProps>
}