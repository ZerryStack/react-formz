---
id: "react_formz_src_types_form"
title: "Module: react-formz/src/types/form"
sidebar_label: "react-formz/src/types/form"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [FormProps](../interfaces/react_formz_src_types_form.FormProps.md)

## Type Aliases

### AnyKeyedObject

Ƭ **AnyKeyedObject**: `Object`

#### Index signature

▪ [key: [`Key`](react_formz_src_types_common.md#key)]: `any`

#### Defined in

[packages/react-formz/src/types/form.ts:11](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/form.ts#L11)

___

### FormId

Ƭ **FormId**: `string`

#### Defined in

[packages/react-formz/src/types/form.ts:7](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/form.ts#L7)

___

### FormRehydrationCallback

Ƭ **FormRehydrationCallback**<`Values`\>: (`state`: [`FormzState`](react_formz_src_types_form.md#formzstate)<`Values`\>, `restoredFromDate`: `Date` \| ``null``) => `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Values` | extends [`FormzValues`](react_formz_src_types_form.md#formzvalues) |

#### Type declaration

▸ (`state`, `restoredFromDate`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`FormzState`](react_formz_src_types_form.md#formzstate)<`Values`\> |
| `restoredFromDate` | `Date` \| ``null`` |

##### Returns

`void`

#### Defined in

[packages/react-formz/src/types/form.ts:53](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/form.ts#L53)

___

### FormSubmitCallback

Ƭ **FormSubmitCallback**<`Values`\>: (`values`: `Values`, `errors`: [`FormzErrors`](react_formz_src_types_form.md#formzerrors)<`Values`\>) => `Promise`<`void`\> \| (`values`: `Values`, `errors`: [`FormzErrors`](react_formz_src_types_form.md#formzerrors)<`Values`\>) => `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Values` | extends [`FormzValues`](react_formz_src_types_form.md#formzvalues) |

#### Defined in

[packages/react-formz/src/types/form.ts:23](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/form.ts#L23)

___

### FormValidator

Ƭ **FormValidator**<`Values`\>: (`values`: `Values`[[`ValidKey`](react_formz_src_types_form.md#validkey)<`Values`\>]) => `boolean` \| (`values`: `Values`[[`ValidKey`](react_formz_src_types_form.md#validkey)<`Values`\>]) => `Promise`<`boolean`\>

The validate function for a form Always returns a boolean
but the validator can be async/return a Promise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Values` | extends [`FormzValues`](react_formz_src_types_form.md#formzvalues) |

#### Defined in

[packages/react-formz/src/types/form.ts:80](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/form.ts#L80)

___

### FormzError

Ƭ **FormzError**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `message` | [`Maybe`](react_formz_src_types_common.md#maybe)<`string`\> |
| `type` | [`ValidationType`](react_formz_src_types_validation.md#validationtype) |

#### Defined in

[packages/react-formz/src/types/form.ts:34](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/form.ts#L34)

___

### FormzErrors

Ƭ **FormzErrors**<`Values`\>: { [K in keyof Values]?: FormzError }

Type for form state errors.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Values` | extends [`FormzValues`](react_formz_src_types_form.md#formzvalues) |

#### Defined in

[packages/react-formz/src/types/form.ts:41](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/form.ts#L41)

___

### FormzState

Ƭ **FormzState**<`Values`\>: `Object`

The complete state of a form.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Values` | extends [`FormzValues`](react_formz_src_types_form.md#formzvalues) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `errors` | [`FormzErrors`](react_formz_src_types_form.md#formzerrors)<`Values`\> |
| `hydrated` | `boolean` |
| `initialValues?` | `Values` |
| `initialized` | ``true`` |
| `isInvalid` | `boolean` |
| `isSubmitting` | `boolean` |
| `isValidating` | `boolean` |
| `lastPersistedAt` | `Date` \| ``null`` |
| `restoredFromDate` | `Date` \| ``null`` |
| `saveDrafts` | `boolean` |
| `submitCount` | `number` |
| `touched` | [`FormzTouched`](react_formz_src_types_form.md#formztouched)<`Values`\> |
| `values` | `Values` |

#### Defined in

[packages/react-formz/src/types/form.ts:60](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/form.ts#L60)

___

### FormzTouched

Ƭ **FormzTouched**<`Values`\>: { [K in keyof Values]?: boolean }

Represents form fields that have been "touched" by a user i.e. a
focus/blur combination of events has happened at least once.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Values` | extends [`FormzValues`](react_formz_src_types_form.md#formzvalues) |

#### Defined in

[packages/react-formz/src/types/form.ts:49](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/form.ts#L49)

___

### FormzValues

Ƭ **FormzValues**: `Object`

Type for form state values i.e. the desired data structure of the form.

#### Index signature

▪ [field: [`Key`](react_formz_src_types_common.md#key)]: [`FieldValue`](react_formz_src_types_field.md#fieldvalue)

#### Defined in

[packages/react-formz/src/types/form.ts:30](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/form.ts#L30)

___

### StringKeyOf

Ƭ **StringKeyOf**<`T`\>: `Extract`<keyof `T`, `string`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/react-formz/src/types/form.ts:9](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/form.ts#L9)

___

### ValidKey

Ƭ **ValidKey**<`T`, `K`\>: `K` extends [`StringKeyOf`](react_formz_src_types_form.md#stringkeyof)<`T`\> ? `K` : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AnyKeyedObject`](react_formz_src_types_form.md#anykeyedobject) |
| `K` | extends keyof `T` = keyof `T` |

#### Defined in

[packages/react-formz/src/types/form.ts:13](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/form.ts#L13)

___

### ValueOf

Ƭ **ValueOf**<`T`, `K`\>: `K` extends `never` ? `never` : `T`[`K`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AnyKeyedObject`](react_formz_src_types_form.md#anykeyedobject) |
| `K` | extends [`ValidKey`](react_formz_src_types_form.md#validkey)<`T`\> = [`ValidKey`](react_formz_src_types_form.md#validkey)<`T`\> |

#### Defined in

[packages/react-formz/src/types/form.ts:18](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/form.ts#L18)
