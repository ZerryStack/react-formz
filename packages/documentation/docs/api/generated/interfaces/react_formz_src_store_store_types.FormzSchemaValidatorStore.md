---
id: "react_formz_src_store_store_types.FormzSchemaValidatorStore"
title: "Interface: FormzSchemaValidatorStore"
sidebar_label: "FormzSchemaValidatorStore"
custom_edit_url: null
---

[react-formz/src/store/store.types](../modules/react_formz_src_store_store_types.md).FormzSchemaValidatorStore

## Properties

### registerValidator

• **registerValidator**: (`formId`: `string`, `schemaValidator`: [`SchemaValidator`](../classes/react_formz_src_models_SchemaValidator.SchemaValidator.md)<`any`\>) => `void`

#### Type declaration

▸ (`formId`, `schemaValidator`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `formId` | `string` |
| `schemaValidator` | [`SchemaValidator`](../classes/react_formz_src_models_SchemaValidator.SchemaValidator.md)<`any`\> |

##### Returns

`void`

#### Defined in

[packages/react-formz/src/store/store.types.ts:14](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/store/store.types.ts#L14)

___

### unregisterValidator

• **unregisterValidator**: (`formId`: `string`) => `void`

#### Type declaration

▸ (`formId`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `formId` | `string` |

##### Returns

`void`

#### Defined in

[packages/react-formz/src/store/store.types.ts:15](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/store/store.types.ts#L15)

___

### validators

• **validators**: `Record`<`string`, [`SchemaValidator`](../classes/react_formz_src_models_SchemaValidator.SchemaValidator.md)<`any`\>\>

#### Defined in

[packages/react-formz/src/store/store.types.ts:13](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/store/store.types.ts#L13)
