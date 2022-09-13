import { FormzErrors, FormzValues } from "../types/form";

export interface SchemaValidatorSuccessResult {
  errors: undefined;
}

export interface SchemaValidatorErrorResult<Values extends FormzValues> {
  errors: FormzErrors<Values>;
}

export interface SchemaValidatorValidate<Values extends FormzValues> {
    (values: Values): Promise<SchemaValidatorErrorResult<Values> | SchemaValidatorSuccessResult>;
}
class SchemaValidator<Values extends FormzValues> {
  public validate = async (
    _: Values
  ): Promise<SchemaValidatorErrorResult<Values> | SchemaValidatorSuccessResult> => {
    throw new Error("No implementation specified for validate");
  };
}

export default SchemaValidator;
