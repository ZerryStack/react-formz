---
id: "react_formz_src_hooks_fields_useFieldEvents.FieldEevents"
title: "Interface: FieldEevents<Value>"
sidebar_label: "FieldEevents"
custom_edit_url: null
---

[react-formz/src/hooks/fields/useFieldEvents](../modules/react_formz_src_hooks_fields_useFieldEvents.md).FieldEevents

## Type parameters

| Name | Type |
| :------ | :------ |
| `Value` | extends [`FieldValue`](../modules/react_formz_src_types_field.md#fieldvalue) |

## Hierarchy

- **`FieldEevents`**

  ↳ [`UseFieldResult`](react_formz_src_hooks_fields_useField.UseFieldResult.md)

  ↳ [`FieldInputProps`](react_formz_src_types_field.FieldInputProps.md)

## Properties

### onBlur

• **onBlur**: () => `void`

#### Type declaration

▸ (): `void`

The `onBlur` callback should be called when the field loses focuses
i.e. the `onBlur` event is called.

##### Returns

`void`

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

#### Defined in

[packages/react-formz/src/hooks/fields/useFieldEvents.ts:16](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/fields/useFieldEvents.ts#L16)
