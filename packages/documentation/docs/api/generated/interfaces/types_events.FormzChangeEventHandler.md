---
id: "types_events.FormzChangeEventHandler"
title: "Interface: FormzChangeEventHandler<V, T>"
sidebar_label: "FormzChangeEventHandler"
custom_edit_url: null
---

[types/events](../modules/types_events.md).FormzChangeEventHandler

## Type parameters

| Name | Type |
| :------ | :------ |
| `V` | extends [`FieldValue`](../modules/types_field.md#fieldvalue) |
| `T` | `Element` |

## Callable

### FormzChangeEventHandler

▸ **FormzChangeEventHandler**(`event`): `void`

Custom change event handler using

**`Link`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`FormzChangeEvent`](types_events.FormzChangeEvent.md)<`T`\> |

#### Returns

`void`

#### Defined in

[packages/react-formz/src/types/events.ts:16](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/events.ts#L16)

### FormzChangeEventHandler

▸ **FormzChangeEventHandler**(`value`): `void`

Custom change event handler using

**`Link`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `V` |

#### Returns

`void`

#### Defined in

[packages/react-formz/src/types/events.ts:17](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/events.ts#L17)
