---
id: "react_formz_src_store_hooks_useFieldValue"
title: "Module: react-formz/src/store/hooks/useFieldValue"
sidebar_label: "react-formz/src/store/hooks/useFieldValue"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### useFieldValue

▸ **useFieldValue**<`Key`, `Values`\>(`formId`, `fieldId`): [`TypeFromPath`](react_formz_src_types_keys.md#typefrompath)<`Values`, `Key`\>

Returns the store value for a field.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | extends `string` = `string` |
| `Values` | extends [`FormzValues`](react_formz_src_types_form.md#formzvalues) = [`FormzValues`](react_formz_src_types_form.md#formzvalues) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `formId` | `string` |
| `fieldId` | `Key` |

#### Returns

[`TypeFromPath`](react_formz_src_types_keys.md#typefrompath)<`Values`, `Key`\>

#### Defined in

[packages/react-formz/src/store/hooks/useFieldValue.ts:10](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/store/hooks/useFieldValue.ts#L10)
