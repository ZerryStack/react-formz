---
id: "react_formz_web_src_components_Field_Field"
title: "Module: react-formz-web/src/components/Field/Field"
sidebar_label: "react-formz-web/src/components/Field/Field"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### Field

▸ **Field**<`Value`, `Key`, `Ref`\>(`props`): `Element`

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
| `Value` | extends [`FieldValue`](react_formz_src_types_field.md#fieldvalue) = [`FieldValue`](react_formz_src_types_field.md#fieldvalue) |
| `Key` | extends `string` = `string` |
| `Ref` | `HTMLInputElement` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | [`WebFieldProps`](../interfaces/react_formz_web_src_components_Field_Field_types.WebFieldProps.md)<`Value`, `Key`, `Ref`\> | FieldProps - The react props for the field component. |

#### Returns

`Element`

#### Defined in

[packages/react-formz-web/src/components/Field/Field.tsx:93](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz-web/src/components/Field/Field.tsx#L93)
