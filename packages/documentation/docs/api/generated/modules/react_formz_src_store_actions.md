---
id: "react_formz_src_store_actions"
title: "Module: react-formz/src/store/actions"
sidebar_label: "react-formz/src/store/actions"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### actions

• `Const` **actions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getFieldStoreValue` | <Value\>(`formId`: `string`, `name`: `string`) => `Value` |
| `getFormState` | <Values\>(`id`: `string`) => [`FormzState`](react_formz_src_types_form.md#formzstate)<`Values`\> |
| `incrementFormSubmitCount` | (`id`: `string`) => `void` |
| `resetFieldError` | (`formId`: `string`, `name`: `string`) => `void` |
| `resetFormState` | (`id`: `string`) => `void` |
| `setFieldError` | (`formId`: `string`, `name`: `string`, `error`: [`FormzError`](react_formz_src_types_form.md#formzerror)) => `void` |
| `setFieldTouched` | (`formId`: `string`, `name`: `string`, `touched`: `boolean`) => `void` |
| `setFieldValue` | (`formId`: `string`, `fieldName`: `string`, `value`: [`FieldValue`](react_formz_src_types_field.md#fieldvalue)) => `void` |
| `setFormIsSubmitting` | (`id`: `string`, `isSubmitting`: `boolean`) => `void` |
| `updateFormValue` | <Value\>(`event`: [`FormzChangeEvent`](../interfaces/react_formz_src_types_events.FormzChangeEvent.md)<`any`\>, `id`: `string`, `field`: `string`) => `void`<Value\>(`value`: `Value`, `id`: `string`, `field`: `string`) => `void` |

#### Defined in

[packages/react-formz/src/store/actions/index.ts:12](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/store/actions/index.ts#L12)
