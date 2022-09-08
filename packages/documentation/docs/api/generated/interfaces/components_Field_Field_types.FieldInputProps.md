---
id: "components_Field_Field_types.FieldInputProps"
title: "Interface: FieldInputProps<Key, Value>"
sidebar_label: "FieldInputProps"
custom_edit_url: null
---

[components/Field/Field.types](../modules/components_Field_Field_types.md).FieldInputProps

## Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | extends [`FieldId`](../modules/types_field.md#fieldid) = [`FieldId`](../modules/types_field.md#fieldid) |
| `Value` | extends [`FieldValue`](../modules/types_field.md#fieldvalue) = [`FieldValue`](../modules/types_field.md#fieldvalue) |

## Properties

### aria-invalid

• `Optional` **aria-invalid**: `boolean`

The aria-invalid state indicates the entered value
does not conform to the format expected by the application.

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:28](https://github.com/ZerryStack/react-formz/blob/1bf2d41/packages/react-formz/src/components/Field/Field.types.ts#L28)

___

### aria-required

• `Optional` **aria-required**: `boolean`

The aria-required attribute informs assistive technologies about
required controls so that they are appropriately announced to the
users (as opposed to validating the input).

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:34](https://github.com/ZerryStack/react-formz/blob/1bf2d41/packages/react-formz/src/components/Field/Field.types.ts#L34)

___

### checked

• `Optional` **checked**: `boolean`

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:19](https://github.com/ZerryStack/react-formz/blob/1bf2d41/packages/react-formz/src/components/Field/Field.types.ts#L19)

___

### label

• `Optional` **label**: `string`

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:23](https://github.com/ZerryStack/react-formz/blob/1bf2d41/packages/react-formz/src/components/Field/Field.types.ts#L23)

___

### name

• **name**: `Key`

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:16](https://github.com/ZerryStack/react-formz/blob/1bf2d41/packages/react-formz/src/components/Field/Field.types.ts#L16)

___

### onBlur

• **onBlur**: `FocusEventHandler`<`Element`\>

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:21](https://github.com/ZerryStack/react-formz/blob/1bf2d41/packages/react-formz/src/components/Field/Field.types.ts#L21)

___

### onChange

• **onChange**: [`FormzChangeEventHandler`](../modules/types_events.md#formzchangeeventhandler)<`any`\>

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:17](https://github.com/ZerryStack/react-formz/blob/1bf2d41/packages/react-formz/src/components/Field/Field.types.ts#L17)

___

### required

• `Optional` **required**: `boolean`

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:22](https://github.com/ZerryStack/react-formz/blob/1bf2d41/packages/react-formz/src/components/Field/Field.types.ts#L22)

___

### type

• `Optional` **type**: `HTMLInputTypeAttribute`

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:20](https://github.com/ZerryStack/react-formz/blob/1bf2d41/packages/react-formz/src/components/Field/Field.types.ts#L20)

___

### value

• `Optional` **value**: `Exclude`<`Value`, ``null`` \| `boolean` \| `any`[] \| [`AnyObject`](../modules/types_common.md#anyobject)\>

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:18](https://github.com/ZerryStack/react-formz/blob/1bf2d41/packages/react-formz/src/components/Field/Field.types.ts#L18)
