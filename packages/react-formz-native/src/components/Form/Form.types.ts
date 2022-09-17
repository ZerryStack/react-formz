import { FormzValues, SchemaValidator } from "@zerry/react-formz";

export interface FormProps<Values extends FormzValues> {
  /**
   * A unique name for the form. If `saveDrafts` is enabled, a name is required.
   */
  name?: string;
  /**
   * The initial values of the form.
   */
  initialValues: Values;
  /**
   * If true, the form state will be saved to localstorage as the user updates values.
   */
  saveDrafts?: boolean;
  /**
   * A callback that will be called after a form has successfully been rehydrated with
   * the locally cached form state from a previous session. You can use this event
   * callback to notify users that the form has been rehydrated.
   *
   * Example Usage:
   *
   * ```tsx
   * useForm({
   *  onFormRehydrated: () => notifyUser("We've restore your form!")
   * })
   * ```
   */
  schemaValidator?: SchemaValidator<Values>;

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
