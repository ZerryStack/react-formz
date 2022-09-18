---
id: "react_formz_src_types_events.FormzChangeEvent"
title: "Interface: FormzChangeEvent<T>"
sidebar_label: "FormzChangeEvent"
custom_edit_url: null
---

[react-formz/src/types/events](../modules/react_formz_src_types_events.md).FormzChangeEvent

For easy compatability with third party UI libraries we limit the required properties
for the `ChangeEvent` to just the one we need which is `target`. Most libraries include
at least target but not all include the entire react change event.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `Element` |

## Hierarchy

- `Pick`<`React.ChangeEvent`<`T`\>, ``"target"``\>

  ↳ **`FormzChangeEvent`**
