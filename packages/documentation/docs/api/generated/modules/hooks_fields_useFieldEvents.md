---
id: "hooks_fields_useFieldEvents"
title: "Module: hooks/fields/useFieldEvents"
sidebar_label: "hooks/fields/useFieldEvents"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [FieldEevents](../interfaces/hooks_fields_useFieldEvents.FieldEevents.md)

## Functions

### useFieldEvents

▸ **useFieldEvents**<`Value`\>(`formId`, `fieldName`, `validate`): [`FieldEevents`](../interfaces/hooks_fields_useFieldEvents.FieldEevents.md)<`Value`\>

Custom react hook that returns event handlers for a field.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Value` | extends [`FieldValue`](types_field.md#fieldvalue) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `formId` | `string` | The form id |
| `fieldName` | `string` | The field name |
| `validate` | () => `Promise`<`boolean`\> | The field validate function. |

#### Returns

[`FieldEevents`](../interfaces/hooks_fields_useFieldEvents.FieldEevents.md)<`Value`\>

#### Defined in

[packages/react-formz/src/hooks/fields/useFieldEvents.ts:30](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/fields/useFieldEvents.ts#L30)
