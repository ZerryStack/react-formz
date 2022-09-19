import SchemaValidator from "../../models/SchemaValidator";
import {
  useRegisterSchemaValidator,
  useUnregisterSchemaValidator,
} from "../../store";
import { FormId } from "../../types/form";
import useComponentDidMount from "../utils/useComponentDidMount";

function useRegisterFormSchema(
  id: FormId,
  schemaValidator?: SchemaValidator<any>,
  persist: boolean = false
) {
  const registerSchema = useRegisterSchemaValidator();
  const unregisterSchema = useUnregisterSchemaValidator();

  useComponentDidMount(() => {
    if (schemaValidator) {
      registerSchema(id, schemaValidator);
    }

    return function formUnregisterSchemaValidator() {
      if (!persist) unregisterSchema(id);
    };
  });
}

export default useRegisterFormSchema;
