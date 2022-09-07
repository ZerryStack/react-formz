---
sidebar_position: 1
---

# Field

The goal of React Formz is to make form building feel natural, painless and declarative so the api is designed to be easy-to-use and solve common issues with building forms behind the scenes.

The most basic components of React Formz are `Form` and `Field`. `Form`'s serve as the contextual data and api wrapper for all of its' fields. Fields can be nested to any depth, dynamically rendered and deleted as needed.

```tsx
import { Form, TextField, NumberField, ErrorMessage } from "react-formz";

type FormState = {
  name: string;
  age: number;
};

function MyForm() {
  function handleSubmit(data) {
    apiRequest(data);
  }

  return (
    <Form<FormState>
      initialValues={{
        name: "",
        age: "",
      }}
      name="SimpleForm"
      onSubmit={handleSubmit}
      resetOnSubmit
    >
      <TextField
        name="name"
        label="Name"
        required
        as={({ input: { label, ...input } }) => (
          <>
            <label htmlFor={input.name}>{label}</label>
            <input {...input} />
            <ErrorMessage field={input.name} />
          </>
        )}
      />
      <NumberField
        name="age"
        label="Age"
        required
        min={18}
        max={75}
        as={({ input: { label, ...input } }) => (
          <>
            <label htmlFor={input.name}>{label}</label>
            <input {...input} />
            <ErrorMessage field={input.name} />
          </>
        )}
      />
    </Form>
  );
}
```
