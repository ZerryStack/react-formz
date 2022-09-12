import { SchemaValidator, FormzValues, FormzErrors } from "@zerry/react-formz";
import zod from "zod";

class ZodSchemaValidator<
  Values extends FormzValues,
  Schema extends zod.Schema<any, any> = zod.Schema<any, any>
> extends SchemaValidator<Values> {
  #schema: Schema;

  constructor(schema: Schema) {
    super();

    this.#schema = schema;
  }

  public validate = async (values: FormzValues) => {
    try {
      await this.#schema.parseAsync(values);

      return { errors: undefined };
    } catch (e: any) {
      return {
        errors: this.zodErrorsToFormzErrors(e.errors),
      };
    }
  };

  private zodErrorsToFormzErrors = (
    zodErrors: zod.ZodIssue[]
  ): FormzErrors<Values> => {
    const errors: FormzErrors<Values> = {};

    for (const zodError of zodErrors) {
      const { path } = zodError;
      const pathArray = path.join(".") as keyof Values;

      if (!errors[pathArray]) {
        if ("unionErrors" in zodError) {
          const { message, code } = zodError.unionErrors[0].errors[0];

          errors[pathArray] = {
            message,
            type: code,
          };
        } else {
          const { message, code } = zodError;
          errors[pathArray] = {
            message,
            type: code,
          };
        }
      }
    }

    return errors;
  };
}

export default ZodSchemaValidator;
