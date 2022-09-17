---
id: "components_Field_Field_types.BaseFieldProps"
title: "Interface: BaseFieldProps<Value, Key, Ref>"
sidebar_label: "BaseFieldProps"
custom_edit_url: null
---

[components/Field/Field.types](../modules/components_Field_Field_types.md).BaseFieldProps

## Type parameters

| Name | Type |
| :------ | :------ |
| `Value` | extends [`FieldValue`](../modules/types_field.md#fieldvalue) = [`FieldValue`](../modules/types_field.md#fieldvalue) |
| `Key` | extends [`FieldId`](../modules/types_field.md#fieldid) = [`FieldId`](../modules/types_field.md#fieldid) |
| `Ref` | `unknown` |

## Properties

### as

• `Optional` **as**: `ComponentType`<[`FieldComponentProps`](../modules/components_Field_Field_types.md#fieldcomponentprops)<`Value`, `Key`, `Ref`\>\>

The component to render the ui of the field.

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:82](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L82)

___

### children

• `Optional` **children**: `ReactNode`

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:85](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L85)

___

### label

• `Optional` **label**: `string`

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:104](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L104)

___

### max

• `Optional` **max**: `number`

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:100](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L100)

___

### min

• `Optional` **min**: `number`

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:99](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L99)

___

### multiple

• `Optional` **multiple**: `boolean`

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:103](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L103)

___

### name

• **name**: `Key`

The unique name/id of the field.

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:78](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L78)

___

### pattern

• `Optional` **pattern**: `RegExp`

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:101](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L101)

___

### placeholder

• `Optional` **placeholder**: `string`

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:102](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L102)

___

### ref

• `Optional` **ref**: `Ref`<`Ref`\>

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:105](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L105)

___

### required

• `Optional` **required**: `boolean`

If true, the field must have a value to not be in an error state.

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:97](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L97)

___

### style

• `Optional` **style**: `CSSProperties`

CSS Styles to pass to the rendered component.

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:89](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L89)

___

### type

• `Optional` **type**: `HTMLInputTypeAttribute`

HTML input type.

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:93](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L93)

___

### validate

• `Optional` **validate**: [`FieldValidator`](../modules/types_field.md#fieldvalidator)<`Value`\>

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:98](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L98)
