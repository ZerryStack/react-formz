---
id: "hooks_forms_useForm.UseFormResult"
title: "Interface: UseFormResult<Values>"
sidebar_label: "UseFormResult"
custom_edit_url: null
---

[hooks/forms/useForm](../modules/hooks_forms_useForm.md).UseFormResult

## Type parameters

| Name | Type |
| :------ | :------ |
| `Values` | extends [`FormzValues`](../modules/types_form.md#formzvalues) |

## Properties

### errors

• **errors**: [`FormzErrors`](../modules/types_form.md#formzerrors)<`Values`\>

#### Defined in

[packages/react-formz/src/hooks/forms/useForm.ts:21](https://github.com/ZerryStack/react-formz/blob/1bf2d41/packages/react-formz/src/hooks/forms/useForm.ts#L21)

___

### handleChange

• **handleChange**: (`eventOrPath`: `string` \| [`FormzChangeEvent`](types_events.FormzChangeEvent.md)<`any`\>) => `void`

#### Type declaration

▸ (`eventOrPath`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `eventOrPath` | `string` \| [`FormzChangeEvent`](types_events.FormzChangeEvent.md)<`any`\> |

##### Returns

`void`

#### Defined in

[packages/react-formz/src/hooks/forms/useForm.ts:19](https://github.com/ZerryStack/react-formz/blob/1bf2d41/packages/react-formz/src/hooks/forms/useForm.ts#L19)

___

### id

• **id**: `string`

#### Defined in

[packages/react-formz/src/hooks/forms/useForm.ts:16](https://github.com/ZerryStack/react-formz/blob/1bf2d41/packages/react-formz/src/hooks/forms/useForm.ts#L16)

___

### initialValues

• **initialValues**: `Values`

#### Defined in

[packages/react-formz/src/hooks/forms/useForm.ts:17](https://github.com/ZerryStack/react-formz/blob/1bf2d41/packages/react-formz/src/hooks/forms/useForm.ts#L17)

___

### initialized

• **initialized**: `boolean`

#### Defined in

[packages/react-formz/src/hooks/forms/useForm.ts:20](https://github.com/ZerryStack/react-formz/blob/1bf2d41/packages/react-formz/src/hooks/forms/useForm.ts#L20)

___

### values

• **values**: `Values`

#### Defined in

[packages/react-formz/src/hooks/forms/useForm.ts:18](https://github.com/ZerryStack/react-formz/blob/1bf2d41/packages/react-formz/src/hooks/forms/useForm.ts#L18)
