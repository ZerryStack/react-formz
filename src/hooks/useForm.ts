import { useFormz } from "../store";
import { FormzState, FormzValues } from "../types/form";
import useFormId from "./useFormId";
import useFormEvents from "./useFormEvents";

export interface UseFormOptions<Values extends FormzValues> {
  name?: string;
  id?: string;
  initialValues: Values;
}

export interface UseFormResult<Values extends FormzValues> {
  id: string;
  initialValues: Values;
  values: Values;
  handleChange: (eventOrPath: string | React.ChangeEvent<any>) => void;
  initialized: boolean;
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
    initialized: formState?.initialized ?? false
  };
}

export default useForm;
