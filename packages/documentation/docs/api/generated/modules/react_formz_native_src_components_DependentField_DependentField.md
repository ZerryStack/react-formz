---
id: "react_formz_native_src_components_DependentField_DependentField"
title: "Module: react-formz-native/src/components/DependentField/DependentField"
sidebar_label: "react-formz-native/src/components/DependentField/DependentField"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### DependentField

▸ **DependentField**<`Values`, `Value`, `Key`, `Ref`, `DependentValues`\>(`props`): `Element`

A `DependentField` is a field that depends on the value of another field or fields in
its owner `Form`. The `DependentField` has the exact same interface except with the added
ability to respond to changes in other fields within its parent form.

Example Usage:

```tsx
<DependentField
 name="favoriteDrink"
 dependencies={(values) => ({ dob: values.dob })}
 validate={(_, { dob }) => {
     if (dob <= 21) {
     return "Must be 21 years old"
   }
}}
onDependenciesChange={(dependencies, actions) => {
  if (dependencies.dob <= 21) {
   actions.setValue("N/A");
  }
}}
/>
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Values` | extends [`FormzValues`](react_formz_src_types_form.md#formzvalues) = [`FormzValues`](react_formz_src_types_form.md#formzvalues) |
| `Value` | extends [`FieldValue`](react_formz_src_types_field.md#fieldvalue) = [`FieldValue`](react_formz_src_types_field.md#fieldvalue) |
| `Key` | extends `string` = `string` |
| `Ref` | `HTMLInputElement` |
| `DependentValues` | extends `Partial`<`Values`\> = `Partial`<`Values`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | [`DependentFieldProps`](../interfaces/react_formz_native_src_components_DependentField_DependentField_types.DependentFieldProps.md)<`Values`, `Value`, `Key`, `Ref`, `DependentValues`\> | FieldProps - The react props for the field component. |

#### Returns

`Element`

#### Defined in

[packages/react-formz-native/src/components/DependentField/DependentField.tsx:66](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz-native/src/components/DependentField/DependentField.tsx#L66)
