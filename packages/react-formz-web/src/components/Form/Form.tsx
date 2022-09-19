import React from "react";
import { WebFormProps } from "./Form.types";
import {
  FormProvider,
  FormzValues,
  logger,
  useFormIdContext,
  useFormStateInitialized,
  useStableCallback,
  useStableValue,
  useFormSubmission,
} from "../../../../react-formz";

const FormInner = <Values extends FormzValues>({
  name,
  onSubmit,
  children,
  component: Component = "form",
  resetOnSubmit = false,
  ...formProps
}: Omit<WebFormProps<Values>, "initialValues" | "schemaValidator">) => {
  const id = useFormIdContext();
  const initialized = useFormStateInitialized(id);
  const handleSubmit = useFormSubmission(id, onSubmit, resetOnSubmit);

  if (!initialized) return null;

  return (
    <Component {...formProps} noValidate onSubmit={handleSubmit} name={name}>
      {children}
    </Component>
  );
};

/**
 * A `Form` is reponsible for wrapping the `Fields` that you want to render. It will keep track
 * of the form state and act as a context/provider for various hooks used within the `Form`'s
 * component tree.
 *
 * Example Usage:
 *
 * ```tsx
 * function UserProfile() {
 *   return (
 *     <Form name="UserProfile" initialValues={{ firstName: "" }}>
 *        <TextField name="firstName" required pattern={/\w+/} as={({ input }) => <input {...input} />} />
 *     </Form>
 *   );
 * }
 * ```
 * @param props {@link FormProps} - The react props for the form component.
 * @typeParam Values {@link FormzValues} - The shape of the forms state i.e. the form data.
 */
const Form = <Values extends FormzValues>(props: WebFormProps<Values>) => {
  const {
    children,
    name,
    initialValues,
    saveDrafts,
    onFormRehydrated = () => {},
    schemaValidator,
    persist = false,
    ...formProps
  } = props;
  const memoizedInitialValues = useStableValue(initialValues);
  const formRehydrationCallback = useStableCallback(onFormRehydrated);

  if (saveDrafts && !name) {
    logger.error(
      `Saving drafts is only supported when a form ` +
        `has a name. Without a name, a randomly generate uuid will be given to the form and that ` +
        `id will be different whenever the app is first loaded.`
    );
  }

  return (
    <FormProvider
      name={name}
      initialValues={memoizedInitialValues}
      saveDrafts={saveDrafts}
      onFormRehydrated={formRehydrationCallback}
      schemaValidator={schemaValidator}
      persist={persist}
    >
      <FormInner name={name} {...formProps}>
        {children}
      </FormInner>
    </FormProvider>
  );
};

/**
 * A form whose state will not be deleted from the store when unmounted.
 * 
 * This is useful for forms that may span multiple pages like wizards
 * or signup forms on mobile devices that might span multiple navigation routes.
 */
 export const PersistedForm = <Values extends FormzValues>({
  ...props
}: React.PropsWithChildren<WebFormProps<Values>>) => {
  return <Form {...props} persist />;
};

export default Form;
