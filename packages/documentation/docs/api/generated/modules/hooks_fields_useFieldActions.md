---
id: "hooks_fields_useFieldActions"
title: "Module: hooks/fields/useFieldActions"
sidebar_label: "hooks/fields/useFieldActions"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [FieldActions](../interfaces/hooks_fields_useFieldActions.FieldActions.md)

## Functions

### useFieldActions

▸ **useFieldActions**<`Value`\>(`formId`, `fieldName`): [`FieldActions`](../interfaces/hooks_fields_useFieldActions.FieldActions.md)<`Value`\>

Custom hook that returns an object of actions one can take on a field.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Value` | extends [`FieldValue`](types_field.md#fieldvalue) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `formId` | `string` | The id of the form |
| `fieldName` | `string` | The name of the field |

#### Returns

[`FieldActions`](../interfaces/hooks_fields_useFieldActions.FieldActions.md)<`Value`\>

#### Defined in

[packages/react-formz/src/hooks/fields/useFieldActions.ts:16](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/fields/useFieldActions.ts#L16)
