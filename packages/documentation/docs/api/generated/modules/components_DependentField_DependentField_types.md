---
id: "components_DependentField_DependentField_types"
title: "Module: components/DependentField/DependentField.types"
sidebar_label: "components/DependentField/DependentField.types"
custom_edit_url: null
---

## Interfaces

- [BaseDependentFieldProps](../interfaces/components_DependentField_DependentField_types.BaseDependentFieldProps.md)

## Type Aliases

### DependentFieldProps

Ƭ **DependentFieldProps**<`Values`, `Value`, `Key`, `Element`, `DependentValues`\>: [`BaseDependentFieldProps`](../interfaces/components_DependentField_DependentField_types.BaseDependentFieldProps.md)<`Values`, `Value`, `Key`, `Element`, `DependentValues`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Values` | extends [`FormzValues`](types_form.md#formzvalues) = [`FormzValues`](types_form.md#formzvalues) |
| `Value` | extends [`FieldValue`](types_field.md#fieldvalue) = [`FieldValue`](types_field.md#fieldvalue) |
| `Key` | extends [`FieldId`](types_field.md#fieldid) = [`FieldId`](types_field.md#fieldid) |
| `Element` | `HTMLInputElement` |
| `DependentValues` | extends `Partial`<`Values`\> = `Partial`<`Values`\> |

#### Defined in

[packages/react-formz/src/components/DependentField/DependentField.types.ts:32](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/DependentField/DependentField.types.ts#L32)
