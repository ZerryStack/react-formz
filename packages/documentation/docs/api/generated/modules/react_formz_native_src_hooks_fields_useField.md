---
id: "react_formz_native_src_hooks_fields_useField"
title: "Module: react-formz-native/src/hooks/fields/useField"
sidebar_label: "react-formz-native/src/hooks/fields/useField"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [UseNativeFieldOptions](../interfaces/react_formz_native_src_hooks_fields_useField.UseNativeFieldOptions.md)

## Functions

### useNativeField

▸ **useNativeField**<`Key`, `Value`\>(`name`, `options`): [`UseFieldResult`](../interfaces/react_formz_src_hooks_fields_useField.UseFieldResult.md)<`Value`\>

Custom hook to plugin to the state of a specific input field. You can use this to build your own input primitives if you so desire.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | extends `string` = `string` |
| `Value` | extends [`FieldValue`](react_formz_src_types_field.md#fieldvalue) = [`FieldValue`](react_formz_src_types_field.md#fieldvalue) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `Key` | — The name of the input field. |
| `options` | [`UseNativeFieldOptions`](../interfaces/react_formz_native_src_hooks_fields_useField.UseNativeFieldOptions.md)<`Value`\> | — Options to customize behaviour. |

#### Returns

[`UseFieldResult`](../interfaces/react_formz_src_hooks_fields_useField.UseFieldResult.md)<`Value`\>

#### Defined in

[packages/react-formz-native/src/hooks/fields/useField.ts:19](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz-native/src/hooks/fields/useField.ts#L19)
