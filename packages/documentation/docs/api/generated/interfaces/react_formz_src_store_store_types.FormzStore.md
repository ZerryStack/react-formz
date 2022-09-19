---
id: "react_formz_src_store_store_types.FormzStore"
title: "Interface: FormzStore"
sidebar_label: "FormzStore"
custom_edit_url: null
---

[react-formz/src/store/store.types](../modules/react_formz_src_store_store_types.md).FormzStore

## Properties

### addForm

• **addForm**: <Values\>(`id`: `string`, `initialValues`: `Values`, `saveDrafts`: `boolean`) => `void`

#### Type declaration

▸ <`Values`\>(`id`, `initialValues`, `saveDrafts`): `void`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `Values` | extends [`FormzValues`](../modules/react_formz_src_types_form.md#formzvalues) |

##### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `initialValues` | `Values` |
| `saveDrafts` | `boolean` |

##### Returns

`void`

#### Defined in

[packages/react-formz/src/store/store.types.ts:28](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/store/store.types.ts#L28)

___

### forms

• **forms**: `Record`<`string`, [`FormzState`](../modules/react_formz_src_types_form.md#formzstate)<`any`\>\>

#### Defined in

[packages/react-formz/src/store/store.types.ts:27](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/store/store.types.ts#L27)

___

### removeForm

• **removeForm**: (`id`: `string`) => `void`

#### Type declaration

▸ (`id`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

##### Returns

`void`

#### Defined in

[packages/react-formz/src/store/store.types.ts:33](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/store/store.types.ts#L33)
