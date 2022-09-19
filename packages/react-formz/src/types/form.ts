import { UseFormOptions } from "../hooks/forms/useForm";
import SchemaValidator from "../models/SchemaValidator";
import { Key, Maybe } from "./common";
import { FieldValue } from "./field";
import { ValidationType } from "./validation";

export type FormId = string;

export type StringKeyOf<T> = Extract<keyof T, string>;

export type AnyKeyedObject = { [key: Key]: any };

export type ValidKey<
  T extends AnyKeyedObject,
  K extends keyof T = keyof T
> = K extends StringKeyOf<T> ? K : never;

export type ValueOf<
  T extends AnyKeyedObject,
  K extends ValidKey<T> = ValidKey<T>
> = K extends never ? never : T[K];

export type FormSubmitCallback<Values extends FormzValues> =
  | ((values: Values, errors: FormzErrors<Values>) => Promise<void>)
  | ((values: Values, errors: FormzErrors<Values>) => void);

/**
 * Type for form state values i.e. the desired data structure of the form.
 */
export type FormzValues = {
  [field: Key]: FieldValue;
};

export type FormzError = {
  type: ValidationType;
  message: Maybe<string>;
};
/**
 * Type for form state errors.
 */
export type FormzErrors<Values extends FormzValues> = {
  [K in keyof Values]?: FormzError;
};

/**
 * Represents form fields that have been "touched" by a user i.e. a
 * focus/blur combination of events has happened at least once.
 */
export type FormzTouched<Values extends FormzValues> = {
  [K in keyof Values]?: boolean;
};

export type FormRehydrationCallback<Values extends FormzValues> = (
  state: FormzState<Values>,
  restoredFromDate: Date | null
) => void;
/**
 * The complete state of a form.
 */
export type FormzState<Values extends FormzValues> = {
  values: Values;
  errors: FormzErrors<Values>;
  touched: FormzTouched<Values>;
  isSubmitting: boolean;
  isValidating: boolean;
  isInvalid: boolean;
  submitCount: number;
  initialized: true;
  saveDrafts: boolean;
  initialValues?: Values;
  lastPersistedAt: Date | null;
  hydrated: boolean;
  restoredFromDate: Date | null;
};

/**
 * The validate function for a form Always returns a boolean
 * but the validator can be async/return a Promise.
 */
export type FormValidator<Values extends FormzValues> =
  | ((values: Values[ValidKey<Values>]) => boolean)
  | ((values: Values[ValidKey<Values>]) => Promise<boolean>);

export interface FormProps<Values extends FormzValues> extends UseFormOptions<Values> {
  children?: React.ReactNode;
  /**
   * A callback that will be called if and when a form is submitted and 
   * the form is not in an invalid state.
   */
  onSubmit?: FormSubmitCallback<Values>;
  /**
   * If true, the form state will reset after a successful submission.
   */
  resetOnSubmit?: boolean;
  /**
   * A callback that will be called after a form has successfully been rehydrated with
   * the locally cached form state from a previous session. You can use this event
   * callback to notify users that the form has been rehydrated.
   * 
   * Example Usage:
   * 
   * ```tsx
   * <Form onFormRehydrated={() => notifyUser("We've restore your form!")} />
   * ```
   */
  onFormRehydrated?: FormRehydrationCallback<Values>;
  /**
   * Validates the form data against a schema. Could be `zod` or `yup` or any custom
   * schema validator.
   */
  schemaValidator?: SchemaValidator<Values>;
  /**
   * If true, a forms state will not be deleted from the store when the form is unmounted.
   * This is useful for forms that might span multiple pages or tabs like a wizard
   * or a signup form on a mobile device.
   */
  persist?: boolean;
}
