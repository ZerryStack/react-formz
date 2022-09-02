import React from "react";

export interface FieldComponentProps {
    name?: string;
    [key: `data-${string}`]: string | undefined;
}
export interface FieldProps {
    name: string;
    as?: "input" | "select" | ((props: Partial<FieldComponentProps>) => JSX.Element | null);
    children?: React.ReactNode;
    style?: React.CSSProperties;
}