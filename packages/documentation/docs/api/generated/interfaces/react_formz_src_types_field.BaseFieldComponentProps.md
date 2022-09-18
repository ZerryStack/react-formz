---
id: "react_formz_src_types_field.BaseFieldComponentProps"
title: "Interface: BaseFieldComponentProps<Value, Key, Ref>"
sidebar_label: "BaseFieldComponentProps"
custom_edit_url: null
---

[react-formz/src/types/field](../modules/react_formz_src_types_field.md).BaseFieldComponentProps

## Type parameters

| Name | Type |
| :------ | :------ |
| `Value` | extends [`FieldValue`](../modules/react_formz_src_types_field.md#fieldvalue) = [`FieldValue`](../modules/react_formz_src_types_field.md#fieldvalue) |
| `Key` | extends [`FieldId`](../modules/react_formz_src_types_field.md#fieldid) = [`FieldId`](../modules/react_formz_src_types_field.md#fieldid) |
| `Ref` | `unknown` |

## Indexable

▪ [key: \`data-${string}\`]: `string` \| `undefined`

## Properties

### actions

• **actions**: [`FieldActions`](react_formz_src_hooks_fields_useFieldActions.FieldActions.md)<`Value`\>

#### Defined in

[packages/react-formz/src/types/field.ts:103](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L103)

___

### children

• `Optional` **children**: `ReactNode`

#### Defined in

[packages/react-formz/src/types/field.ts:101](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L101)

___

### error

• `Optional` **error**: [`FormzError`](../modules/react_formz_src_types_form.md#formzerror)

The react formz error object.

#### Defined in

[packages/react-formz/src/types/field.ts:95](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L95)

___

### input

• **input**: [`FieldInputProps`](react_formz_src_types_field.FieldInputProps.md)<`Key`, `Value`\>

#### Defined in

[packages/react-formz/src/types/field.ts:91](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L91)

___

### placeholder

• `Optional` **placeholder**: `string`

#### Defined in

[packages/react-formz/src/types/field.ts:102](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L102)

___

### ref

• `Optional` **ref**: `Ref`<`Ref`\>

#### Defined in

[packages/react-formz/src/types/field.ts:90](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L90)
