---
id: "hooks_fields_useField"
title: "Module: hooks/fields/useField"
sidebar_label: "hooks/fields/useField"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [UseFieldOptions](../interfaces/hooks_fields_useField.UseFieldOptions.md)
- [UseFieldResult](../interfaces/hooks_fields_useField.UseFieldResult.md)

## Functions

### useBooleanField

▸ **useBooleanField**<`Key`\>(`name`, `options`): [`UseFieldResult`](../interfaces/hooks_fields_useField.UseFieldResult.md)<`boolean`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | extends `string` = `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `Key` |
| `options` | [`UseFieldOptions`](../interfaces/hooks_fields_useField.UseFieldOptions.md)<`boolean`\> |

#### Returns

[`UseFieldResult`](../interfaces/hooks_fields_useField.UseFieldResult.md)<`boolean`\>

#### Defined in

[packages/react-formz/src/hooks/fields/useField.ts:71](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/fields/useField.ts#L71)

___

### useField

▸ **useField**<`Key`, `Value`\>(`name`, `options`): [`UseFieldResult`](../interfaces/hooks_fields_useField.UseFieldResult.md)<`Value`\>

Custom hook to plugin to the state of a specific input field. You can use this to
build your own input primitives if you so desire.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | extends `string` = `string` |
| `Value` | extends [`FieldValue`](types_field.md#fieldvalue) = [`FieldValue`](types_field.md#fieldvalue) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `Key` | The name of the input field. |
| `options` | [`UseFieldOptions`](../interfaces/hooks_fields_useField.UseFieldOptions.md)<`Value`\> | Options to customize behaviour. |

#### Returns

[`UseFieldResult`](../interfaces/hooks_fields_useField.UseFieldResult.md)<`Value`\>

#### Defined in

[packages/react-formz/src/hooks/fields/useField.ts:33](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/fields/useField.ts#L33)

___

### useNumberField

▸ **useNumberField**<`Key`\>(`name`, `options`): [`UseFieldResult`](../interfaces/hooks_fields_useField.UseFieldResult.md)<`number`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | extends `string` = `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `Key` |
| `options` | [`UseFieldOptions`](../interfaces/hooks_fields_useField.UseFieldOptions.md)<`number`\> |

#### Returns

[`UseFieldResult`](../interfaces/hooks_fields_useField.UseFieldResult.md)<`number`\>

#### Defined in

[packages/react-formz/src/hooks/fields/useField.ts:67](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/fields/useField.ts#L67)
