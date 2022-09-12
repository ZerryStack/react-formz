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

Ƭ **FieldComponentProps**<`Value`, `Key`, `Element`\>: [`BaseFieldComponentProps`](../interfaces/components_Field_Field_types.BaseFieldComponentProps.md)<`Value`, `Key`, `Element`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Value` | extends [`FieldValue`](types_field.md#fieldvalue) = [`FieldValue`](types_field.md#fieldvalue) |
| `Key` | extends [`FieldId`](types_field.md#fieldid) = [`FieldId`](types_field.md#fieldid) |
| `Element` | `HTMLInputElement` |

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:69](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L69)

___

### FieldProps

Ƭ **FieldProps**<`Key`, `Value`, `Element`\>: [`BaseFieldProps`](../interfaces/components_Field_Field_types.BaseFieldProps.md)<`Key`, `Value`, `Element`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | extends [`FieldId`](types_field.md#fieldid) = [`FieldId`](types_field.md#fieldid) |
| `Value` | extends [`FieldValue`](types_field.md#fieldvalue) = [`FieldValue`](types_field.md#fieldvalue) |
| `Element` | `HTMLInputElement` |

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:113](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L113)
