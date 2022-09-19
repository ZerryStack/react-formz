---
id: "react_formz_src_types_field.FieldProps"
title: "Interface: FieldProps<Value, Key, Ref>"
sidebar_label: "FieldProps"
custom_edit_url: null
---

[react-formz/src/types/field](../modules/react_formz_src_types_field.md).FieldProps

## Type parameters

| Name | Type |
| :------ | :------ |
| `Value` | extends [`FieldValue`](../modules/react_formz_src_types_field.md#fieldvalue) = [`FieldValue`](../modules/react_formz_src_types_field.md#fieldvalue) |
| `Key` | extends [`FieldId`](../modules/react_formz_src_types_field.md#fieldid) = [`FieldId`](../modules/react_formz_src_types_field.md#fieldid) |
| `Ref` | `unknown` |

## Properties

### children

• `Optional` **children**: `ReactNode`

#### Defined in

[packages/react-formz/src/types/field.ts:57](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L57)

___

### label

• `Optional` **label**: `string`

#### Defined in

[packages/react-formz/src/types/field.ts:76](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L76)

___

### max

• `Optional` **max**: `number`

#### Defined in

[packages/react-formz/src/types/field.ts:72](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L72)

___

### min

• `Optional` **min**: `number`

#### Defined in

[packages/react-formz/src/types/field.ts:71](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L71)

___

### multiple

• `Optional` **multiple**: `boolean`

#### Defined in

[packages/react-formz/src/types/field.ts:75](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L75)

___

### name

• **name**: `Key`

The unique name/id of the field.

#### Defined in

[packages/react-formz/src/types/field.ts:56](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L56)

___

### pattern

• `Optional` **pattern**: `RegExp`

#### Defined in

[packages/react-formz/src/types/field.ts:73](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L73)

___

### placeholder

• `Optional` **placeholder**: `string`

#### Defined in

[packages/react-formz/src/types/field.ts:74](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L74)

___

### ref

• `Optional` **ref**: `Ref`<`Ref`\>

#### Defined in

[packages/react-formz/src/types/field.ts:77](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L77)

___

### required

• `Optional` **required**: `boolean`

If true, the field must have a value to not be in an error state.

#### Defined in

[packages/react-formz/src/types/field.ts:69](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L69)

___

### style

• `Optional` **style**: `CSSProperties`

CSS Styles to pass to the rendered component.

#### Defined in

[packages/react-formz/src/types/field.ts:61](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L61)

___

### type

• `Optional` **type**: `string`

The input type.

#### Defined in

[packages/react-formz/src/types/field.ts:65](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L65)

___

### validate

• `Optional` **validate**: [`FieldValidator`](../modules/react_formz_src_types_field.md#fieldvalidator)<`Value`\>

#### Defined in

[packages/react-formz/src/types/field.ts:70](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L70)
