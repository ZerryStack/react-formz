---
id: "react_formz_src_hooks_forms_useFormSubmission"
title: "Module: react-formz/src/hooks/forms/useFormSubmission"
sidebar_label: "react-formz/src/hooks/forms/useFormSubmission"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### useFormSubmission

▸ **useFormSubmission**<`Values`\>(`id`, `onSubmit?`, `resetOnSubmit?`): (`e?`: `FormEvent`<`HTMLFormElement`\>) => `Promise`<`void`\>

Custom hook that returns the submit callback for a form. The callback
will handle running validations, error catching and state management.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Values` | extends [`FormzValues`](react_formz_src_types_form.md#formzvalues) |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `id` | `string` | `undefined` | The id of the form. |
| `onSubmit?` | [`FormSubmitCallback`](react_formz_src_types_form.md#formsubmitcallback)<`Values`\> | `undefined` | The user provided submit callback |
| `resetOnSubmit` | `boolean` | `false` | If true, will reset form state to initialValues after a successful submit. |

#### Returns

`fn`

▸ (`e?`): `Promise`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `FormEvent`<`HTMLFormElement`\> |

##### Returns

`Promise`<`void`\>

#### Defined in

[packages/react-formz/src/hooks/forms/useFormSubmission.ts:15](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/forms/useFormSubmission.ts#L15)
