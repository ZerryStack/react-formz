---
id: "react_formz_src_hooks_forms_useFormId"
title: "Module: react-formz/src/hooks/forms/useFormId"
sidebar_label: "react-formz/src/hooks/forms/useFormId"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### useFormId

▸ **useFormId**<`Values`\>(`name?`, `initialValues`, `existingId?`, `saveDrafts?`, `persist?`): `string`

Creates a unique id for a form and adds that id to the form store.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Values` | extends [`FormzValues`](react_formz_src_types_form.md#formzvalues) |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | `undefined` \| `string` | `undefined` | The form name. |
| `initialValues` | `Values` | `undefined` | The initial values for the form. |
| `existingId` | `undefined` \| `string` | `undefined` | An existingId for the form if the id was already generated by another actor. |
| `saveDrafts` | `boolean` | `false` | If true, drafts will  be saved to local storage |
| `persist` | `boolean` | `false` | If true, a forms state will not be removed from the store when unmounted. |

#### Returns

`string`

#### Defined in

[packages/react-formz/src/hooks/forms/useFormId.ts:16](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/forms/useFormId.ts#L16)
