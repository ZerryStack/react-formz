---
id: "react_formz_src_hooks_forms_useValidateFormSchema"
title: "Module: react-formz/src/hooks/forms/useValidateFormSchema"
sidebar_label: "react-formz/src/hooks/forms/useValidateFormSchema"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### useValidateFormSchema

▸ **useValidateFormSchema**<`Values`\>(`formId`): () => `Promise`<`boolean`\>

Custom hook to return a function that validates a form using an instance of a schema validator.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Values` | extends [`FormzValues`](react_formz_src_types_form.md#formzvalues) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `formId` | `string` | The id of the form. |

#### Returns

`fn`

▸ (): `Promise`<`boolean`\>

##### Returns

`Promise`<`boolean`\>

#### Defined in

[packages/react-formz/src/hooks/forms/useValidateFormSchema.ts:9](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/forms/useValidateFormSchema.ts#L9)
