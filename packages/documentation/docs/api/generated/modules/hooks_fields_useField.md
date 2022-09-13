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

▸ **useBooleanField**<`Key`\>(`name`, `options`): [`UseFieldResult`](../interfaces/hooks_fields_useField.UseFieldResult.md)<`undefined` \| `boolean`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | extends `string` = `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `Key` |
| `options` | [`UseFieldOptions`](../interfaces/hooks_fields_useField.UseFieldOptions.md)<`undefined` \| `boolean`\> |

#### Returns

[`UseFieldResult`](../interfaces/hooks_fields_useField.UseFieldResult.md)<`undefined` \| `boolean`\>

#### Defined in

[packages/react-formz/src/hooks/fields/useField.ts:75](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/fields/useField.ts#L75)

___

### useCustomField

▸ **useCustomField**<`Value`, `Key`\>(`name`, `options`): [`UseFieldResult`](../interfaces/hooks_fields_useField.UseFieldResult.md)<`Value`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Value` | extends [`FieldValue`](types_field.md#fieldvalue) |
| `Key` | extends `string` = `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `Key` |
| `options` | [`UseFieldOptions`](../interfaces/hooks_fields_useField.UseFieldOptions.md)<`Value`\> |

#### Returns

[`UseFieldResult`](../interfaces/hooks_fields_useField.UseFieldResult.md)<`Value`\>

#### Defined in

[packages/react-formz/src/hooks/fields/useField.ts:91](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/fields/useField.ts#L91)

___

### useDateField

▸ **useDateField**<`Key`\>(`name`, `options`): [`UseFieldResult`](../interfaces/hooks_fields_useField.UseFieldResult.md)<`undefined` \| `string`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | extends `string` = `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `Key` |
| `options` | [`UseFieldOptions`](../interfaces/hooks_fields_useField.UseFieldOptions.md)<`undefined` \| `string`\> |

#### Returns

[`UseFieldResult`](../interfaces/hooks_fields_useField.UseFieldResult.md)<`undefined` \| `string`\>

#### Defined in

[packages/react-formz/src/hooks/fields/useField.ts:87](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/fields/useField.ts#L87)

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

▸ **useNumberField**<`Key`\>(`name`, `options`): [`UseFieldResult`](../interfaces/hooks_fields_useField.UseFieldResult.md)<`undefined` \| `number`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | extends `string` = `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `Key` |
| `options` | [`UseFieldOptions`](../interfaces/hooks_fields_useField.UseFieldOptions.md)<`undefined` \| `number`\> |

#### Returns

[`UseFieldResult`](../interfaces/hooks_fields_useField.UseFieldResult.md)<`undefined` \| `number`\>

#### Defined in

[packages/react-formz/src/hooks/fields/useField.ts:71](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/fields/useField.ts#L71)

___

### useRadioField

▸ **useRadioField**<`Key`\>(`name`, `options`): [`UseFieldResult`](../interfaces/hooks_fields_useField.UseFieldResult.md)<`undefined` \| `string`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | extends `string` = `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `Key` |
| `options` | [`UseFieldOptions`](../interfaces/hooks_fields_useField.UseFieldOptions.md)<`undefined` \| `string`\> |

#### Returns

[`UseFieldResult`](../interfaces/hooks_fields_useField.UseFieldResult.md)<`undefined` \| `string`\>

#### Defined in

[packages/react-formz/src/hooks/fields/useField.ts:79](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/fields/useField.ts#L79)

___

### useSelectField

▸ **useSelectField**<`Key`\>(`name`, `options`): [`UseFieldResult`](../interfaces/hooks_fields_useField.UseFieldResult.md)<`undefined` \| `string`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | extends `string` = `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `Key` |
| `options` | [`UseFieldOptions`](../interfaces/hooks_fields_useField.UseFieldOptions.md)<`undefined` \| `string`\> |

#### Returns

[`UseFieldResult`](../interfaces/hooks_fields_useField.UseFieldResult.md)<`undefined` \| `string`\>

#### Defined in

[packages/react-formz/src/hooks/fields/useField.ts:83](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/fields/useField.ts#L83)

___

### useTextField

▸ **useTextField**<`Key`\>(`name`, `options`): [`UseFieldResult`](../interfaces/hooks_fields_useField.UseFieldResult.md)<`undefined` \| `string`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | extends `string` = `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `Key` |
| `options` | [`UseFieldOptions`](../interfaces/hooks_fields_useField.UseFieldOptions.md)<`undefined` \| `string`\> |

#### Returns

[`UseFieldResult`](../interfaces/hooks_fields_useField.UseFieldResult.md)<`undefined` \| `string`\>

#### Defined in

[packages/react-formz/src/hooks/fields/useField.ts:67](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/fields/useField.ts#L67)
