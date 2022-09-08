---
id: "hooks_utils_useStableCallback"
title: "Module: hooks/utils/useStableCallback"
sidebar_label: "hooks/utils/useStableCallback"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### useStableCallback

▸ **useStableCallback**<`T`\>(`fn`): `T`

Returns a memoized version of your function that maintains a stable reference, but
also can read the latest scope (props and state) of the component in which it is used.

See: https://github.com/facebook/react/issues/14099

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`args`: `any`[]) => `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | `T` | The function to call. |

#### Returns

`T`

#### Defined in

[packages/react-formz/src/hooks/utils/useStableCallback.ts:11](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/utils/useStableCallback.ts#L11)
