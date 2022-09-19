---
id: "react_formz_src_hooks_fields_useField.UseFieldResult"
title: "Interface: UseFieldResult<Value>"
sidebar_label: "UseFieldResult"
custom_edit_url: null
---

[react-formz/src/hooks/fields/useField](../modules/react_formz_src_hooks_fields_useField.md).UseFieldResult

## Type parameters

| Name | Type |
| :------ | :------ |
| `Value` | extends [`FieldValue`](../modules/react_formz_src_types_field.md#fieldvalue) |

## Hierarchy

- [`FieldEvents`](react_formz_src_hooks_fields_useFieldEvents.FieldEvents.md)<`Value`\>

  ↳ **`UseFieldResult`**

## Properties

### actions

• **actions**: [`FieldActions`](react_formz_src_hooks_fields_useFieldActions.FieldActions.md)<`Value`\>

#### Defined in

[packages/react-formz/src/hooks/fields/useField.ts:24](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/fields/useField.ts#L24)

___

### checked

• `Optional` **checked**: `boolean`

#### Defined in

[packages/react-formz/src/hooks/fields/useField.ts:22](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/fields/useField.ts#L22)

___

### error

• **error**: `undefined` \| [`FormzError`](../modules/react_formz_src_types_form.md#formzerror)

#### Defined in

[packages/react-formz/src/hooks/fields/useField.ts:21](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/fields/useField.ts#L21)

___

### formId

• **formId**: `string`

#### Defined in

[packages/react-formz/src/hooks/fields/useField.ts:23](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/fields/useField.ts#L23)

___

### onBlur

• **onBlur**: () => `void`

#### Type declaration

▸ (): `void`

The `onBlur` callback should be called when the field loses focuses
i.e. the `onBlur` event is called.

##### Returns

`void`

#### Inherited from

[FieldEvents](react_formz_src_hooks_fields_useFieldEvents.FieldEvents.md).[onBlur](react_formz_src_hooks_fields_useFieldEvents.FieldEvents.md#onblur)

#### Defined in

[packages/react-formz/src/hooks/fields/useFieldEvents.ts:21](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/fields/useFieldEvents.ts#L21)

___

### onChange

• **onChange**: [`FormzChangeEventHandler`](react_formz_src_types_events.FormzChangeEventHandler.md)<`Value`, `Element`\>

The `onChange` callback should be called when the value of a field
changes. This will update the form state. 

`onChange` has 2 signatures:

1. `onChange(event)`
2. `onChange(value)`

#### Inherited from

[FieldEvents](react_formz_src_hooks_fields_useFieldEvents.FieldEvents.md).[onChange](react_formz_src_hooks_fields_useFieldEvents.FieldEvents.md#onchange)

#### Defined in

[packages/react-formz/src/hooks/fields/useFieldEvents.ts:16](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/fields/useFieldEvents.ts#L16)

___

### value

• **value**: `Value`

#### Defined in

[packages/react-formz/src/hooks/fields/useField.ts:20](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/fields/useField.ts#L20)
