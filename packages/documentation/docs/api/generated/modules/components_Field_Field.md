---
id: "components_Field_Field"
title: "Module: components/Field/Field"
sidebar_label: "components/Field/Field"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### Field

▸ **Field**<`Key`, `Value`, `Element`\>(`props`): `Element`

A `Field` is a consumer of some data in its' parent `Form`. The user interface of a `Field`
is completely determined by you, the developer. This component abstracts away all of the
complexities of dealing with inputs, values, events, and validations.

```tsx
function UserProfile() {
  return (
    <Form name="UserProfile" initialValues={{ firstName: "" }}>
       <Field name="firstName" type="text" required pattern={/\w+/} as={({ input }) => <input {...input} />} />
    </Form>
  );
}
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | extends `string` = `string` |
| `Value` | extends [`FieldValue`](types_field.md#fieldvalue) = [`FieldValue`](types_field.md#fieldvalue) |
| `Element` | `HTMLInputElement` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | [`FieldProps`](components_Field_Field_types.md#fieldprops)<`Key`, `Value`, `Element`\> | FieldProps - The react props for the field component. |

#### Returns

`Element`

#### Defined in

[packages/react-formz/src/components/Field/Field.tsx:94](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.tsx#L94)
