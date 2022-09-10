---
id: "components_Field_Field_types.BaseFieldProps"
title: "Interface: BaseFieldProps<Key, Value, Element>"
sidebar_label: "BaseFieldProps"
custom_edit_url: null
---

[components/Field/Field.types](../modules/components_Field_Field_types.md).BaseFieldProps

## Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | extends [`FieldId`](../modules/types_field.md#fieldid) = [`FieldId`](../modules/types_field.md#fieldid) |
| `Value` | extends [`FieldValue`](../modules/types_field.md#fieldvalue) = [`FieldValue`](../modules/types_field.md#fieldvalue) |
| `Element` | `HTMLInputElement` |

## Properties

### as

• `Optional` **as**: ``"select"`` \| ``"input"`` \| ``"textarea"`` \| `ComponentType`<[`BaseFieldComponentProps`](components_Field_Field_types.BaseFieldComponentProps.md)<`Key`, `Value`, `Element`\> & `NativeElementProps`<`Element`\>\>

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:84](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L84)

___

### children

• `Optional` **children**: `ReactNode`

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:91](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L91)

___

### label

• `Optional` **label**: `string`

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:101](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L101)

___

### max

• `Optional` **max**: `number`

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:97](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L97)

___

### min

• `Optional` **min**: `number`

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:96](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L96)

___

### multiple

• `Optional` **multiple**: `boolean`

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:100](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L100)

___

### name

• **name**: `Key`

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:83](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L83)

___

### pattern

• `Optional` **pattern**: `RegExp`

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:98](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L98)

___

### placeholder

• `Optional` **placeholder**: `string`

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:99](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L99)

___

### ref

• `Optional` **ref**: `Ref`<`Element`\>

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:102](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L102)

___

### required

• `Optional` **required**: `boolean`

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:94](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L94)

___

### style

• `Optional` **style**: `CSSProperties`

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:92](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L92)

___

### type

• `Optional` **type**: `HTMLInputTypeAttribute`

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:93](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L93)

___

### validate

• `Optional` **validate**: [`FieldValidator`](../modules/types_field.md#fieldvalidator)<`Value`\>

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:95](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L95)
