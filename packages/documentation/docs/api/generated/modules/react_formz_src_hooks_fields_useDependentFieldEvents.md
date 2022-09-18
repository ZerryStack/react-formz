---
id: "react_formz_src_hooks_fields_useDependentFieldEvents"
title: "Module: react-formz/src/hooks/fields/useDependentFieldEvents"
sidebar_label: "react-formz/src/hooks/fields/useDependentFieldEvents"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [UseDependentFieldEventsOptions](../interfaces/react_formz_src_hooks_fields_useDependentFieldEvents.UseDependentFieldEventsOptions.md)

## Functions

### useDependentFieldEvents

▸ **useDependentFieldEvents**<`Values`, `Value`, `DependentValues`, `Key`\>(`name`, `options`): `Object`

React hook for customizing a fields validate function to accept a set of 
dependencies as a second option. In addition, allows for a callback to specified
that will be called when the dependencies change.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Values` | extends [`FormzValues`](react_formz_src_types_form.md#formzvalues) = [`FormzValues`](react_formz_src_types_form.md#formzvalues) |
| `Value` | extends [`FieldValue`](react_formz_src_types_field.md#fieldvalue) = [`FieldValue`](react_formz_src_types_field.md#fieldvalue) |
| `DependentValues` | extends `Partial`<`Values`\> = `Partial`<`Values`\> |
| `Key` | extends `string` = `string` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `Key` | The id/name of the field. |
| `options` | [`UseDependentFieldEventsOptions`](../interfaces/react_formz_src_hooks_fields_useDependentFieldEvents.UseDependentFieldEventsOptions.md)<`Values`, `Value`, `DependentValues`\> | Hook options |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `validate` | [`FieldValidator`](react_formz_src_types_field.md#fieldvalidator)<`Value`\> |

#### Defined in

[packages/react-formz/src/hooks/fields/useDependentFieldEvents.ts:48](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/fields/useDependentFieldEvents.ts#L48)
