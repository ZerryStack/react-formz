---
id: "react_formz_src_hooks_fields_useField.UseFieldOptions"
title: "Interface: UseFieldOptions<Value>"
sidebar_label: "UseFieldOptions"
custom_edit_url: null
---

[react-formz/src/hooks/fields/useField](../modules/react_formz_src_hooks_fields_useField.md).UseFieldOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `Value` | extends [`FieldValue`](../modules/react_formz_src_types_field.md#fieldvalue) |

## Hierarchy

- [`UseFieldValidationOptions`](react_formz_src_hooks_fields_useFieldValidation.UseFieldValidationOptions.md)<`Value`\>

  ↳ **`UseFieldOptions`**

## Properties

### label

• `Optional` **label**: `string`

#### Overrides

[UseFieldValidationOptions](react_formz_src_hooks_fields_useFieldValidation.UseFieldValidationOptions.md).[label](react_formz_src_hooks_fields_useFieldValidation.UseFieldValidationOptions.md#label)

#### Defined in

[packages/react-formz/src/hooks/fields/useField.ts:16](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/fields/useField.ts#L16)

___

### max

• `Optional` **max**: `number`

#### Inherited from

[UseFieldValidationOptions](react_formz_src_hooks_fields_useFieldValidation.UseFieldValidationOptions.md).[max](react_formz_src_hooks_fields_useFieldValidation.UseFieldValidationOptions.md#max)

#### Defined in

[packages/react-formz/src/hooks/fields/useFieldValidation.ts:18](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/fields/useFieldValidation.ts#L18)

___

### min

• `Optional` **min**: `number`

#### Inherited from

[UseFieldValidationOptions](react_formz_src_hooks_fields_useFieldValidation.UseFieldValidationOptions.md).[min](react_formz_src_hooks_fields_useFieldValidation.UseFieldValidationOptions.md#min)

#### Defined in

[packages/react-formz/src/hooks/fields/useFieldValidation.ts:17](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/fields/useFieldValidation.ts#L17)

___

### pattern

• `Optional` **pattern**: `RegExp`

#### Inherited from

[UseFieldValidationOptions](react_formz_src_hooks_fields_useFieldValidation.UseFieldValidationOptions.md).[pattern](react_formz_src_hooks_fields_useFieldValidation.UseFieldValidationOptions.md#pattern)

#### Defined in

[packages/react-formz/src/hooks/fields/useFieldValidation.ts:19](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/fields/useFieldValidation.ts#L19)

___

### required

• `Optional` **required**: `boolean`

#### Inherited from

[UseFieldValidationOptions](react_formz_src_hooks_fields_useFieldValidation.UseFieldValidationOptions.md).[required](react_formz_src_hooks_fields_useFieldValidation.UseFieldValidationOptions.md#required)

#### Defined in

[packages/react-formz/src/hooks/fields/useFieldValidation.ts:16](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/fields/useFieldValidation.ts#L16)

___

### type

• `Optional` **type**: `string`

#### Defined in

[packages/react-formz/src/hooks/fields/useField.ts:15](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/fields/useField.ts#L15)

___

### validate

• `Optional` **validate**: [`FieldValidator`](../modules/react_formz_src_types_field.md#fieldvalidator)<`Value`\>

#### Inherited from

[UseFieldValidationOptions](react_formz_src_hooks_fields_useFieldValidation.UseFieldValidationOptions.md).[validate](react_formz_src_hooks_fields_useFieldValidation.UseFieldValidationOptions.md#validate)

#### Defined in

[packages/react-formz/src/hooks/fields/useFieldValidation.ts:15](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/fields/useFieldValidation.ts#L15)
