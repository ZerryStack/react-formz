import { FormProps, FormzValues } from "@zerry/react-formz-core";
import { ViewProps } from "react-native";

export interface NativeFormProps<Values extends FormzValues> extends FormProps<Values>, ViewProps {
  /**
   * If the value is a component then that component will be rendered
   * instead of the native html `form` element.
   *
   * Example Usage:
   *
   * ```
   * <Form component={View} />
   * ```
   */
  component?: React.ComponentType<React.PropsWithChildren<unknown>>;
}
