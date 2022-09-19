import { useFormz } from "../../store";
import {
  FormRehydrationCallback,
  FormzErrors,
  FormzState,
  FormzValues,
} from "../../types/form";
import useFormId from "./useFormId";
import SchemaValidator from "../../models/SchemaValidator";
import useRegisterFormSchema from "./useRegisterFormSchema";

export interface UseFormOptions<Values extends FormzValues> {
  /**
   * A unique name for the form. If `saveDrafts` is enabled, a name is required.
   */
  name?: string;
  id?: string;
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
  onFormRehydrated?: FormRehydrationCallback<Values>;
  schemaValidator?: SchemaValidator<Values>;
  persist?: boolean;
}

export interface UseFormResult<Values extends FormzValues> {
  id: string;
  initialValues: Values;
  values: Values;
  initialized: boolean;
  errors: FormzErrors<Values>;
}

function useForm<Values extends FormzValues>(
  options: UseFormOptions<Values>
): UseFormResult<Values> {
  const id = useFormId(
    options.name,
    options.initialValues,
    options.id,
    options.saveDrafts ?? false,
    options.persist ?? false
  );
  const formState = useFormz<FormzState<Values> | undefined>(
    (state) => state.forms[id]
  );

  useRegisterFormSchema(id, options.schemaValidator, options.persist ?? false);

  return {
    id,
    initialValues: options.initialValues,
    values: formState?.values ?? options.initialValues,
    initialized: formState?.initialized ?? false,
    errors: formState?.errors ?? {},
  };
}

export default useForm;
