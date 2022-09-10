---
id: "hooks_utils_useStableValue"
title: "Module: hooks/utils/useStableValue"
sidebar_label: "hooks/utils/useStableValue"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### useStableValue

▸ **useStableValue**<`Value`\>(`value`): `Value`

React hook that caches some value and does not change it. Useful for when
you want to maintain a reference to a function or an object and don't want
it to change.

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

packages/react-formz/src/hooks/utils/useStableValue.ts:9
