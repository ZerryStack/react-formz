# @zerry/react-formz-validators-yup

Yup validator for @zerry/react-formz to validate form data against a Yup schema.

## Example Usage

```tsx
import { Form, TextField } from "@zerry/react-formz";
import YupSchemaValidator from "@zerry/react-formz-validators-yup";
import * as yup from "yup";

const schema = yup.object({
    name: yup.string().min(5),
});

const schemaValidator = new YupSchemaValidator(schema);

const MyForm = () => {
    return (
        <Form schemaValidator={schemaValidator}>
            <TextField name="name" as={({ input }) => <input {...input} />} />
        </Form>
    );
};
```

