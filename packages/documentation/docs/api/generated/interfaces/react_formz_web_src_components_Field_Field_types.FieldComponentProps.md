---
id: "react_formz_web_src_components_Field_Field_types.FieldComponentProps"
title: "Interface: FieldComponentProps<Value, Key, Ref>"
sidebar_label: "FieldComponentProps"
custom_edit_url: null
---

[react-formz-web/src/components/Field/Field.types](../modules/react_formz_web_src_components_Field_Field_types.md).FieldComponentProps

## Type parameters

| Name | Type |
| :------ | :------ |
| `Value` | extends [`FieldValue`](../modules/react_formz_src_types_field.md#fieldvalue) = [`FieldValue`](../modules/react_formz_src_types_field.md#fieldvalue) |
| `Key` | extends [`FieldId`](../modules/react_formz_src_types_field.md#fieldid) = [`FieldId`](../modules/react_formz_src_types_field.md#fieldid) |
| `Ref` | `HTMLInputElement` |

## Indexable

▪ [key: \`data-${string}\`]: `string` \| `undefined`

## Properties

### actions

• **actions**: [`FieldActions`](react_formz_src_hooks_fields_useFieldActions.FieldActions.md)<`Value`\>

#### Defined in

[packages/react-formz-web/src/components/Field/Field.types.ts:64](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz-web/src/components/Field/Field.types.ts#L64)

___

### children

• `Optional` **children**: `ReactNode`

#### Defined in

[packages/react-formz-web/src/components/Field/Field.types.ts:62](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz-web/src/components/Field/Field.types.ts#L62)

___

### error

• `Optional` **error**: [`FormzError`](../modules/react_formz_src_types_form.md#formzerror)

The react formz error object.

#### Defined in

[packages/react-formz-web/src/components/Field/Field.types.ts:57](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz-web/src/components/Field/Field.types.ts#L57)

___

### input

• **input**: [`FieldInputProps`](react_formz_web_src_components_Field_Field_types.FieldInputProps.md)<`Key`, `Value`\>

#### Defined in

[packages/react-formz-web/src/components/Field/Field.types.ts:53](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz-web/src/components/Field/Field.types.ts#L53)

___

### placeholder

• `Optional` **placeholder**: `string`

#### Defined in

[packages/react-formz-web/src/components/Field/Field.types.ts:63](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz-web/src/components/Field/Field.types.ts#L63)

___

### ref

• `Optional` **ref**: `Ref`<`Ref`\>

#### Defined in

[packages/react-formz-web/src/components/Field/Field.types.ts:52](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz-web/src/components/Field/Field.types.ts#L52)
