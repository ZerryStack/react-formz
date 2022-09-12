---
id: "components_Form_Form"
title: "Module: components/Form/Form"
sidebar_label: "components/Form/Form"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### Form

▸ **Form**<`Values`\>(`props`): `Element`

A `Form` is reponsible for wrapping the `Fields` that you want to render. It will keep track
of the form state and act as a context/provider for various hooks used within the `Form`'s
component tree. 

Example Usage:

```tsx
function UserProfile() {
  return (
    <Form name="UserProfile" initialValues={{ firstName: "" }}>
       <TextField name="firstName" required pattern={/\w+/} as={({ input }) => <input {...input} />} />
    </Form>
  );
}
```

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Values` | extends [`FormzValues`](types_form.md#formzvalues) | FormzValues - The shape of the forms state i.e. the form data. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | [`FormProps`](../interfaces/components_Form_Form_types.FormProps.md)<`Values`\> | FormProps - The react props for the form component. |

#### Returns

`Element`

#### Defined in

[packages/react-formz/src/components/Form/Form.tsx:52](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Form/Form.tsx#L52)
