---
id: "react_formz_native_src_components_Field_Field_types.NativeFieldProps"
title: "Interface: NativeFieldProps<Value, Key, Ref>"
sidebar_label: "NativeFieldProps"
custom_edit_url: null
---

[react-formz-native/src/components/Field/Field.types](../modules/react_formz_native_src_components_Field_Field_types.md).NativeFieldProps

## Type parameters

| Name | Type |
| :------ | :------ |
| `Value` | extends [`FieldValue`](../modules/react_formz_src_types_field.md#fieldvalue) = [`FieldValue`](../modules/react_formz_src_types_field.md#fieldvalue) |
| `Key` | extends `string` = `string` |
| `Ref` | `TextInput` |

## Hierarchy

- `Omit`<[`FieldProps`](react_formz_src_types_field.FieldProps.md)<`Value`, `Key`, `Ref`\>, ``"type"``\>

  ↳ **`NativeFieldProps`**

## Properties

### as

• `Optional` **as**: `ComponentType`<[`FieldComponentProps`](react_formz_native_src_components_Field_Field_types.FieldComponentProps.md)<`Value`, `Key`, `Ref`\>\>

The component to render the ui of the field.

#### Defined in

[packages/react-formz-native/src/components/Field/Field.types.ts:79](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz-native/src/components/Field/Field.types.ts#L79)

___

### children

• `Optional` **children**: `ReactNode`

#### Inherited from

Omit.children

#### Defined in

[packages/react-formz/src/types/field.ts:57](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L57)

___

### label

• `Optional` **label**: `string`

#### Inherited from

Omit.label

#### Defined in

[packages/react-formz/src/types/field.ts:76](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L76)

___

### max

• `Optional` **max**: `number`

#### Inherited from

Omit.max

#### Defined in

[packages/react-formz/src/types/field.ts:72](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L72)

___

### min

• `Optional` **min**: `number`

#### Inherited from

Omit.min

#### Defined in

[packages/react-formz/src/types/field.ts:71](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L71)

___

### multiple

• `Optional` **multiple**: `boolean`

#### Inherited from

Omit.multiple

#### Defined in

[packages/react-formz/src/types/field.ts:75](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L75)

___

### name

• **name**: `Key`

The unique name/id of the field.

#### Inherited from

Omit.name

#### Defined in

[packages/react-formz/src/types/field.ts:56](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L56)

___

### pattern

• `Optional` **pattern**: `RegExp`

#### Inherited from

Omit.pattern

#### Defined in

[packages/react-formz/src/types/field.ts:73](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L73)

___

### placeholder

• `Optional` **placeholder**: `string`

#### Inherited from

Omit.placeholder

#### Defined in

[packages/react-formz/src/types/field.ts:74](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L74)

___

### ref

• `Optional` **ref**: `Ref`<`Ref`\>

#### Inherited from

Omit.ref

#### Defined in

[packages/react-formz/src/types/field.ts:77](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L77)

___

### required

• `Optional` **required**: `boolean`

If true, the field must have a value to not be in an error state.

#### Inherited from

Omit.required

#### Defined in

[packages/react-formz/src/types/field.ts:69](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L69)

___

### style

• `Optional` **style**: `CSSProperties`

CSS Styles to pass to the rendered component.

#### Inherited from

Omit.style

#### Defined in

[packages/react-formz/src/types/field.ts:61](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L61)

___

### type

• `Optional` **type**: `KeyboardType`

#### Defined in

[packages/react-formz-native/src/components/Field/Field.types.ts:75](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz-native/src/components/Field/Field.types.ts#L75)

___

### validate

• `Optional` **validate**: [`FieldValidator`](../modules/react_formz_src_types_field.md#fieldvalidator)<`Value`\>

#### Inherited from

Omit.validate

#### Defined in

[packages/react-formz/src/types/field.ts:70](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L70)
