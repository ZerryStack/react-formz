import React from "react";
import { TextFieldValue } from "../../types/field";

export interface FieldComponentProps {
    name?: string;
    value?: TextFieldValue;
    checked?: boolean;
    onChange?: React.ChangeEventHandler<any>;
    [key: `data-${string}`]: string | undefined;
}
export interface FieldProps {
    name: string;
    as?: "input" | "select" | ((props: Partial<FieldComponentProps>) => JSX.Element | null);
    children?: React.ReactNode;
    style?: React.CSSProperties;
    type?: React.HTMLInputTypeAttribute;
}