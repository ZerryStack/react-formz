import { FormzValues } from "../src";
import SchemaValidator, {
  SchemaValidatorValidate,
} from "../src/models/SchemaValidator";

class TestSchemaValidator<Values extends FormzValues> extends SchemaValidator<Values> {
  #validate: SchemaValidatorValidate<Values>;

  constructor(validate: SchemaValidatorValidate<Values>) {
    super();

    this.#validate = validate;
  }

  public validate = async (values: Values) => {
    return this.#validate(values);
  };
}

export default TestSchemaValidator;
