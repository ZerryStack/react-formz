import React from "react";
import { ButtonProps } from "react-native";

export interface SubmitButtonProps extends ButtonProps {
    as?: React.ComponentType<Pick<ButtonProps, "title" | "onPress">>;
}