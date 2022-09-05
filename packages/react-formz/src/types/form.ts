import { Key, Maybe } from "./common";
import { FieldValue } from "./field";
import { ValidationType } from "./validation";


export type StringKeyOf<T> = Extract<keyof T, string>;

export type AnyKeyedObject = { [key: Key]: any };

export type ValidKey<T extends AnyKeyedObject, K extends keyof T = keyof T> =
  K extends StringKeyOf<T> ? K : never;

export type ValueOf<
  T extends AnyKeyedObject,
  K extends ValidKey<T> = ValidKey<T>
> = K extends never ? never : T[K];

/**
 * Type for form state values i.e. the desired data structure of the form.
 */
export type FormzValues = {
  [field: Key]: FieldValue;
};

export type FormzError = {
  type: ValidationType;
  message: Maybe<string>;
}
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
};

/**
 * The validate function for a form Always returns a boolean
 * but the validator can be async/return a Promise.
 */
export type FormValidator<Values extends FormzValues> =
  | ((values: Values[ValidKey<Values>]) => boolean)
  | ((values: Values[ValidKey<Values>]) => Promise<boolean>);


