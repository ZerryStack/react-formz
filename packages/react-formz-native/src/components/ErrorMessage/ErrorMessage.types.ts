import { FormzError } from "@zerry/react-formz";
import React from "react";

export interface ErrorMessageBaseProps {
    field: string;
    onlyShowIfTouched?: boolean;
}

export interface ErrorMessageComponentProps extends ErrorMessageBaseProps {
    error: FormzError;
    accessibilityLiveRegion: "polite";
    nativeID: string;
    children?: React.ReactNode;
}

export interface ErrorMessageProps extends ErrorMessageBaseProps {
    component?: React.ComponentType<ErrorMessageComponentProps>
}