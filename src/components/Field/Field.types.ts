import React from "react";

export interface FieldProps {
    name: string;
    as?: "input" | "select";
    children?: React.ReactNode;
    style?: React.CSSProperties;
}