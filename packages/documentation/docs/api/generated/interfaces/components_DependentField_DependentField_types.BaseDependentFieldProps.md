---
id: "components_DependentField_DependentField_types.BaseDependentFieldProps"
title: "Interface: BaseDependentFieldProps<Values, Key, Value, Element, DependentValues>"
sidebar_label: "BaseDependentFieldProps"
custom_edit_url: null
---

[components/DependentField/DependentField.types](../modules/components_DependentField_DependentField_types.md).BaseDependentFieldProps

## Type parameters

| Name | Type |
| :------ | :------ |
| `Values` | extends [`FormzValues`](../modules/types_form.md#formzvalues) = [`FormzValues`](../modules/types_form.md#formzvalues) |
| `Key` | extends [`FieldId`](../modules/types_field.md#fieldid) = [`FieldId`](../modules/types_field.md#fieldid) |
| `Value` | extends [`FieldValue`](../modules/types_field.md#fieldvalue) = [`FieldValue`](../modules/types_field.md#fieldvalue) |
| `Element` | `HTMLInputElement` |
| `DependentValues` | extends `Partial`<`Values`\> = `Partial`<`Values`\> |

## Hierarchy

- `Omit`<[`BaseFieldProps`](components_Field_Field_types.BaseFieldProps.md)<`Key`, `Value`, `Element`\>, ``"validate"``\>

  ↳ **`BaseDependentFieldProps`**

## Properties

### as

• `Optional` **as**: ``"select"`` \| ``"input"`` \| ``"textarea"`` \| `ComponentType`<[`BaseFieldComponentProps`](components_Field_Field_types.BaseFieldComponentProps.md)<`Key`, `Value`, `Element`\> & `NativeElementProps`<`Element`\>\>

#### Inherited from

Omit.as

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:78](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L78)

___

### children

• `Optional` **children**: `ReactNode`

#### Inherited from

Omit.children

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:85](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L85)

___

### dependencies

• **dependencies**: (`values`: `Values`) => `DependentValues`

#### Type declaration

▸ (`values`): `DependentValues`

A selector function for selecting the dependent values to watch. 
The returned value should be an object.

##### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `Values` |

##### Returns

`DependentValues`

#### Defined in

[packages/react-formz/src/components/DependentField/DependentField.types.ts:16](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/DependentField/DependentField.types.ts#L16)

___

### label

• `Optional` **label**: `string`

#### Inherited from

Omit.label

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:95](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L95)

___

### max

• `Optional` **max**: `number`

#### Inherited from

Omit.max

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:91](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L91)

___

### min

• `Optional` **min**: `number`

#### Inherited from

Omit.min

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:90](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L90)

___

### multiple

• `Optional` **multiple**: `boolean`

#### Inherited from

Omit.multiple

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:94](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L94)

___

### name

• **name**: `Key`

#### Inherited from

Omit.name

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:77](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L77)

___

### onDependenciesChange

• `Optional` **onDependenciesChange**: [`DependentFieldChangeCallback`](../modules/types_field.md#dependentfieldchangecallback)<`Value`, `DependentValues`\>

A callback function that will be called whenever at least one of the
dependencies changes. This function will recieve the dependencies object and
the field actions object so that you can take actions on the field whenever
its' dependencies change.

#### Defined in

[packages/react-formz/src/components/DependentField/DependentField.types.ts:29](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/DependentField/DependentField.types.ts#L29)

___

### pattern

• `Optional` **pattern**: `RegExp`

#### Inherited from

Omit.pattern

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:92](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L92)

___

### placeholder

• `Optional` **placeholder**: `string`

#### Inherited from

Omit.placeholder

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:93](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L93)

___

### ref

• `Optional` **ref**: `Ref`<`Element`\>

#### Inherited from

Omit.ref

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:96](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L96)

___

### required

• `Optional` **required**: `boolean`

#### Inherited from

Omit.required

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:88](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L88)

___

### style

• `Optional` **style**: `CSSProperties`

#### Inherited from

Omit.style

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:86](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L86)

___

### type

• `Optional` **type**: `HTMLInputTypeAttribute`

#### Inherited from

Omit.type

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:87](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L87)

___

### validate

• `Optional` **validate**: [`DependentFieldValidator`](../modules/types_field.md#dependentfieldvalidator)<`Value`, `DependentValues`\>

Validation function that will recieve the field value in addition to
the values of its' dependencies. You can use both arguments in conjuction
to validate the field.

#### Defined in

[packages/react-formz/src/components/DependentField/DependentField.types.ts:22](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/DependentField/DependentField.types.ts#L22)
