---
id: "types_field"
title: "Module: types/field"
sidebar_label: "types/field"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [BaseFieldComponentProps](../interfaces/types_field.BaseFieldComponentProps.md)
- [BaseFieldProps](../interfaces/types_field.BaseFieldProps.md)
- [FieldInputProps](../interfaces/types_field.FieldInputProps.md)

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

[packages/react-formz/src/types/field.ts:38](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L38)

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

[packages/react-formz/src/types/field.ts:30](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L30)

___

### FieldComponentProps

Ƭ **FieldComponentProps**<`Value`, `Key`, `Ref`\>: [`BaseFieldComponentProps`](../interfaces/types_field.BaseFieldComponentProps.md)<`Value`, `Key`, `Ref`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Value` | extends [`FieldValue`](types_field.md#fieldvalue) = [`FieldValue`](types_field.md#fieldvalue) |
| `Key` | extends [`FieldId`](types_field.md#fieldid) = [`FieldId`](types_field.md#fieldid) |
| `Ref` | `unknown` |

#### Defined in

[packages/react-formz/src/types/field.ts:106](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L106)

___

### FieldId

Ƭ **FieldId**: `string`

#### Defined in

[packages/react-formz/src/types/field.ts:6](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L6)

___

### FieldProps

Ƭ **FieldProps**<`Value`, `Key`, `Ref`\>: [`BaseFieldProps`](../interfaces/types_field.BaseFieldProps.md)<`Value`, `Key`, `Ref`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Value` | extends [`FieldValue`](types_field.md#fieldvalue) = [`FieldValue`](types_field.md#fieldvalue) |
| `Key` | extends [`FieldId`](types_field.md#fieldid) = [`FieldId`](types_field.md#fieldid) |
| `Ref` | `unknown` |

#### Defined in

[packages/react-formz/src/types/field.ts:150](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L150)

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

[packages/react-formz/src/types/field.ts:26](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L26)

___

### FieldValue

Ƭ **FieldValue**: `string` \| `number` \| `boolean` \| ``null`` \| `undefined` \| `any`[] \| [`AnyObject`](types_common.md#anyobject) \| `Date` \| readonly `string`[]

#### Defined in

[packages/react-formz/src/types/field.ts:11](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L11)

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

[packages/react-formz/src/types/field.ts:43](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L43)

___

### TextFieldValue

Ƭ **TextFieldValue**: `string` \| `number` \| `undefined` \| readonly `string`[]

Native HTMLField Values

#### Defined in

[packages/react-formz/src/types/field.ts:9](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L9)
