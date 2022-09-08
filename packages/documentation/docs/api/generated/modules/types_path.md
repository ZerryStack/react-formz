---
id: "types_path"
title: "Module: types/path"
sidebar_label: "types/path"
sidebar_position: 0
custom_edit_url: null
---

## Type Aliases

### Path

Ƭ **Path**<`T`\>: `T` extends `ReadonlyArray`<infer V\> ? [`IsTuple`](types_utils.md#istuple)<`T`\> extends ``true`` ? { [K in TupleKeys<T\>]-?: PathImpl<K & string, T[K]\> }[[`TupleKeys`](types_utils.md#tuplekeys)<`T`\>] : `PathImpl`<[`ArrayKey`](types_common.md#arraykey), `V`\> : { [K in keyof T]-?: PathImpl<K & string, T[K]\> }[keyof `T`]

Type which eagerly collects all paths through a type

**`Example`**

```
Path<{foo: {bar: string}}> = 'foo' | 'foo.bar'
```

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | type which should be introspected |

#### Defined in

[packages/react-formz/src/types/path.ts:20](https://github.com/ZerryStack/react-formz/blob/1ba1704/packages/react-formz/src/types/path.ts#L20)
