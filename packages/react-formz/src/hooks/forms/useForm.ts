import { useFormz } from "../../store";
import { FormzErrors, FormzState, FormzValues } from "../../types/form";
import useFormId from "./useFormId";
import useFormEvents from "./useFormEvents";
import { FormzChangeEvent } from "../../types/events";

export interface UseFormOptions<Values extends FormzValues> {
  name?: string;
  id?: string;
  initialValues: Values;
}

export interface UseFormResult<Values extends FormzValues> {
  id: string;
  initialValues: Values;
  values: Values;
  handleChange: (eventOrPath: string | FormzChangeEvent<any>) => void;
  initialized: boolean;
  errors: FormzErrors<Values>;
}

function useForm<Values extends FormzValues>(
  options: UseFormOptions<Values>
): UseFormResult<Values> {
  const id = useFormId(options.name, options.initialValues);
  const formState = useFormz<FormzState<Values> | undefined>(
    (state) => state.forms[id]
  );
  const { handleChange } = useFormEvents(id);

  return {
    id,
    initialValues: options.initialValues,
    values: formState?.values ?? options.initialValues,
    handleChange,
    initialized: formState?.initialized ?? false,
    errors: formState?.errors ?? {}
  };
}

export default useForm;
