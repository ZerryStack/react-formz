---
id: "types_form"
title: "Module: types/form"
sidebar_label: "types/form"
sidebar_position: 0
custom_edit_url: null
---

## Type Aliases

### AnyKeyedObject

Ƭ **AnyKeyedObject**: `Object`

#### Index signature

▪ [key: [`Key`](types_common.md#key)]: `any`

#### Defined in

[packages/react-formz/src/types/form.ts:9](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/form.ts#L9)

___

### FormId

Ƭ **FormId**: `string`

#### Defined in

[packages/react-formz/src/types/form.ts:5](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/form.ts#L5)

___

### FormRehydrationCallback

Ƭ **FormRehydrationCallback**<`Values`\>: (`state`: [`FormzState`](types_form.md#formzstate)<`Values`\>, `restoredFromDate`: `Date` \| ``null``) => `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Values` | extends [`FormzValues`](types_form.md#formzvalues) |

#### Type declaration

▸ (`state`, `restoredFromDate`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`FormzState`](types_form.md#formzstate)<`Values`\> |
| `restoredFromDate` | `Date` \| ``null`` |

##### Returns

`void`

#### Defined in

[packages/react-formz/src/types/form.ts:48](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/form.ts#L48)

___

### FormSubmitCallback

Ƭ **FormSubmitCallback**<`Values`\>: (`values`: `Values`, `errors`: [`FormzErrors`](types_form.md#formzerrors)<`Values`\>) => `Promise`<`void`\> \| (`values`: `Values`, `errors`: [`FormzErrors`](types_form.md#formzerrors)<`Values`\>) => `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Values` | extends [`FormzValues`](types_form.md#formzvalues) |

#### Defined in

[packages/react-formz/src/types/form.ts:19](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/form.ts#L19)

___

### FormValidator

Ƭ **FormValidator**<`Values`\>: (`values`: `Values`[[`ValidKey`](types_form.md#validkey)<`Values`\>]) => `boolean` \| (`values`: `Values`[[`ValidKey`](types_form.md#validkey)<`Values`\>]) => `Promise`<`boolean`\>

The validate function for a form Always returns a boolean
but the validator can be async/return a Promise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Values` | extends [`FormzValues`](types_form.md#formzvalues) |

#### Defined in

[packages/react-formz/src/types/form.ts:72](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/form.ts#L72)

___

### FormzError

Ƭ **FormzError**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `message` | [`Maybe`](types_common.md#maybe)<`string`\> |
| `type` | [`ValidationType`](types_validation.md#validationtype) |

#### Defined in

[packages/react-formz/src/types/form.ts:29](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/form.ts#L29)

___

### FormzErrors

Ƭ **FormzErrors**<`Values`\>: { [K in keyof Values]?: FormzError }

Type for form state errors.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Values` | extends [`FormzValues`](types_form.md#formzvalues) |

#### Defined in

[packages/react-formz/src/types/form.ts:36](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/form.ts#L36)

___

### FormzState

Ƭ **FormzState**<`Values`\>: `Object`

The complete state of a form.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Values` | extends [`FormzValues`](types_form.md#formzvalues) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `errors` | [`FormzErrors`](types_form.md#formzerrors)<`Values`\> |
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
| `touched` | [`FormzTouched`](types_form.md#formztouched)<`Values`\> |
| `values` | `Values` |

#### Defined in

[packages/react-formz/src/types/form.ts:52](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/form.ts#L52)

___

### FormzTouched

Ƭ **FormzTouched**<`Values`\>: { [K in keyof Values]?: boolean }

Represents form fields that have been "touched" by a user i.e. a 
focus/blur combination of events has happened at least once.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Values` | extends [`FormzValues`](types_form.md#formzvalues) |

#### Defined in

[packages/react-formz/src/types/form.ts:44](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/form.ts#L44)

___

### FormzValues

Ƭ **FormzValues**: `Object`

Type for form state values i.e. the desired data structure of the form.

#### Index signature

▪ [field: [`Key`](types_common.md#key)]: [`FieldValue`](types_field.md#fieldvalue)

#### Defined in

[packages/react-formz/src/types/form.ts:25](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/form.ts#L25)

___

### StringKeyOf

Ƭ **StringKeyOf**<`T`\>: `Extract`<keyof `T`, `string`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/react-formz/src/types/form.ts:7](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/form.ts#L7)

___

### ValidKey

Ƭ **ValidKey**<`T`, `K`\>: `K` extends [`StringKeyOf`](types_form.md#stringkeyof)<`T`\> ? `K` : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AnyKeyedObject`](types_form.md#anykeyedobject) |
| `K` | extends keyof `T` = keyof `T` |

#### Defined in

[packages/react-formz/src/types/form.ts:11](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/form.ts#L11)

___

### ValueOf

Ƭ **ValueOf**<`T`, `K`\>: `K` extends `never` ? `never` : `T`[`K`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AnyKeyedObject`](types_form.md#anykeyedobject) |
| `K` | extends [`ValidKey`](types_form.md#validkey)<`T`\> = [`ValidKey`](types_form.md#validkey)<`T`\> |

#### Defined in

[packages/react-formz/src/types/form.ts:14](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/form.ts#L14)
