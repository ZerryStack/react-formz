---
id: "react_formz_src_hooks_forms_useFormHydration"
title: "Module: react-formz/src/hooks/forms/useFormHydration"
sidebar_label: "react-formz/src/hooks/forms/useFormHydration"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### useFormHydration

▸ **useFormHydration**<`Values`\>(`id`, `saveDrafts`, `callback?`): `void`

A custom hook to handle form rehydration and persistance.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Values` | extends [`FormzValues`](react_formz_src_types_form.md#formzvalues) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The id of the form |
| `saveDrafts` | `boolean` | If true, will persist form state when changed |
| `callback?` | [`FormRehydrationCallback`](react_formz_src_types_form.md#formrehydrationcallback)<`Values`\> | Will be called after a form has been rehydrated |

#### Returns

`void`

#### Defined in

[packages/react-formz/src/hooks/forms/useFormHydration.ts:13](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/forms/useFormHydration.ts#L13)
