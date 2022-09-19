---
id: "react_formz_native_src_components_Field_Field_types.FieldComponentProps"
title: "Interface: FieldComponentProps<Value, Key, Ref>"
sidebar_label: "FieldComponentProps"
custom_edit_url: null
---

[react-formz-native/src/components/Field/Field.types](../modules/react_formz_native_src_components_Field_Field_types.md).FieldComponentProps

## Type parameters

| Name | Type |
| :------ | :------ |
| `Value` | extends [`FieldValue`](../modules/react_formz_src_types_field.md#fieldvalue) = [`FieldValue`](../modules/react_formz_src_types_field.md#fieldvalue) |
| `Key` | extends [`FieldId`](../modules/react_formz_src_types_field.md#fieldid) = [`FieldId`](../modules/react_formz_src_types_field.md#fieldid) |
| `Ref` | `TextInput` |

## Indexable

▪ [key: \`data-${string}\`]: `string` \| `undefined`

## Properties

### actions

• **actions**: [`FieldActions`](react_formz_src_hooks_fields_useFieldActions.FieldActions.md)<`Value`\>

#### Defined in

[packages/react-formz-native/src/components/Field/Field.types.ts:82](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz-native/src/components/Field/Field.types.ts#L82)

___

### children

• `Optional` **children**: `ReactNode`

#### Defined in

[packages/react-formz-native/src/components/Field/Field.types.ts:80](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz-native/src/components/Field/Field.types.ts#L80)

___

### error

• `Optional` **error**: [`FormzError`](../modules/react_formz_src_types_form.md#formzerror)

The react formz error object.

#### Defined in

[packages/react-formz-native/src/components/Field/Field.types.ts:75](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz-native/src/components/Field/Field.types.ts#L75)

___

### input

• **input**: [`FieldInputProps`](react_formz_native_src_components_Field_Field_types.FieldInputProps.md)<`Key`, `Value`\>

#### Defined in

[packages/react-formz-native/src/components/Field/Field.types.ts:71](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz-native/src/components/Field/Field.types.ts#L71)

___

### placeholder

• `Optional` **placeholder**: `string`

#### Defined in

[packages/react-formz-native/src/components/Field/Field.types.ts:81](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz-native/src/components/Field/Field.types.ts#L81)

___

### ref

• `Optional` **ref**: `Ref`<`Ref`\>

#### Defined in

[packages/react-formz-native/src/components/Field/Field.types.ts:70](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz-native/src/components/Field/Field.types.ts#L70)
