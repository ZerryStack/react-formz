---
id: "react_formz_src_types_common"
title: "Module: react-formz/src/types/common"
sidebar_label: "react-formz/src/types/common"
sidebar_position: 0
custom_edit_url: null
---

## Type Aliases

### AnyObject

Ƭ **AnyObject**: `Record`<`string`, `any`\>

#### Defined in

[packages/react-formz/src/types/common.ts:1](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/common.ts#L1)

___

### ArrayKey

Ƭ **ArrayKey**: `number`

Type which can be used to index an array or tuple type.

#### Defined in

[packages/react-formz/src/types/common.ts:5](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/common.ts#L5)

___

### AsKey

Ƭ **AsKey**<`T`\>: `Extract`<`T`, [`Key`](react_formz_src_types_common.md#key)\>

Type to assert that a type is a [Key](react_formz_src_types_common.md#key).

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | type which may be a [Key](react_formz_src_types_common.md#key) |

#### Defined in

[packages/react-formz/src/types/common.ts:16](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/common.ts#L16)

___

### Empty

Ƭ **Empty**: [`EmptyString`](react_formz_src_types_common.md#emptystring) \| `undefined` \| ``null``

#### Defined in

[packages/react-formz/src/types/common.ts:53](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/common.ts#L53)

___

### EmptyString

Ƭ **EmptyString**: ``""``

#### Defined in

[packages/react-formz/src/types/common.ts:51](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/common.ts#L51)

___

### Key

Ƭ **Key**: `string`

Type which can be used to index an object.

#### Defined in

[packages/react-formz/src/types/common.ts:10](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/common.ts#L10)

___

### Maybe

Ƭ **Maybe**<`T`\>: `T` \| ``null`` \| `undefined`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/react-formz/src/types/common.ts:47](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/common.ts#L47)

___

### NotEmpty

Ƭ **NotEmpty**<`T`\>: `Exclude`<`T`, ``null`` \| `undefined`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/react-formz/src/types/common.ts:49](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/common.ts#L49)

___

### ToKey

Ƭ **ToKey**<`T`\>: `T` extends [`ArrayKey`](react_formz_src_types_common.md#arraykey) ? \`${T}\` : [`AsKey`](react_formz_src_types_common.md#askey)<`T`\>

Type to convert a type to a [Key](react_formz_src_types_common.md#key).

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | type which may be converted to a [Key](react_formz_src_types_common.md#key) |

#### Defined in

[packages/react-formz/src/types/common.ts:22](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/common.ts#L22)

___

### TryAccess

Ƭ **TryAccess**<`T`, `K`\>: `K` extends keyof `T` ? `T`[`K`] : `T` extends ``null`` ? ``null`` : `undefined`

Type to access a type by a key.
 - Returns undefined if it can't be indexed by that key.
 - Returns null if the type is null.
 - Returns undefined if the type is not traversable.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | type which is indexed by the key |
| `K` | key into the type  ```ts type GetFoo = TryAccess<{foo: string}, 'foo'> = string type UndefinedKey = TryAccess<{foo: string}, 'bar'> = undefined type NullKey = TryAccess<null, 'foo'> = null type UndefinedKey = TryAccess<string, 'foo'> = undefined ``` |

#### Defined in

[packages/react-formz/src/types/common.ts:41](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/common.ts#L41)

___

### ValidKey

Ƭ **ValidKey**<`T`, `K`\>: `K` extends keyof `T` ? `K` : `never`

#### Type parameters

| Name |
| :------ |
| `T` |
| `K` |

#### Defined in

[packages/react-formz/src/types/common.ts:24](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/common.ts#L24)
