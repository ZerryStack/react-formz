---
id: "components_Field_Field_types.BaseFieldComponentProps"
title: "Interface: BaseFieldComponentProps<Value, Key, Ref>"
sidebar_label: "BaseFieldComponentProps"
custom_edit_url: null
---

[components/Field/Field.types](../modules/components_Field_Field_types.md).BaseFieldComponentProps

## Type parameters

| Name | Type |
| :------ | :------ |
| `Value` | extends [`FieldValue`](../modules/types_field.md#fieldvalue) = [`FieldValue`](../modules/types_field.md#fieldvalue) |
| `Key` | extends [`FieldId`](../modules/types_field.md#fieldid) = [`FieldId`](../modules/types_field.md#fieldid) |
| `Ref` | `unknown` |

## Indexable

▪ [key: \`data-${string}\`]: `string` \| `undefined`

## Properties

### actions

• **actions**: [`FieldActions`](hooks_fields_useFieldActions.FieldActions.md)<`Value`\>

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:61](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L61)

___

### children

• `Optional` **children**: `ReactNode`

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:59](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L59)

___

### error

• `Optional` **error**: [`FormzError`](../modules/types_form.md#formzerror)

The react formz error object.

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:53](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L53)

___

### input

• **input**: [`FieldInputProps`](components_Field_Field_types.FieldInputProps.md)<`Key`, `Value`\>

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:49](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L49)

___

### placeholder

• `Optional` **placeholder**: `string`

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:60](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L60)

___

### ref

• `Optional` **ref**: `Ref`<`Ref`\>

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:48](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L48)
