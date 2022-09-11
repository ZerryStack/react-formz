---
id: "types_field"
title: "Module: types/field"
sidebar_label: "types/field"
sidebar_position: 0
custom_edit_url: null
---

## Type Aliases

### DependentFieldChangeCallback

Ƭ **DependentFieldChangeCallback**<`Value`, `DependentValues`\>: (`dependencies`: `DependentValues`, `actions`: [`FieldActions`](../interfaces/hooks_fields_useFieldActions.FieldActions.md)<`Value`\>) => `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Value` | extends [`FieldValue`](types_field.md#fieldvalue) = [`FieldValue`](types_field.md#fieldvalue) |
| `DependentValues` | extends [`FormzValues`](types_form.md#formzvalues) = [`FormzValues`](types_form.md#formzvalues) |

#### Type declaration

▸ (`dependencies`, `actions`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `dependencies` | `DependentValues` |
| `actions` | [`FieldActions`](../interfaces/hooks_fields_useFieldActions.FieldActions.md)<`Value`\> |

##### Returns

`void`

#### Defined in

[packages/react-formz/src/types/field.ts:42](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L42)

___

### DependentFieldValidator

Ƭ **DependentFieldValidator**<`Value`, `DependentValues`\>: (`value`: [`Maybe`](types_common.md#maybe)<`Value`\>, `dependencies`: `DependentValues`) => [`Maybe`](types_common.md#maybe)<`string`\> \| `Promise`<[`Maybe`](types_common.md#maybe)<`string`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Value` | extends [`FieldValue`](types_field.md#fieldvalue) = [`FieldValue`](types_field.md#fieldvalue) |
| `DependentValues` | extends [`FormzValues`](types_form.md#formzvalues) = [`FormzValues`](types_form.md#formzvalues) |

#### Type declaration

▸ (`value`, `dependencies`): [`Maybe`](types_common.md#maybe)<`string`\> \| `Promise`<[`Maybe`](types_common.md#maybe)<`string`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Maybe`](types_common.md#maybe)<`Value`\> |
| `dependencies` | `DependentValues` |

##### Returns

[`Maybe`](types_common.md#maybe)<`string`\> \| `Promise`<[`Maybe`](types_common.md#maybe)<`string`\>\>

#### Defined in

[packages/react-formz/src/types/field.ts:34](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L34)

___

### FieldElement

Ƭ **FieldElement**: `HTMLInputElement` \| `HTMLSelectElement` \| `HTMLTextAreaElement`

#### Defined in

[packages/react-formz/src/types/field.ts:21](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L21)

___

### FieldId

Ƭ **FieldId**: `string`

#### Defined in

[packages/react-formz/src/types/field.ts:5](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L5)

___

### FieldValidator

Ƭ **FieldValidator**<`Value`\>: (`value`: [`Maybe`](types_common.md#maybe)<`Value`\>) => [`Maybe`](types_common.md#maybe)<`string`\> \| `Promise`<[`Maybe`](types_common.md#maybe)<`string`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Value` | extends [`FieldValue`](types_field.md#fieldvalue) = [`FieldValue`](types_field.md#fieldvalue) |

#### Type declaration

▸ (`value`): [`Maybe`](types_common.md#maybe)<`string`\> \| `Promise`<[`Maybe`](types_common.md#maybe)<`string`\>\>

The validate function for a field. Always returns a boolean
but the validator can be async/return a Promise.

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Maybe`](types_common.md#maybe)<`Value`\> |

##### Returns

[`Maybe`](types_common.md#maybe)<`string`\> \| `Promise`<[`Maybe`](types_common.md#maybe)<`string`\>\>

#### Defined in

[packages/react-formz/src/types/field.ts:30](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L30)

___

### FieldValue

Ƭ **FieldValue**: `string` \| `number` \| `boolean` \| ``null`` \| `undefined` \| `any`[] \| [`AnyObject`](types_common.md#anyobject) \| `Date` \| readonly `string`[]

#### Defined in

[packages/react-formz/src/types/field.ts:10](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L10)

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

[packages/react-formz/src/types/field.ts:47](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L47)

___

### TextFieldValue

Ƭ **TextFieldValue**: `string` \| `number` \| `undefined` \| readonly `string`[]

Native HTMLField Values

#### Defined in

[packages/react-formz/src/types/field.ts:8](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L8)
