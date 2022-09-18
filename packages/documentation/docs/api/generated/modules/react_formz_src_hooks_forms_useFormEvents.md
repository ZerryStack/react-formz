---
id: "react_formz_src_hooks_forms_useFormEvents"
title: "Module: react-formz/src/hooks/forms/useFormEvents"
sidebar_label: "react-formz/src/hooks/forms/useFormEvents"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### useFormEvents

▸ **useFormEvents**(`id`): `Object`

Custom react hook that returns event handlers for a forms inputs.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The id of the form to subscribe to. |

#### Returns

`Object`

Event handlers to be used on fields within a form.

| Name | Type |
| :------ | :------ |
| `handleBlur` | (`eventOrPath`: `string` \| [`FormzChangeEvent`](../interfaces/react_formz_src_types_events.FormzChangeEvent.md)<`any`\>) => `void` |
| `handleChange` | (`eventOrPath`: `string` \| [`FormzChangeEvent`](../interfaces/react_formz_src_types_events.FormzChangeEvent.md)<`any`\>) => `void` |

#### Defined in

[packages/react-formz/src/hooks/forms/useFormEvents.ts:15](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/forms/useFormEvents.ts#L15)
