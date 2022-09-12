---
id: "components_Field_Field_types.BaseFieldComponentProps"
title: "Interface: BaseFieldComponentProps<Value, Key, Element>"
sidebar_label: "BaseFieldComponentProps"
custom_edit_url: null
---

[components/Field/Field.types](../modules/components_Field_Field_types.md).BaseFieldComponentProps

## Type parameters

| Name | Type |
| :------ | :------ |
| `Value` | extends [`FieldValue`](../modules/types_field.md#fieldvalue) = [`FieldValue`](../modules/types_field.md#fieldvalue) |
| `Key` | extends [`FieldId`](../modules/types_field.md#fieldid) = [`FieldId`](../modules/types_field.md#fieldid) |
| `Element` | `HTMLInputElement` |

## Indexable

▪ [key: \`data-${string}\`]: `string` \| `undefined`

## Properties

### actions

• **actions**: [`FieldActions`](hooks_fields_useFieldActions.FieldActions.md)<`Value`\>

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:66](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L66)

___

### children

• `Optional` **children**: `ReactNode`

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:64](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L64)

___

### error

• `Optional` **error**: [`FormzError`](../modules/types_form.md#formzerror)

The react formz error object.

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:58](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L58)

___

### input

• **input**: [`FieldInputProps`](components_Field_Field_types.FieldInputProps.md)<`Key`, `Value`\>

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:54](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L54)

___

### placeholder

• `Optional` **placeholder**: `string`

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:65](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L65)

___

### ref

• `Optional` **ref**: `Ref`<`Element`\>

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:53](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L53)
