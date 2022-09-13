---
id: "components_Field_Field_types.BaseFieldProps"
title: "Interface: BaseFieldProps<Value, Key, Element>"
sidebar_label: "BaseFieldProps"
custom_edit_url: null
---

[components/Field/Field.types](../modules/components_Field_Field_types.md).BaseFieldProps

## Type parameters

| Name | Type |
| :------ | :------ |
| `Value` | extends [`FieldValue`](../modules/types_field.md#fieldvalue) = [`FieldValue`](../modules/types_field.md#fieldvalue) |
| `Key` | extends [`FieldId`](../modules/types_field.md#fieldid) = [`FieldId`](../modules/types_field.md#fieldid) |
| `Element` | `HTMLInputElement` |

## Properties

### as

• `Optional` **as**: `ComponentType`<[`FieldComponentProps`](../modules/components_Field_Field_types.md#fieldcomponentprops)<`Value`, `Key`, `Element`\> & `NativeElementProps`<`Element`\>\>

The component to render the ui of the field.

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:87](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L87)

___

### children

• `Optional` **children**: `ReactNode`

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:90](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L90)

___

### label

• `Optional` **label**: `string`

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:109](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L109)

___

### max

• `Optional` **max**: `number`

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:105](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L105)

___

### min

• `Optional` **min**: `number`

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:104](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L104)

___

### multiple

• `Optional` **multiple**: `boolean`

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:108](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L108)

___

### name

• **name**: `Key`

The unique name/id of the field.

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:83](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L83)

___

### pattern

• `Optional` **pattern**: `RegExp`

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:106](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L106)

___

### placeholder

• `Optional` **placeholder**: `string`

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:107](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L107)

___

### ref

• `Optional` **ref**: `Ref`<`Element`\>

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:110](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L110)

___

### required

• `Optional` **required**: `boolean`

If true, the field must have a value to not be in an error state.

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:102](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L102)

___

### style

• `Optional` **style**: `CSSProperties`

CSS Styles to pass to the rendered component.

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:94](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L94)

___

### type

• `Optional` **type**: `HTMLInputTypeAttribute`

HTML input type.

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:98](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L98)

___

### validate

• `Optional` **validate**: [`FieldValidator`](../modules/types_field.md#fieldvalidator)<`Value`\>

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:103](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L103)
