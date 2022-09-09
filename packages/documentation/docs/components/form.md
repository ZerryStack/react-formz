---
sidebar_position: 1
---

# Form

A `Form` is a small wrapper around the html `form` element. The `Form` component is responsible for providing its' component tree
with access to the forms state and methods. `Fields` can **only** be rendered within a `Form`.

You can render a custom component for a form by using the `component` prop. You can view the full api spec of the form [here](/docs/api/form).

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
