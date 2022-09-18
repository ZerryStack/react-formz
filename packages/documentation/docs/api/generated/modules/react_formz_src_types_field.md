---
id: "react_formz_src_types_field"
title: "Module: react-formz/src/types/field"
sidebar_label: "react-formz/src/types/field"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [BaseFieldComponentProps](../interfaces/react_formz_src_types_field.BaseFieldComponentProps.md)
- [BaseFieldProps](../interfaces/react_formz_src_types_field.BaseFieldProps.md)
- [FieldInputProps](../interfaces/react_formz_src_types_field.FieldInputProps.md)

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

[packages/react-formz/src/types/field.ts:38](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L38)

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

[packages/react-formz/src/types/field.ts:30](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L30)

___

### FieldComponentProps

Ƭ **FieldComponentProps**<`Value`, `Key`, `Ref`\>: [`BaseFieldComponentProps`](../interfaces/react_formz_src_types_field.BaseFieldComponentProps.md)<`Value`, `Key`, `Ref`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Value` | extends [`FieldValue`](react_formz_src_types_field.md#fieldvalue) = [`FieldValue`](react_formz_src_types_field.md#fieldvalue) |
| `Key` | extends [`FieldId`](react_formz_src_types_field.md#fieldid) = [`FieldId`](react_formz_src_types_field.md#fieldid) |
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

Ƭ **FieldProps**<`Value`, `Key`, `Ref`\>: [`BaseFieldProps`](../interfaces/react_formz_src_types_field.BaseFieldProps.md)<`Value`, `Key`, `Ref`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Value` | extends [`FieldValue`](react_formz_src_types_field.md#fieldvalue) = [`FieldValue`](react_formz_src_types_field.md#fieldvalue) |
| `Key` | extends [`FieldId`](react_formz_src_types_field.md#fieldid) = [`FieldId`](react_formz_src_types_field.md#fieldid) |
| `Ref` | `unknown` |

#### Defined in

[packages/react-formz/src/types/field.ts:150](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L150)

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

[packages/react-formz/src/types/field.ts:26](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L26)

___

### FieldValue

Ƭ **FieldValue**: `string` \| `number` \| `boolean` \| ``null`` \| `undefined` \| `any`[] \| [`AnyObject`](react_formz_src_types_common.md#anyobject) \| `Date` \| readonly `string`[]

#### Defined in

[packages/react-formz/src/types/field.ts:11](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L11)

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

[packages/react-formz/src/types/field.ts:43](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L43)

___

### TextFieldValue

Ƭ **TextFieldValue**: `string` \| `number` \| `undefined` \| readonly `string`[]

Native HTMLField Values

#### Defined in

[packages/react-formz/src/types/field.ts:9](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L9)
