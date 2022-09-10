---
id: "components_Field_Field_types"
title: "Module: components/Field/Field.types"
sidebar_label: "components/Field/Field.types"
custom_edit_url: null
---

## Interfaces

- [BaseFieldComponentProps](../interfaces/components_Field_Field_types.BaseFieldComponentProps.md)
- [BaseFieldProps](../interfaces/components_Field_Field_types.BaseFieldProps.md)
- [FieldInputProps](../interfaces/components_Field_Field_types.FieldInputProps.md)

## Type Aliases

### FieldComponentProps

Ƭ **FieldComponentProps**<`Key`, `Value`, `Element`, `Component`\>: [`BaseFieldComponentProps`](../interfaces/components_Field_Field_types.BaseFieldComponentProps.md)<`Key`, `Value`, `Element`\> & `React.ComponentProps`<`Component`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | extends [`FieldId`](types_field.md#fieldid) = [`FieldId`](types_field.md#fieldid) |
| `Value` | extends [`FieldValue`](types_field.md#fieldvalue) = [`FieldValue`](types_field.md#fieldvalue) |
| `Element` | `HTMLInputElement` |
| `Component` | extends `React.ComponentType`<{}\> = `React.ComponentType`<{}\> |

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:70](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L70)

___

### FieldProps

Ƭ **FieldProps**<`Key`, `Value`, `Element`, `Component`\>: [`BaseFieldProps`](../interfaces/components_Field_Field_types.BaseFieldProps.md)<`Key`, `Value`, `Element`\> & `React.ComponentProps`<`Component`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | extends [`FieldId`](types_field.md#fieldid) = [`FieldId`](types_field.md#fieldid) |
| `Value` | extends [`FieldValue`](types_field.md#fieldvalue) = [`FieldValue`](types_field.md#fieldvalue) |
| `Element` | `HTMLInputElement` |
| `Component` | extends `React.ComponentType`<{}\> = `React.ComponentType`<{}\> |

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:105](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L105)
