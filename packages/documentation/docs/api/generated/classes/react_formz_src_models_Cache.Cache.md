---
id: "react_formz_src_models_Cache.Cache"
title: "Class: Cache<Key, Value>"
sidebar_label: "Cache"
custom_edit_url: null
---

[react-formz/src/models/Cache](../modules/react_formz_src_models_Cache.md).Cache

## Type parameters

| Name |
| :------ |
| `Key` |
| `Value` |

## Constructors

### constructor

• **new Cache**<`Key`, `Value`\>(`max?`)

#### Type parameters

| Name |
| :------ |
| `Key` |
| `Value` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `max` | `number` | `1000` |

#### Defined in

[packages/react-formz/src/models/Cache.ts:5](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/models/Cache.ts#L5)

## Properties

### #map

• `Private` **#map**: `Map`<`Key`, `Value`\>

#### Defined in

[packages/react-formz/src/models/Cache.ts:3](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/models/Cache.ts#L3)

___

### #max

• `Private` **#max**: `number` = `1000`

#### Defined in

[packages/react-formz/src/models/Cache.ts:2](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/models/Cache.ts#L2)

## Methods

### add

▸ **add**(`key`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Key` |
| `value` | `Value` |

#### Returns

`void`

#### Defined in

[packages/react-formz/src/models/Cache.ts:9](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/models/Cache.ts#L9)

___

### deleteFirstItem

▸ `Private` **deleteFirstItem**(): `void`

#### Returns

`void`

#### Defined in

[packages/react-formz/src/models/Cache.ts:31](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/models/Cache.ts#L31)

___

### get

▸ **get**(`key`): `undefined` \| `Value`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Key` |

#### Returns

`undefined` \| `Value`

#### Defined in

[packages/react-formz/src/models/Cache.ts:19](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/models/Cache.ts#L19)

___

### has

▸ **has**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Key` |

#### Returns

`boolean`

#### Defined in

[packages/react-formz/src/models/Cache.ts:23](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/models/Cache.ts#L23)

___

### remove

▸ **remove**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Key` |

#### Returns

`boolean`

#### Defined in

[packages/react-formz/src/models/Cache.ts:27](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/models/Cache.ts#L27)
