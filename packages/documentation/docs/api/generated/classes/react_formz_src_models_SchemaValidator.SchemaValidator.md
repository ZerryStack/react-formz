---
id: "react_formz_src_models_SchemaValidator.SchemaValidator"
title: "Class: SchemaValidator<Values>"
sidebar_label: "SchemaValidator"
custom_edit_url: null
---

[react-formz/src/models/SchemaValidator](../modules/react_formz_src_models_SchemaValidator.md).SchemaValidator

## Type parameters

| Name | Type |
| :------ | :------ |
| `Values` | extends [`FormzValues`](../modules/react_formz_src_types_form.md#formzvalues) |

## Constructors

### constructor

• **new SchemaValidator**<`Values`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Values` | extends [`FormzValues`](../modules/react_formz_src_types_form.md#formzvalues) |

## Methods

### validate

▸ **validate**(`_`): `Promise`<[`SchemaValidatorSuccessResult`](../interfaces/react_formz_src_models_SchemaValidator.SchemaValidatorSuccessResult.md) \| [`SchemaValidatorErrorResult`](../interfaces/react_formz_src_models_SchemaValidator.SchemaValidatorErrorResult.md)<`Values`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_` | `Values` |

#### Returns

`Promise`<[`SchemaValidatorSuccessResult`](../interfaces/react_formz_src_models_SchemaValidator.SchemaValidatorSuccessResult.md) \| [`SchemaValidatorErrorResult`](../interfaces/react_formz_src_models_SchemaValidator.SchemaValidatorErrorResult.md)<`Values`\>\>

#### Defined in

[packages/react-formz/src/models/SchemaValidator.ts:15](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/models/SchemaValidator.ts#L15)
