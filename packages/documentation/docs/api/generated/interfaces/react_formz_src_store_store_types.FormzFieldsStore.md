---
id: "react_formz_src_store_store_types.FormzFieldsStore"
title: "Interface: FormzFieldsStore"
sidebar_label: "FormzFieldsStore"
custom_edit_url: null
---

[react-formz/src/store/store.types](../modules/react_formz_src_store_store_types.md).FormzFieldsStore

## Properties

### forms

• **forms**: `Record`<`string`, { `fields`: `Record`<`string`, [`RegisterFieldPayload`](react_formz_src_store_store_types.RegisterFieldPayload.md)\>  }\>

#### Defined in

[packages/react-formz/src/store/store.types.ts:19](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/store/store.types.ts#L19)

___

### registerField

• **registerField**: (`formId`: `string`, `payload`: [`RegisterFieldPayload`](react_formz_src_store_store_types.RegisterFieldPayload.md)) => `void`

#### Type declaration

▸ (`formId`, `payload`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `formId` | `string` |
| `payload` | [`RegisterFieldPayload`](react_formz_src_store_store_types.RegisterFieldPayload.md) |

##### Returns

`void`

#### Defined in

[packages/react-formz/src/store/store.types.ts:22](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/store/store.types.ts#L22)

___

### unregisterField

• **unregisterField**: (`formId`: `string`, `fieldId`: `string`) => `void`

#### Type declaration

▸ (`formId`, `fieldId`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `formId` | `string` |
| `fieldId` | `string` |

##### Returns

`void`

#### Defined in

[packages/react-formz/src/store/store.types.ts:23](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/store/store.types.ts#L23)
