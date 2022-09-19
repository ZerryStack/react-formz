---
id: "react_formz_web_src_hooks_fields_useField"
title: "Module: react-formz-web/src/hooks/fields/useField"
sidebar_label: "react-formz-web/src/hooks/fields/useField"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [UseWebFieldOptions](../interfaces/react_formz_web_src_hooks_fields_useField.UseWebFieldOptions.md)

## Functions

### useWebField

▸ **useWebField**<`Key`, `Value`\>(`name`, `options`): [`UseFieldResult`](../interfaces/react_formz_src_hooks_fields_useField.UseFieldResult.md)<`Value`\>

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
| `options` | [`UseWebFieldOptions`](../interfaces/react_formz_web_src_hooks_fields_useField.UseWebFieldOptions.md)<`Value`\> | — Options to customize behaviour. |

#### Returns

[`UseFieldResult`](../interfaces/react_formz_src_hooks_fields_useField.UseFieldResult.md)<`Value`\>

#### Defined in

[packages/react-formz-web/src/hooks/fields/useField.ts:19](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz-web/src/hooks/fields/useField.ts#L19)
