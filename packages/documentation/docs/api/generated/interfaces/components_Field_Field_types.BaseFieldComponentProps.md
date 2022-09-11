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

### actions

• **actions**: [`FieldActions`](hooks_fields_useFieldActions.FieldActions.md)<`Value`\>

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:72](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L72)

___

### children

• `Optional` **children**: `ReactNode`

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:70](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L70)

___

### error

• `Optional` **error**: [`FormzError`](../modules/types_form.md#formzerror)

The react formz error object.

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:64](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L64)

___

### input

• **input**: [`FieldInputProps`](components_Field_Field_types.FieldInputProps.md)<`Key`, `Value`\>

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:55](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L55)

___

### placeholder

• `Optional` **placeholder**: `string`

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:71](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L71)

___

### ref

• `Optional` **ref**: `Ref`<`Element`\>

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:54](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L54)

___

### storeValue

• `Optional` **storeValue**: `Value`

The value of the field in the form data store. This value is useful
for non-native html input values like lists or objects.

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:60](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L60)
