---
id: "react_formz_web_src_components_Form_Form"
title: "Module: react-formz-web/src/components/Form/Form"
sidebar_label: "react-formz-web/src/components/Form/Form"
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
| `Values` | extends [`FormzValues`](react_formz_src_types_form.md#formzvalues) | FormzValues - The shape of the forms state i.e. the form data. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | [`WebFormProps`](../interfaces/react_formz_web_src_components_Form_Form_types.WebFormProps.md)<`Values`\> | FormProps - The react props for the form component. |

#### Returns

`Element`

#### Defined in

[packages/react-formz-web/src/components/Form/Form.tsx:54](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz-web/src/components/Form/Form.tsx#L54)

___

### PersistedForm

▸ **PersistedForm**<`Values`\>(`__namedParameters`): `Element`

A form whose state will not be deleted from the store when unmounted.

This is useful for forms that may span multiple pages like wizards
or signup forms on mobile devices that might span multiple navigation routes.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Values` | extends [`FormzValues`](react_formz_src_types_form.md#formzvalues) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `PropsWithChildren`<[`WebFormProps`](../interfaces/react_formz_web_src_components_Form_Form_types.WebFormProps.md)<`Values`\>\> |

#### Returns

`Element`

#### Defined in

[packages/react-formz-web/src/components/Form/Form.tsx:98](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz-web/src/components/Form/Form.tsx#L98)
