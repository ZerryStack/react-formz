---
id: "react_formz_src_store_store"
title: "Module: react-formz/src/store/store"
sidebar_label: "react-formz/src/store/store"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### formzFieldsStore

▸ **formzFieldsStore**(): [`FormzFieldsStore`](../interfaces/react_formz_src_store_store_types.FormzFieldsStore.md)

#### Returns

[`FormzFieldsStore`](../interfaces/react_formz_src_store_store_types.FormzFieldsStore.md)

#### Defined in

node_modules/zustand/react.d.ts:11

▸ **formzFieldsStore**<`U`\>(`selector`, `equals?`): `U`

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | (`state`: [`FormzFieldsStore`](../interfaces/react_formz_src_store_store_types.FormzFieldsStore.md)) => `U` |
| `equals?` | (`a`: `U`, `b`: `U`) => `boolean` |

#### Returns

`U`

#### Defined in

node_modules/zustand/react.d.ts:12

___

### formzSchemaValidatorStore

▸ **formzSchemaValidatorStore**(): [`FormzSchemaValidatorStore`](../interfaces/react_formz_src_store_store_types.FormzSchemaValidatorStore.md)

#### Returns

[`FormzSchemaValidatorStore`](../interfaces/react_formz_src_store_store_types.FormzSchemaValidatorStore.md)

#### Defined in

node_modules/zustand/react.d.ts:11

▸ **formzSchemaValidatorStore**<`U`\>(`selector`, `equals?`): `U`

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | (`state`: [`FormzSchemaValidatorStore`](../interfaces/react_formz_src_store_store_types.FormzSchemaValidatorStore.md)) => `U` |
| `equals?` | (`a`: `U`, `b`: `U`) => `boolean` |

#### Returns

`U`

#### Defined in

node_modules/zustand/react.d.ts:12

___

### formzStore

▸ **formzStore**(): [`FormzStore`](../interfaces/react_formz_src_store_store_types.FormzStore.md)

#### Returns

[`FormzStore`](../interfaces/react_formz_src_store_store_types.FormzStore.md)

#### Defined in

node_modules/zustand/react.d.ts:11

▸ **formzStore**<`U`\>(`selector`, `equals?`): `U`

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | (`state`: [`FormzStore`](../interfaces/react_formz_src_store_store_types.FormzStore.md)) => `U` |
| `equals?` | (`a`: `U`, `b`: `U`) => `boolean` |

#### Returns

`U`

#### Defined in

node_modules/zustand/react.d.ts:12

___

### useAddForm

▸ **useAddForm**(): <Values\>(`id`: `string`, `initialValues`: `Values`, `saveDrafts`: `boolean`) => `void`

#### Returns

`fn`

▸ <`Values`\>(`id`, `initialValues`, `saveDrafts`): `void`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `Values` | extends [`FormzValues`](react_formz_src_types_form.md#formzvalues) |

##### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `initialValues` | `Values` |
| `saveDrafts` | `boolean` |

##### Returns

`void`

#### Defined in

[packages/react-formz/src/store/store.ts:116](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/store/store.ts#L116)

___

### useFormSchemaValidator

▸ **useFormSchemaValidator**<`Values`\>(`formId`): [`SchemaValidator`](../classes/react_formz_src_models_SchemaValidator.SchemaValidator.md)<`Values`\> \| `undefined`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Values` | extends [`FormzValues`](react_formz_src_types_form.md#formzvalues) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `formId` | `string` |

#### Returns

[`SchemaValidator`](../classes/react_formz_src_models_SchemaValidator.SchemaValidator.md)<`Values`\> \| `undefined`

#### Defined in

[packages/react-formz/src/store/store.ts:140](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/store/store.ts#L140)

___

### useFormz

▸ **useFormz**(): [`FormzStore`](../interfaces/react_formz_src_store_store_types.FormzStore.md)

#### Returns

[`FormzStore`](../interfaces/react_formz_src_store_store_types.FormzStore.md)

#### Defined in

node_modules/zustand/react.d.ts:11

▸ **useFormz**<`U`\>(`selector`, `equals?`): `U`

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | (`state`: [`FormzStore`](../interfaces/react_formz_src_store_store_types.FormzStore.md)) => `U` |
| `equals?` | (`a`: `U`, `b`: `U`) => `boolean` |

#### Returns

`U`

#### Defined in

node_modules/zustand/react.d.ts:12

___

### useFormzFields

▸ **useFormzFields**(): [`FormzFieldsStore`](../interfaces/react_formz_src_store_store_types.FormzFieldsStore.md)

#### Returns

[`FormzFieldsStore`](../interfaces/react_formz_src_store_store_types.FormzFieldsStore.md)

#### Defined in

node_modules/zustand/react.d.ts:11

▸ **useFormzFields**<`U`\>(`selector`, `equals?`): `U`

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | (`state`: [`FormzFieldsStore`](../interfaces/react_formz_src_store_store_types.FormzFieldsStore.md)) => `U` |
| `equals?` | (`a`: `U`, `b`: `U`) => `boolean` |

#### Returns

`U`

#### Defined in

node_modules/zustand/react.d.ts:12

___

### useFormzSchemaValidators

▸ **useFormzSchemaValidators**(): [`FormzSchemaValidatorStore`](../interfaces/react_formz_src_store_store_types.FormzSchemaValidatorStore.md)

#### Returns

[`FormzSchemaValidatorStore`](../interfaces/react_formz_src_store_store_types.FormzSchemaValidatorStore.md)

#### Defined in

node_modules/zustand/react.d.ts:11

▸ **useFormzSchemaValidators**<`U`\>(`selector`, `equals?`): `U`

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | (`state`: [`FormzSchemaValidatorStore`](../interfaces/react_formz_src_store_store_types.FormzSchemaValidatorStore.md)) => `U` |
| `equals?` | (`a`: `U`, `b`: `U`) => `boolean` |

#### Returns

`U`

#### Defined in

node_modules/zustand/react.d.ts:12

___

### useRegisterField

▸ **useRegisterField**(): (`formId`: `string`, `payload`: [`RegisterFieldPayload`](../interfaces/react_formz_src_store_store_types.RegisterFieldPayload.md)) => `void`

#### Returns

`fn`

▸ (`formId`, `payload`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `formId` | `string` |
| `payload` | [`RegisterFieldPayload`](../interfaces/react_formz_src_store_store_types.RegisterFieldPayload.md) |

##### Returns

`void`

#### Defined in

[packages/react-formz/src/store/store.ts:124](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/store/store.ts#L124)

___

### useRegisterSchemaValidator

▸ **useRegisterSchemaValidator**(): (`formId`: `string`, `schemaValidator`: [`SchemaValidator`](../classes/react_formz_src_models_SchemaValidator.SchemaValidator.md)<`any`\>) => `void`

#### Returns

`fn`

▸ (`formId`, `schemaValidator`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `formId` | `string` |
| `schemaValidator` | [`SchemaValidator`](../classes/react_formz_src_models_SchemaValidator.SchemaValidator.md)<`any`\> |

##### Returns

`void`

#### Defined in

[packages/react-formz/src/store/store.ts:132](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/store/store.ts#L132)

___

### useRemoveForm

▸ **useRemoveForm**(): (`id`: `string`) => `void`

#### Returns

`fn`

▸ (`id`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

##### Returns

`void`

#### Defined in

[packages/react-formz/src/store/store.ts:120](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/store/store.ts#L120)

___

### useUnregisterField

▸ **useUnregisterField**(): (`formId`: `string`, `fieldId`: `string`) => `void`

#### Returns

`fn`

▸ (`formId`, `fieldId`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `formId` | `string` |
| `fieldId` | `string` |

##### Returns

`void`

#### Defined in

[packages/react-formz/src/store/store.ts:128](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/store/store.ts#L128)

___

### useUnregisterSchemaValidator

▸ **useUnregisterSchemaValidator**(): (`formId`: `string`) => `void`

#### Returns

`fn`

▸ (`formId`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `formId` | `string` |

##### Returns

`void`

#### Defined in

[packages/react-formz/src/store/store.ts:136](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/store/store.ts#L136)
