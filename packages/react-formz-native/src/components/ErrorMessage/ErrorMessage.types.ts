import { FormzError } from "@zerry/react-formz-core";
import React from "react";
import { TextProps } from "react-native";

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

export interface ErrorMessageProps extends ErrorMessageBaseProps, TextProps {
    component?: React.ComponentType<ErrorMessageComponentProps>
}