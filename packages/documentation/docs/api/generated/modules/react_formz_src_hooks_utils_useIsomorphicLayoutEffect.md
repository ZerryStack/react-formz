---
id: "react_formz_src_hooks_utils_useIsomorphicLayoutEffect"
title: "Module: react-formz/src/hooks/utils/useIsomorphicLayoutEffect"
sidebar_label: "react-formz/src/hooks/utils/useIsomorphicLayoutEffect"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### useIsomorphicLayoutEffect

▸ **useIsomorphicLayoutEffect**(`effect`, `deps?`): `void`

The signature is identical to `useEffect`, but it fires synchronously after all DOM mutations.
Use this to read layout from the DOM and synchronously re-render. Updates scheduled inside
`useLayoutEffect` will be flushed synchronously, before the browser has a chance to paint.

Prefer the standard `useEffect` when possible to avoid blocking visual updates.

If you’re migrating code from a class component, `useLayoutEffect` fires in the same phase as
`componentDidMount` and `componentDidUpdate`.

**`Version`**

16.8.0

**`See`**

https://reactjs.org/docs/hooks-reference.html#uselayouteffect

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | `EffectCallback` |
| `deps?` | `DependencyList` |

#### Returns

`void`

#### Defined in

node_modules/@types/react/index.d.ts:1049
