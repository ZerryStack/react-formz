---
id: "components_DependentField_DependentField"
title: "Module: components/DependentField/DependentField"
sidebar_label: "components/DependentField/DependentField"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### DependentField

▸ **DependentField**<`Values`, `Key`, `Value`, `Element`, `Component`, `DependentValues`\>(`props`): `Element`

A `DependentField` is a field that depends on the value of another field or fields in
its owner `Form`. The `DependentField` has the exact same interface except with the added
ability to respond to changes in other fields within its parent form.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Values` | extends [`FormzValues`](types_form.md#formzvalues) = [`FormzValues`](types_form.md#formzvalues) |
| `Key` | extends `string` = `string` |
| `Value` | extends [`FieldValue`](types_field.md#fieldvalue) = [`FieldValue`](types_field.md#fieldvalue) |
| `Element` | `HTMLInputElement` |
| `Component` | extends `ComponentType`<{}\> = `ComponentType`<{}\> |
| `DependentValues` | extends `Partial`<`Values`\> = `Partial`<`Values`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | [`DependentFieldProps`](components_DependentField_DependentField_types.md#dependentfieldprops)<`Values`, `Key`, `Value`, `Element`, `Component`, `DependentValues`\> | FieldProps - The react props for the field component. |

#### Returns

`Element`

#### Defined in

packages/react-formz/src/components/DependentField/DependentField.tsx:85
