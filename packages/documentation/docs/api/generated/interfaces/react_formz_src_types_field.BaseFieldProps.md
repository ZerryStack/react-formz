---
id: "react_formz_src_types_field.BaseFieldProps"
title: "Interface: BaseFieldProps<Value, Key, Ref>"
sidebar_label: "BaseFieldProps"
custom_edit_url: null
---

[react-formz/src/types/field](../modules/react_formz_src_types_field.md).BaseFieldProps

## Type parameters

| Name | Type |
| :------ | :------ |
| `Value` | extends [`FieldValue`](../modules/react_formz_src_types_field.md#fieldvalue) = [`FieldValue`](../modules/react_formz_src_types_field.md#fieldvalue) |
| `Key` | extends [`FieldId`](../modules/react_formz_src_types_field.md#fieldid) = [`FieldId`](../modules/react_formz_src_types_field.md#fieldid) |
| `Ref` | `unknown` |

## Properties

### as

• `Optional` **as**: `ComponentType`<[`FieldComponentProps`](../modules/react_formz_src_types_field.md#fieldcomponentprops)<`Value`, `Key`, `Ref`\>\>

The component to render the ui of the field.

#### Defined in

[packages/react-formz/src/types/field.ts:124](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L124)

___

### children

• `Optional` **children**: `ReactNode`

#### Defined in

[packages/react-formz/src/types/field.ts:127](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L127)

___

### label

• `Optional` **label**: `string`

#### Defined in

[packages/react-formz/src/types/field.ts:146](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L146)

___

### max

• `Optional` **max**: `number`

#### Defined in

[packages/react-formz/src/types/field.ts:142](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L142)

___

### min

• `Optional` **min**: `number`

#### Defined in

[packages/react-formz/src/types/field.ts:141](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L141)

___

### multiple

• `Optional` **multiple**: `boolean`

#### Defined in

[packages/react-formz/src/types/field.ts:145](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L145)

___

### name

• **name**: `Key`

The unique name/id of the field.

#### Defined in

[packages/react-formz/src/types/field.ts:120](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L120)

___

### pattern

• `Optional` **pattern**: `RegExp`

#### Defined in

[packages/react-formz/src/types/field.ts:143](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L143)

___

### placeholder

• `Optional` **placeholder**: `string`

#### Defined in

[packages/react-formz/src/types/field.ts:144](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L144)

___

### ref

• `Optional` **ref**: `Ref`<`Ref`\>

#### Defined in

[packages/react-formz/src/types/field.ts:147](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L147)

___

### required

• `Optional` **required**: `boolean`

If true, the field must have a value to not be in an error state.

#### Defined in

[packages/react-formz/src/types/field.ts:139](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L139)

___

### style

• `Optional` **style**: `CSSProperties`

CSS Styles to pass to the rendered component.

#### Defined in

[packages/react-formz/src/types/field.ts:131](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L131)

___

### type

• `Optional` **type**: `string`

The input type.

#### Defined in

[packages/react-formz/src/types/field.ts:135](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L135)

___

### validate

• `Optional` **validate**: [`FieldValidator`](../modules/react_formz_src_types_field.md#fieldvalidator)<`Value`\>

#### Defined in

[packages/react-formz/src/types/field.ts:140](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/field.ts#L140)
