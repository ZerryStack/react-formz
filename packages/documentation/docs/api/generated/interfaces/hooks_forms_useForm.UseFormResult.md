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

[packages/react-formz/src/hooks/forms/useForm.ts:43](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/forms/useForm.ts#L43)

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

[packages/react-formz/src/hooks/forms/useForm.ts:41](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/forms/useForm.ts#L41)

___

### id

• **id**: `string`

#### Defined in

[packages/react-formz/src/hooks/forms/useForm.ts:38](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/forms/useForm.ts#L38)

___

### initialValues

• **initialValues**: `Values`

#### Defined in

[packages/react-formz/src/hooks/forms/useForm.ts:39](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/forms/useForm.ts#L39)

___

### initialized

• **initialized**: `boolean`

#### Defined in

[packages/react-formz/src/hooks/forms/useForm.ts:42](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/forms/useForm.ts#L42)

___

### values

• **values**: `Values`

#### Defined in

[packages/react-formz/src/hooks/forms/useForm.ts:40](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/forms/useForm.ts#L40)
