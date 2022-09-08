---
id: "types_utils"
title: "Module: types/utils"
sidebar_label: "types/utils"
sidebar_position: 0
custom_edit_url: null
---

## Type Aliases

### IsNot

Ƭ **IsNot**<`T`, `U`\>: `Exclude`<`T`, `U`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[packages/react-formz/src/types/utils.ts:36](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/utils.ts#L36)

___

### IsTuple

Ƭ **IsTuple**<`T`\>: `number` extends `T`[``"length"``] ? ``false`` : ``true``

Type to query whether an array type T is a tuple type.

**`Example`**

```
IsTuple<[number]> = true
IsTuple<number[]> = false
```

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends `ReadonlyArray`<`any`\> | type which may be an array or tuple |

#### Defined in

[packages/react-formz/src/types/utils.ts:19](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/utils.ts#L19)

___

### LiteralUnion

Ƭ **LiteralUnion**<`T`\>: `T` extends `string` ? `string` & {} \| `T` : `number` & {} \| `T`

Type which defines a string or number union with the option of
specifying any string as well

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `number` |

#### Defined in

[packages/react-formz/src/types/utils.ts:42](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/utils.ts#L42)

___

### Primitive

Ƭ **Primitive**: ``null`` \| `undefined` \| `string` \| `number` \| `boolean` \| `symbol` \| `bigint`

#### Defined in

[packages/react-formz/src/types/utils.ts:1](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/utils.ts#L1)

___

### TupleKeys

Ƭ **TupleKeys**<`T`\>: `Exclude`<keyof `T`, keyof `any`[]\>

Type which given a tuple type returns its own keys, i.e. only its indices.

**`Example`**

```
TupleKeys<[number, string]> = '0' | '1'
```

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends `ReadonlyArray`<`any`\> | tuple type |

#### Defined in

[packages/react-formz/src/types/utils.ts:31](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/utils.ts#L31)
