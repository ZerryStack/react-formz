---
sidebar_position: 1
---

# Array Field

An `ArrayField` is used to manage state contained in an array such as an array of friends that a user can add or remove. Just like a `Field` you can render your own user interface using the `as` property of a `Field`.

The difference between a `Field` and an `ArrayField` are that the custom component prop that you pass in will recieve a `values` propery instead of a single `value` property. The `values` will contain an array of values in the state for that particular field.

The example below demonstrates a simple use case with an array field.

You can view the full api spec of the `ArrayField` [here](/docs/api/array-field).

```tsx
import { Form, ArrayField, ErrorMessage } from "@zerry/react-formz";

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
        friends: [{ name: "John Smith" }],
      }}
      name="SimpleForm"
      onSubmit={handleSubmit}
      resetOnSubmit
    >
      <ArrayField<{ name: string }>
        name="friends"
        render={({ values, arrayHelpers }) => {
          return (
            <div>
              <button onClick={() => arrayHelpers.add({ name: "" })}>
                Add New User
              </button>
              {values.map((_, index) => {
                return (
                  <TextField
                    key={index}
                    name={`friends.${index}[hey]`}
                    label="Friend"
                    required
                    as={({ input: { label, ...input } }) => (
                      <>
                        <label htmlFor={input.name}>{label}</label>
                        <input {...input} />
                        <ErrorMessage field={input.name} />
                      </>
                    )}
                  />
                );
              })}
            </div>
          );
        }}
      />
    </Form>
  );
}
```
