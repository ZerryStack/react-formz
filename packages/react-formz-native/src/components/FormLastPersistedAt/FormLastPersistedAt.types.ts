import { TextProps } from "react-native";

export interface FormLastPersistedAtProps extends TextProps {
    format?: string | ((date: Date) => string);
    as?: React.ComponentType<TextProps>;
}