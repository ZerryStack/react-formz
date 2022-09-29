---
id: "react_formz_native_src_hooks_fields_useInternalFieldValue"
title: "Module: react-formz-native/src/hooks/fields/useInternalFieldValue"
sidebar_label: "react-formz-native/src/hooks/fields/useInternalFieldValue"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### useInternalFieldValue

▸ **useInternalFieldValue**<`Value`, `Key`\>(`name`, `field`): `Object`

Custom hook that will optionally mange a fields value internally within the hook
rather than sending the value to the form store. When using array fields, setting the
value on the form store cause the enitre list to re-render on every keystroke
which will cause the keyboard to disappear. 

As a workaround, for fields rendered within an `ArrayField` the value
will be updated using `setState` and then synced to the store **after**
the user finishes typing or submits the form.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Value` | extends [`FieldValue`](react_formz_src_types_field.md#fieldvalue) |
| `Key` | extends `string` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `Key` | The field name |
| `field` | [`UseFieldResult`](../interfaces/react_formz_src_hooks_fields_useField.UseFieldResult.md)<`Value`\> | The result from the `useField` hook. |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `handleBlur` | () => `void` |
| `handleChange` | (`value`: `Value`) => `void` |
| `handleFinishEditing` | () => `void` |
| `value` | `Value` |

#### Defined in

[packages/react-formz-native/src/hooks/fields/useInternalFieldValue.ts:25](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz-native/src/hooks/fields/useInternalFieldValue.ts#L25)
