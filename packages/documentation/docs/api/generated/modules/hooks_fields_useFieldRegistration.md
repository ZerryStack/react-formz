---
id: "hooks_fields_useFieldRegistration"
title: "Module: hooks/fields/useFieldRegistration"
sidebar_label: "hooks/fields/useFieldRegistration"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### useFieldRegistration

▸ **useFieldRegistration**(`formId`, `fieldId`, `validate`, `type`): `void`

Registers a field with the field store. The field store holds information about specific
fields and is used to call field functions at various times.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `formId` | `string` | The form id |
| `fieldId` | `string` | The name of the field |
| `validate` | () => `Promise`<`boolean`\> | The validate function |
| `type` | `HTMLInputTypeAttribute` | - |

#### Returns

`void`

#### Defined in

[packages/react-formz/src/hooks/fields/useFieldRegistration.ts:12](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/fields/useFieldRegistration.ts#L12)
