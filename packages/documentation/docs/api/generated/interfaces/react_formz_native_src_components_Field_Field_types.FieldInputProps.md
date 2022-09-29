---
id: "react_formz_native_src_components_Field_Field_types.FieldInputProps"
title: "Interface: FieldInputProps<Key, Value>"
sidebar_label: "FieldInputProps"
custom_edit_url: null
---

[react-formz-native/src/components/Field/Field.types](../modules/react_formz_native_src_components_Field_Field_types.md).FieldInputProps

## Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | extends [`FieldId`](../modules/react_formz_src_types_field.md#fieldid) = [`FieldId`](../modules/react_formz_src_types_field.md#fieldid) |
| `Value` | extends [`FieldValue`](../modules/react_formz_src_types_field.md#fieldvalue) = [`FieldValue`](../modules/react_formz_src_types_field.md#fieldvalue) |

## Properties

### aria-describedby

• **aria-describedby**: `string`

An auto generated id for the form error. If using the `ErrorMessage` component
this id will automatically be applied.

#### Defined in

[packages/react-formz-native/src/components/Field/Field.types.ts:33](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz-native/src/components/Field/Field.types.ts#L33)

___

### aria-invalid

• `Optional` **aria-invalid**: `boolean`

The aria-invalid state indicates the entered value
does not conform to the format expected by the application.

#### Defined in

[packages/react-formz-native/src/components/Field/Field.types.ts:22](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz-native/src/components/Field/Field.types.ts#L22)

___

### aria-required

• `Optional` **aria-required**: `boolean`

The aria-required attribute informs assistive technologies about
required controls so that they are appropriately announced to the
users (as opposed to validating the input).

#### Defined in

[packages/react-formz-native/src/components/Field/Field.types.ts:28](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz-native/src/components/Field/Field.types.ts#L28)

___

### label

• `Optional` **label**: `string`

#### Defined in

[packages/react-formz-native/src/components/Field/Field.types.ts:16](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz-native/src/components/Field/Field.types.ts#L16)

___

### name

• **name**: `Key`

#### Defined in

[packages/react-formz-native/src/components/Field/Field.types.ts:13](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz-native/src/components/Field/Field.types.ts#L13)

___

### nativeID

• **nativeID**: `Key`

#### Defined in

[packages/react-formz-native/src/components/Field/Field.types.ts:17](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz-native/src/components/Field/Field.types.ts#L17)

___

### onBlur

• **onBlur**: () => `void`

#### Type declaration

▸ (): `void`

The `onBlur` callback should be called when the field loses focuses
i.e. the `onBlur` event is called.

If using a `Field` within an `ArrayField` this calback must be called to synchornize
the values.

##### Returns

`void`

#### Defined in

[packages/react-formz-native/src/components/Field/Field.types.ts:46](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz-native/src/components/Field/Field.types.ts#L46)

___

### onChangeText

• **onChangeText**: (`value`: `Value`) => `void`

#### Type declaration

▸ (`value`): `void`

The `onChange` callback should be called when the value of a field
changes. This will update the form state.

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Value` |

##### Returns

`void`

#### Defined in

[packages/react-formz-native/src/components/Field/Field.types.ts:38](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz-native/src/components/Field/Field.types.ts#L38)

___

### onEndEditing

• **onEndEditing**: () => `void`

#### Type declaration

▸ (): `void`

The `onEndEditing` should be called when the text editing is ended by the user.
If using a `Field` within an `ArrayField` this calback must be called to synchornize
the values.

##### Returns

`void`

#### Defined in

[packages/react-formz-native/src/components/Field/Field.types.ts:52](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz-native/src/components/Field/Field.types.ts#L52)

___

### onSubmitEditing

• **onSubmitEditing**: () => `void`

#### Type declaration

▸ (): `void`

The `onSubmitEditing` should be called when the text editing is ended by the user.
If using a `Field` within an `ArrayField` this calback must be called to synchornize
the values.

##### Returns

`void`

#### Defined in

[packages/react-formz-native/src/components/Field/Field.types.ts:58](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz-native/src/components/Field/Field.types.ts#L58)

___

### required

• `Optional` **required**: `boolean`

#### Defined in

[packages/react-formz-native/src/components/Field/Field.types.ts:15](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz-native/src/components/Field/Field.types.ts#L15)

___

### type

• `Optional` **type**: `string`

#### Defined in

[packages/react-formz-native/src/components/Field/Field.types.ts:14](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz-native/src/components/Field/Field.types.ts#L14)

___

### value

• `Optional` **value**: `Value`

The current value of the input.

#### Defined in

[packages/react-formz-native/src/components/Field/Field.types.ts:62](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz-native/src/components/Field/Field.types.ts#L62)
