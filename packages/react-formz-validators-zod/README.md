# @zerry/react-formz-validators-zod

Zod validator for @zerry/react-formz to validate form data against a zod schema.

## Example Usage

```tsx
import { Form, TextField } from "@zerry/react-formz";
import ZodSchemaValidator from "@zerry/react-formz-validators-zod";
import zod from "zod";

const schema = zod.object({
    name: zod.string().min(5),
});

const schemaValidator = new ZodSchemaValidator(schema);

const MyForm = () => {
    return (
        <Form schemaValidator={schemaValidator}>
            <TextField name="name" as={({ input }) => <input {...input} />} />
        </Form>
    );
};
```

