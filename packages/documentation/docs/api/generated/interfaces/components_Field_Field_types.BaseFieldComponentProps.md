---
id: "components_Field_Field_types.BaseFieldComponentProps"
title: "Interface: BaseFieldComponentProps<Key, Value, Element>"
sidebar_label: "BaseFieldComponentProps"
custom_edit_url: null
---

[components/Field/Field.types](../modules/components_Field_Field_types.md).BaseFieldComponentProps

## Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | extends [`FieldId`](../modules/types_field.md#fieldid) = [`FieldId`](../modules/types_field.md#fieldid) |
| `Value` | extends [`FieldValue`](../modules/types_field.md#fieldvalue) = [`FieldValue`](../modules/types_field.md#fieldvalue) |
| `Element` | `HTMLInputElement` |

## Indexable

▪ [key: \`data-${string}\`]: `string` \| `undefined`

## Properties

### children

• `Optional` **children**: `ReactNode`

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:58](https://github.com/ZerryStack/react-formz/blob/1bf2d41/packages/react-formz/src/components/Field/Field.types.ts#L58)

___

### error

• `Optional` **error**: [`FormzError`](../modules/types_form.md#formzerror)

The react formz error object.

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:52](https://github.com/ZerryStack/react-formz/blob/1bf2d41/packages/react-formz/src/components/Field/Field.types.ts#L52)

___

### input

• **input**: [`FieldInputProps`](components_Field_Field_types.FieldInputProps.md)<`Key`, `Value`\>

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:43](https://github.com/ZerryStack/react-formz/blob/1bf2d41/packages/react-formz/src/components/Field/Field.types.ts#L43)

___

### ref

• `Optional` **ref**: `Ref`<`Element`\>

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:42](https://github.com/ZerryStack/react-formz/blob/1bf2d41/packages/react-formz/src/components/Field/Field.types.ts#L42)

___

### storeValue

• `Optional` **storeValue**: `Value`

The value of the field in the form data store. This value is useful
for non-native html input values like lists or objects.

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:48](https://github.com/ZerryStack/react-formz/blob/1bf2d41/packages/react-formz/src/components/Field/Field.types.ts#L48)
