---
id: "react_formz_src_store_hooks_useMemoizedSelector"
title: "Module: react-formz/src/store/hooks/useMemoizedSelector"
sidebar_label: "react-formz/src/store/hooks/useMemoizedSelector"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### useMemoizedSelector

▸ **useMemoizedSelector**<`Values`, `Selector`\>(`selector`): `Values`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Values` | extends [`FormzValues`](react_formz_src_types_form.md#formzvalues) |
| `Selector` | extends (`state`: [`FormzStore`](../interfaces/react_formz_src_store_store_types.FormzStore.md)) => `Values` = (`state`: [`FormzStore`](../interfaces/react_formz_src_store_store_types.FormzStore.md)) => `Values` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `Selector` |

#### Returns

`Values`

#### Defined in

[packages/react-formz/src/store/hooks/useMemoizedSelector.ts:36](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/store/hooks/useMemoizedSelector.ts#L36)
