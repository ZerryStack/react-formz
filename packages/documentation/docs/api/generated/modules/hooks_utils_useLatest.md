---
id: "hooks_utils_useLatest"
title: "Module: hooks/utils/useLatest"
sidebar_label: "hooks/utils/useLatest"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### useLatest

▸ **useLatest**<`Value`\>(`value`): `Value`

React state hook that returns the latest state as described in the React hooks FAQ.
This is mostly useful to get access to the latest value of some props or state 
inside an asynchronous callback, instead of that value at the time the callback 
was created from.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Value` | extends `unknown` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `Value` | The value to return. |

#### Returns

`Value`

#### Defined in

[packages/react-formz/src/hooks/utils/useLatest.ts:10](https://github.com/ZerryStack/react-formz/blob/1ba1704/packages/react-formz/src/hooks/utils/useLatest.ts#L10)
