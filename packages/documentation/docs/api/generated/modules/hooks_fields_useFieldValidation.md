---
id: "hooks_fields_useFieldValidation"
title: "Module: hooks/fields/useFieldValidation"
sidebar_label: "hooks/fields/useFieldValidation"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [UseFieldValidationOptions](../interfaces/hooks_fields_useFieldValidation.UseFieldValidationOptions.md)

## Functions

### useFieldValidation

▸ **useFieldValidation**<`Key`, `Value`\>(`formId`, `name`, `options`): `Object`

Custom hook that creates a validation api for an input field.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | extends `string` = `string` |
| `Value` | extends [`FieldValue`](types_field.md#fieldvalue) = [`FieldValue`](types_field.md#fieldvalue) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `formId` | `string` | The id of the form. |
| `name` | `Key` | The name of the input field. |
| `options` | [`UseFieldValidationOptions`](../interfaces/hooks_fields_useFieldValidation.UseFieldValidationOptions.md)<`Value`\> | Options to customize the way a field is validated. |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `error` | `undefined` \| [`FormzError`](types_form.md#formzerror) |
| `validate` | () => `Promise`<`boolean`\> |

#### Defined in

[packages/react-formz/src/hooks/fields/useFieldValidation.ts:29](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/fields/useFieldValidation.ts#L29)
