import { useFormz, FormzForm } from "../store";
import { AnyObject } from "../types";
import useFormId from "./useFormId";
import useFormEvents from "./useFormEvents";

export interface UseFormOptions<Values extends AnyObject> {
  name?: string;
  initialValues: Values;
}

export interface UseFormResult<Values extends AnyObject> {
  id: string;
  initialValues: Values;
  values: Values;
  handleChange: (eventOrPath: string | React.ChangeEvent<any>) => void;
}

function useForm<Values extends AnyObject>(
  options: UseFormOptions<Values>
): UseFormResult<Values> {
  const id = useFormId(options.name, options.initialValues);
  const formState = useFormz<FormzForm<Values> | undefined>(
    (state) => state.forms[id]
  );
  const { handleChange } = useFormEvents(id);

  return {
    id,
    initialValues: options.initialValues,
    values: formState?.values ?? options.initialValues,
    handleChange,
  };
}

export default useForm;
