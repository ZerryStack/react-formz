---
id: "react_formz_src_hooks_fields_useDependentField"
title: "Module: react-formz/src/hooks/fields/useDependentField"
sidebar_label: "react-formz/src/hooks/fields/useDependentField"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [UseDependentFieldOptions](../interfaces/react_formz_src_hooks_fields_useDependentField.UseDependentFieldOptions.md)

## Functions

### useDependentBooleanField

▸ **useDependentBooleanField**<`Values`, `Key`, `DependentValues`\>(`name`, `options`): [`UseFieldResult`](../interfaces/react_formz_src_hooks_fields_useField.UseFieldResult.md)<`boolean`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Values` | extends [`FormzValues`](react_formz_src_types_form.md#formzvalues) |
| `Key` | extends `string` = `string` |
| `DependentValues` | extends `Partial`<`Values`\> = `Partial`<`Values`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `Key` |
| `options` | [`UseDependentFieldOptions`](../interfaces/react_formz_src_hooks_fields_useDependentField.UseDependentFieldOptions.md)<`Values`, `boolean`, `DependentValues`\> |

#### Returns

[`UseFieldResult`](../interfaces/react_formz_src_hooks_fields_useField.UseFieldResult.md)<`boolean`\>

#### Defined in

[packages/react-formz/src/hooks/fields/useDependentField.ts:81](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/fields/useDependentField.ts#L81)

___

### useDependentCustomField

▸ **useDependentCustomField**<`Values`, `Value`, `Key`, `DependentValues`\>(`name`, `options`): [`UseFieldResult`](../interfaces/react_formz_src_hooks_fields_useField.UseFieldResult.md)<`Value`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Values` | extends [`FormzValues`](react_formz_src_types_form.md#formzvalues) |
| `Value` | extends [`FieldValue`](react_formz_src_types_field.md#fieldvalue) = [`FieldValue`](react_formz_src_types_field.md#fieldvalue) |
| `Key` | extends `string` = `string` |
| `DependentValues` | extends `Partial`<`Values`\> = `Partial`<`Values`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `Key` |
| `options` | [`UseDependentFieldOptions`](../interfaces/react_formz_src_hooks_fields_useDependentField.UseDependentFieldOptions.md)<`Values`, `Value`, `DependentValues`\> |

#### Returns

[`UseFieldResult`](../interfaces/react_formz_src_hooks_fields_useField.UseFieldResult.md)<`Value`\>

#### Defined in

[packages/react-formz/src/hooks/fields/useDependentField.ts:123](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/fields/useDependentField.ts#L123)

___

### useDependentField

▸ **useDependentField**<`Values`, `Value`, `Key`, `DependentValues`\>(`name`, `options`): [`UseFieldResult`](../interfaces/react_formz_src_hooks_fields_useField.UseFieldResult.md)<`Value`\>

A `DependentField` is a field that depends on the value of another field or fields in
its owner `Form`. The `useDependentField` hook has the exact same interface except with the added
ability to respond to changes in other fields within its parent form.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Values` | extends [`FormzValues`](react_formz_src_types_form.md#formzvalues) |
| `Value` | extends [`FieldValue`](react_formz_src_types_field.md#fieldvalue) = [`FieldValue`](react_formz_src_types_field.md#fieldvalue) |
| `Key` | extends `string` = `string` |
| `DependentValues` | extends `Partial`<`Values`\> = `Partial`<`Values`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `Key` | - |
| `options` | [`UseDependentFieldOptions`](../interfaces/react_formz_src_hooks_fields_useDependentField.UseDependentFieldOptions.md)<`Values`, `Value`, `DependentValues`\> | [UseDependentFieldOptions](../interfaces/react_formz_src_hooks_fields_useDependentField.UseDependentFieldOptions.md) - The hook options. |

#### Returns

[`UseFieldResult`](../interfaces/react_formz_src_hooks_fields_useField.UseFieldResult.md)<`Value`\>

#### Defined in

[packages/react-formz/src/hooks/fields/useDependentField.ts:27](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/fields/useDependentField.ts#L27)

___

### useDependentNumberField

▸ **useDependentNumberField**<`Values`, `Key`, `DependentValues`\>(`name`, `options`): [`UseFieldResult`](../interfaces/react_formz_src_hooks_fields_useField.UseFieldResult.md)<`undefined` \| `number`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Values` | extends [`FormzValues`](react_formz_src_types_form.md#formzvalues) |
| `Key` | extends `string` = `string` |
| `DependentValues` | extends `Partial`<`Values`\> = `Partial`<`Values`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `Key` |
| `options` | [`UseDependentFieldOptions`](../interfaces/react_formz_src_hooks_fields_useDependentField.UseDependentFieldOptions.md)<`Values`, `undefined` \| `number`, `DependentValues`\> |

#### Returns

[`UseFieldResult`](../interfaces/react_formz_src_hooks_fields_useField.UseFieldResult.md)<`undefined` \| `number`\>

#### Defined in

[packages/react-formz/src/hooks/fields/useDependentField.ts:67](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/fields/useDependentField.ts#L67)

___

### useDependentRadioField

▸ **useDependentRadioField**<`Values`, `Key`, `DependentValues`\>(`name`, `options`): [`UseFieldResult`](../interfaces/react_formz_src_hooks_fields_useField.UseFieldResult.md)<`undefined` \| `string`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Values` | extends [`FormzValues`](react_formz_src_types_form.md#formzvalues) |
| `Key` | extends `string` = `string` |
| `DependentValues` | extends `Partial`<`Values`\> = `Partial`<`Values`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `Key` |
| `options` | [`UseDependentFieldOptions`](../interfaces/react_formz_src_hooks_fields_useDependentField.UseDependentFieldOptions.md)<`Values`, `undefined` \| `string`, `DependentValues`\> |

#### Returns

[`UseFieldResult`](../interfaces/react_formz_src_hooks_fields_useField.UseFieldResult.md)<`undefined` \| `string`\>

#### Defined in

[packages/react-formz/src/hooks/fields/useDependentField.ts:95](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/fields/useDependentField.ts#L95)

___

### useDependentSelectField

▸ **useDependentSelectField**<`Values`, `Key`, `DependentValues`\>(`name`, `options`): [`UseFieldResult`](../interfaces/react_formz_src_hooks_fields_useField.UseFieldResult.md)<`undefined` \| `string`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Values` | extends [`FormzValues`](react_formz_src_types_form.md#formzvalues) |
| `Key` | extends `string` = `string` |
| `DependentValues` | extends `Partial`<`Values`\> = `Partial`<`Values`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `Key` |
| `options` | [`UseDependentFieldOptions`](../interfaces/react_formz_src_hooks_fields_useDependentField.UseDependentFieldOptions.md)<`Values`, `undefined` \| `string`, `DependentValues`\> |

#### Returns

[`UseFieldResult`](../interfaces/react_formz_src_hooks_fields_useField.UseFieldResult.md)<`undefined` \| `string`\>

#### Defined in

[packages/react-formz/src/hooks/fields/useDependentField.ts:109](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/fields/useDependentField.ts#L109)

___

### useDependentTextField

▸ **useDependentTextField**<`Values`, `Key`, `DependentValues`\>(`name`, `options`): [`UseFieldResult`](../interfaces/react_formz_src_hooks_fields_useField.UseFieldResult.md)<`undefined` \| `string`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Values` | extends [`FormzValues`](react_formz_src_types_form.md#formzvalues) |
| `Key` | extends `string` = `string` |
| `DependentValues` | extends `Partial`<`Values`\> = `Partial`<`Values`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `Key` |
| `options` | [`UseDependentFieldOptions`](../interfaces/react_formz_src_hooks_fields_useDependentField.UseDependentFieldOptions.md)<`Values`, `undefined` \| `string`, `DependentValues`\> |

#### Returns

[`UseFieldResult`](../interfaces/react_formz_src_hooks_fields_useField.UseFieldResult.md)<`undefined` \| `string`\>

#### Defined in

[packages/react-formz/src/hooks/fields/useDependentField.ts:53](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/fields/useDependentField.ts#L53)
