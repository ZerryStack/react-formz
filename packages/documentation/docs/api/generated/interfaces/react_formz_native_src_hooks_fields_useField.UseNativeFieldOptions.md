---
id: "react_formz_native_src_hooks_fields_useField.UseNativeFieldOptions"
title: "Interface: UseNativeFieldOptions<Value>"
sidebar_label: "UseNativeFieldOptions"
custom_edit_url: null
---

[react-formz-native/src/hooks/fields/useField](../modules/react_formz_native_src_hooks_fields_useField.md).UseNativeFieldOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `Value` | extends [`FieldValue`](../modules/react_formz_src_types_field.md#fieldvalue) = [`FieldValue`](../modules/react_formz_src_types_field.md#fieldvalue) |

## Hierarchy

- `Omit`<[`UseFieldOptions`](react_formz_src_hooks_fields_useField.UseFieldOptions.md)<`Value`\>, ``"type"``\>

  ↳ **`UseNativeFieldOptions`**

## Properties

### label

• `Optional` **label**: `string`

#### Inherited from

Omit.label

#### Defined in

[packages/react-formz/src/hooks/fields/useField.ts:16](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/fields/useField.ts#L16)

___

### max

• `Optional` **max**: `number`

#### Inherited from

Omit.max

#### Defined in

[packages/react-formz/src/hooks/fields/useFieldValidation.ts:18](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/fields/useFieldValidation.ts#L18)

___

### min

• `Optional` **min**: `number`

#### Inherited from

Omit.min

#### Defined in

[packages/react-formz/src/hooks/fields/useFieldValidation.ts:17](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/fields/useFieldValidation.ts#L17)

___

### pattern

• `Optional` **pattern**: `RegExp`

#### Inherited from

Omit.pattern

#### Defined in

[packages/react-formz/src/hooks/fields/useFieldValidation.ts:19](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/fields/useFieldValidation.ts#L19)

___

### required

• `Optional` **required**: `boolean`

#### Inherited from

Omit.required

#### Defined in

[packages/react-formz/src/hooks/fields/useFieldValidation.ts:16](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/fields/useFieldValidation.ts#L16)

___

### type

• `Optional` **type**: `KeyboardType`

#### Defined in

[packages/react-formz-native/src/hooks/fields/useField.ts:11](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz-native/src/hooks/fields/useField.ts#L11)

___

### validate

• `Optional` **validate**: [`FieldValidator`](../modules/react_formz_src_types_field.md#fieldvalidator)<`Value`\>

#### Inherited from

Omit.validate

#### Defined in

[packages/react-formz/src/hooks/fields/useFieldValidation.ts:15](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/fields/useFieldValidation.ts#L15)
