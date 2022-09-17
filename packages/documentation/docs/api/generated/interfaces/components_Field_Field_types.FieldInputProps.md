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

## Hierarchy

- [`FieldEevents`](hooks_fields_useFieldEvents.FieldEevents.md)<`Value`\>

  ↳ **`FieldInputProps`**

## Properties

### aria-describedby

• **aria-describedby**: `string`

An auto generated id for the form error. If using the `ErrorMessage` component
this id will automatically be applied.

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:40](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L40)

___

### aria-invalid

• `Optional` **aria-invalid**: `boolean`

The aria-invalid state indicates the entered value
does not conform to the format expected by the application.

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:29](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L29)

___

### aria-required

• `Optional` **aria-required**: `boolean`

The aria-required attribute informs assistive technologies about
required controls so that they are appropriately announced to the
users (as opposed to validating the input).

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:35](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L35)

___

### checked

• `Optional` **checked**: `boolean`

This will be a boolean if the `value` type is checkbox.

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:20](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L20)

___

### id

• **id**: `Key`

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:24](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L24)

___

### label

• `Optional` **label**: `string`

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:23](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L23)

___

### name

• **name**: `Key`

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:11](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L11)

___

### onBlur

• **onBlur**: (`event`: `FocusEvent`<`any`, `Element`\>) => `void`

#### Type declaration

▸ (`event`): `void`

The `onBlur` callback should be called when the field loses focuses
i.e. the `onBlur` event is called.

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `FocusEvent`<`any`, `Element`\> |

##### Returns

`void`

#### Inherited from

[FieldEevents](hooks_fields_useFieldEvents.FieldEevents.md).[onBlur](hooks_fields_useFieldEvents.FieldEevents.md#onblur)

#### Defined in

[packages/react-formz/src/hooks/fields/useFieldEvents.ts:21](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/fields/useFieldEvents.ts#L21)

___

### onChange

• **onChange**: [`FormzChangeEventHandler`](types_events.FormzChangeEventHandler.md)<`Value`, `Element`\>

The `onChange` callback should be called when the value of a field
changes. This will update the form state. 

`onChange` has 2 signatures:

1. `onChange(event)`
2. `onChange(value)`

#### Inherited from

[FieldEevents](hooks_fields_useFieldEvents.FieldEevents.md).[onChange](hooks_fields_useFieldEvents.FieldEevents.md#onchange)

#### Defined in

[packages/react-formz/src/hooks/fields/useFieldEvents.ts:16](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/fields/useFieldEvents.ts#L16)

___

### required

• `Optional` **required**: `boolean`

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:22](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L22)

___

### type

• `Optional` **type**: `HTMLInputTypeAttribute`

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:21](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L21)

___

### value

• `Optional` **value**: `Value` extends `boolean` ? `undefined` : `Value`

If the `value` is not a valid value that can be passed to the native html input
the `value` will be undefined. You will then need to use `storeValue` instead.

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:16](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L16)
