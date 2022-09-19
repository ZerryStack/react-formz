---
id: "react_formz_src_store_selectors_makeSelectFieldValue"
title: "Module: react-formz/src/store/selectors/makeSelectFieldValue"
sidebar_label: "react-formz/src/store/selectors/makeSelectFieldValue"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### makeSelectFieldValue

▸ **makeSelectFieldValue**<`Key`, `Values`\>(`id`, `field`): (`state`: [`FormzStore`](../interfaces/react_formz_src_store_store_types.FormzStore.md)) => [`TypeFromPath`](react_formz_src_types_keys.md#typefrompath)<`Values`, `Key`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | extends `string` |
| `Values` | extends [`FormzValues`](react_formz_src_types_form.md#formzvalues) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `field` | `Key` |

#### Returns

`fn`

▸ (`state`): [`TypeFromPath`](react_formz_src_types_keys.md#typefrompath)<`Values`, `Key`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`FormzStore`](../interfaces/react_formz_src_store_store_types.FormzStore.md) |

##### Returns

[`TypeFromPath`](react_formz_src_types_keys.md#typefrompath)<`Values`, `Key`\>

#### Defined in

[packages/react-formz/src/store/selectors/makeSelectFieldValue.ts:5](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/store/selectors/makeSelectFieldValue.ts#L5)
