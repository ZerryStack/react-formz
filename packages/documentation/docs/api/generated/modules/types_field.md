---
id: "types_field"
title: "Module: types/field"
sidebar_label: "types/field"
sidebar_position: 0
custom_edit_url: null
---

## Type Aliases

### FieldElement

Ƭ **FieldElement**: `HTMLInputElement` \| `HTMLSelectElement` \| `HTMLTextAreaElement`

#### Defined in

[packages/react-formz/src/types/field.ts:19](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L19)

___

### FieldId

Ƭ **FieldId**: `string`

#### Defined in

[packages/react-formz/src/types/field.ts:4](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L4)

___

### FieldValidator

Ƭ **FieldValidator**<`Value`\>: (`value`: [`Maybe`](types_common.md#maybe)<`Value`\>) => [`Maybe`](types_common.md#maybe)<`string`\> \| (`value`: [`Maybe`](types_common.md#maybe)<`Value`\>) => `Promise`<[`Maybe`](types_common.md#maybe)<`string`\>\>

The validate function for a field. Always returns a boolean
but the validator can be async/return a Promise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Value` | extends [`FieldValue`](types_field.md#fieldvalue) = [`FieldValue`](types_field.md#fieldvalue) |

#### Defined in

[packages/react-formz/src/types/field.ts:28](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L28)

___

### FieldValue

Ƭ **FieldValue**: `string` \| `number` \| `boolean` \| ``null`` \| `undefined` \| `any`[] \| [`AnyObject`](types_common.md#anyobject) \| readonly `string`[]

#### Defined in

[packages/react-formz/src/types/field.ts:9](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L9)

___

### FieldValueFormatter

Ƭ **FieldValueFormatter**<`Value`, `Values`, `ReturnValue`\>: (`value`: `Value`, `formValues`: `Values`) => `ReturnValue`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Value` | `Value` |
| `Values` | extends [`FormzValues`](types_form.md#formzvalues) |
| `ReturnValue` | `ReturnValue` |

#### Type declaration

▸ (`value`, `formValues`): `ReturnValue`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Value` |
| `formValues` | `Values` |

##### Returns

`ReturnValue`

#### Defined in

[packages/react-formz/src/types/field.ts:32](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L32)

___

### TextFieldValue

Ƭ **TextFieldValue**: `string` \| `number` \| `undefined` \| readonly `string`[]

Native HTMLField Values

#### Defined in

[packages/react-formz/src/types/field.ts:7](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L7)
