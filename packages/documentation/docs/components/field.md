---
sidebar_position: 1
---

# Field

A `Field` is responsible for consuming a slice of data from its' parent form's state. A `Field` essentially *owns* that slice of data
although other `Field`'s can subscribe and mutate that data if needed. The goal of the `Field` component is to abstract away all of the complexities of dealing with form inputs including:

- Validation
- Error Management
- Focus Management
- Accessibility

## User Interface

By default a `Field` just renders a single html `input` however for most projects you will probably want to render your own user interface. You can render your own user interface using the `as` property of a `Field`.

The example below shows a custom component being rendered. The component you pass in will recieve several props that you can use to display information related to the field:

- error - The error if there is one
- input - Props belonging to the html input
- actions - An object that contains functions that you can use to interact with a fields state

You can view the full api spec of the `field` [here](/docs/api/field).

```tsx
import { Form, TextField, NumberField, ErrorMessage } from "@zerry/react-formz";

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
