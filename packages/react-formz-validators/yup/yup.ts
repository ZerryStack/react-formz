import { FormzErrors, FormzValues, SchemaValidator } from "@zerry/react-formz-core";
import { toNestedErrors } from "@zerry/react-formz-validators-utils";
import * as yup from "yup";
import { ValidateOptions } from "yup/lib/types";

class YupSchemaValidator<
  Values extends FormzValues,
  Schema extends yup.AnyObjectSchema = yup.AnyObjectSchema
> extends SchemaValidator<Values> {
  #schema: Schema;
  #options: ValidateOptions<any>;

  constructor(schema: Schema, options?: ValidateOptions<any>) {
    super();

    this.#schema = schema;
    this.#options = options ?? {};
  }

  public validate = async (values: Values) => {
    try {
      await this.#schema.validate(values, Object.assign({ abortEarly: false }, this.#options));

      return { errors: undefined };
    } catch (e: any) {
      return {
        errors: this.yupErrorsToFormzErrors(e),
      };
    }
  };

  private yupErrorsToFormzErrors = (yupError: yup.ValidationError) => {
    const errors: FormzErrors<Values> = {};

    const yupErrors = yupError.inner.length ? yupError.inner : [yupError];

    for (const error of yupErrors) {
        const { message, type } = error;

        const path = error.path as keyof Values;

        if (path && !errors[path]) {
            errors[path] = { message, type: type ?? "yup" }
        }
    }

    return toNestedErrors(errors);
  };
}

export default YupSchemaValidator;
