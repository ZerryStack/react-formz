---
id: "hooks_fields_useFieldEvents"
title: "Module: hooks/fields/useFieldEvents"
sidebar_label: "hooks/fields/useFieldEvents"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### useFieldEvents

▸ **useFieldEvents**(`formId`, `fieldName`, `validate`): `Object`

Custom react hook that returns event handlers for a field.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `formId` | `string` | The form id |
| `fieldName` | `string` | The field name |
| `validate` | () => `Promise`<`boolean`\> | The field validate function. |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `onBlur` | (`_`: `FocusEvent`<`any`, `Element`\>) => `void` |
| `onChange` | (`event`: [`FormzChangeEvent`](../interfaces/types_events.FormzChangeEvent.md)<`any`\>) => `void` |

#### Defined in

[packages/react-formz/src/hooks/fields/useFieldEvents.ts:11](https://github.com/ZerryStack/react-formz/blob/1ba1704/packages/react-formz/src/hooks/fields/useFieldEvents.ts#L11)
