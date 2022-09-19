---
id: "react_formz_src_types_field"
title: "Module: react-formz/src/types/field"
sidebar_label: "react-formz/src/types/field"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [FieldProps](../interfaces/react_formz_src_types_field.FieldProps.md)

## Type Aliases

### DependentFieldChangeCallback

Ƭ **DependentFieldChangeCallback**<`Value`, `DependentValues`\>: (`dependencies`: `DependentValues`, `actions`: [`FieldActions`](../interfaces/react_formz_src_hooks_fields_useFieldActions.FieldActions.md)<`Value`\>) => `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Value` | extends [`FieldValue`](react_formz_src_types_field.md#fieldvalue) = [`FieldValue`](react_formz_src_types_field.md#fieldvalue) |
| `DependentValues` | extends [`FormzValues`](react_formz_src_types_form.md#formzvalues) = [`FormzValues`](react_formz_src_types_form.md#formzvalues) |

#### Type declaration

▸ (`dependencies`, `actions`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `dependencies` | `DependentValues` |
| `actions` | [`FieldActions`](../interfaces/react_formz_src_hooks_fields_useFieldActions.FieldActions.md)<`Value`\> |

##### Returns

`void`

#### Defined in

[packages/react-formz/src/types/field.ts:37](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L37)

___

### DependentFieldValidator

Ƭ **DependentFieldValidator**<`Value`, `DependentValues`\>: (`value`: [`Maybe`](react_formz_src_types_common.md#maybe)<`Value`\>, `dependencies`: `DependentValues`) => [`Maybe`](react_formz_src_types_common.md#maybe)<`string`\> \| `Promise`<[`Maybe`](react_formz_src_types_common.md#maybe)<`string`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Value` | extends [`FieldValue`](react_formz_src_types_field.md#fieldvalue) = [`FieldValue`](react_formz_src_types_field.md#fieldvalue) |
| `DependentValues` | extends [`FormzValues`](react_formz_src_types_form.md#formzvalues) = [`FormzValues`](react_formz_src_types_form.md#formzvalues) |

#### Type declaration

▸ (`value`, `dependencies`): [`Maybe`](react_formz_src_types_common.md#maybe)<`string`\> \| `Promise`<[`Maybe`](react_formz_src_types_common.md#maybe)<`string`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Maybe`](react_formz_src_types_common.md#maybe)<`Value`\> |
| `dependencies` | `DependentValues` |

##### Returns

[`Maybe`](react_formz_src_types_common.md#maybe)<`string`\> \| `Promise`<[`Maybe`](react_formz_src_types_common.md#maybe)<`string`\>\>

#### Defined in

[packages/react-formz/src/types/field.ts:29](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L29)

___

### FieldId

Ƭ **FieldId**: `string`

#### Defined in

[packages/react-formz/src/types/field.ts:5](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L5)

___

### FieldValidator

Ƭ **FieldValidator**<`Value`\>: (`value`: [`Maybe`](react_formz_src_types_common.md#maybe)<`Value`\>) => [`Maybe`](react_formz_src_types_common.md#maybe)<`string`\> \| `Promise`<[`Maybe`](react_formz_src_types_common.md#maybe)<`string`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Value` | extends [`FieldValue`](react_formz_src_types_field.md#fieldvalue) = [`FieldValue`](react_formz_src_types_field.md#fieldvalue) |

#### Type declaration

▸ (`value`): [`Maybe`](react_formz_src_types_common.md#maybe)<`string`\> \| `Promise`<[`Maybe`](react_formz_src_types_common.md#maybe)<`string`\>\>

The validate function for a field. Always returns a boolean
but the validator can be async/return a Promise.

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Maybe`](react_formz_src_types_common.md#maybe)<`Value`\> |

##### Returns

[`Maybe`](react_formz_src_types_common.md#maybe)<`string`\> \| `Promise`<[`Maybe`](react_formz_src_types_common.md#maybe)<`string`\>\>

#### Defined in

[packages/react-formz/src/types/field.ts:25](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L25)

___

### FieldValue

Ƭ **FieldValue**: `string` \| `number` \| `boolean` \| ``null`` \| `undefined` \| `any`[] \| [`AnyObject`](react_formz_src_types_common.md#anyobject) \| `Date` \| readonly `string`[]

#### Defined in

[packages/react-formz/src/types/field.ts:10](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L10)

___

### FieldValueFormatter

Ƭ **FieldValueFormatter**<`Value`, `Values`, `ReturnValue`\>: (`value`: `Value`, `formValues`: `Values`) => `ReturnValue`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Value` | `Value` |
| `Values` | extends [`FormzValues`](react_formz_src_types_form.md#formzvalues) |
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

[packages/react-formz/src/types/field.ts:42](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L42)

___

### TextFieldValue

Ƭ **TextFieldValue**: `string` \| `number` \| `undefined` \| readonly `string`[]

Native HTMLField Values

#### Defined in

[packages/react-formz/src/types/field.ts:8](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L8)
