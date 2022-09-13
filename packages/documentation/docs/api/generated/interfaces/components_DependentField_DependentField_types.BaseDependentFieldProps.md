---
id: "components_DependentField_DependentField_types.BaseDependentFieldProps"
title: "Interface: BaseDependentFieldProps<Values, Value, Key, Element, DependentValues>"
sidebar_label: "BaseDependentFieldProps"
custom_edit_url: null
---

[components/DependentField/DependentField.types](../modules/components_DependentField_DependentField_types.md).BaseDependentFieldProps

## Type parameters

| Name | Type |
| :------ | :------ |
| `Values` | extends [`FormzValues`](../modules/types_form.md#formzvalues) = [`FormzValues`](../modules/types_form.md#formzvalues) |
| `Value` | extends [`FieldValue`](../modules/types_field.md#fieldvalue) = [`FieldValue`](../modules/types_field.md#fieldvalue) |
| `Key` | extends [`FieldId`](../modules/types_field.md#fieldid) = [`FieldId`](../modules/types_field.md#fieldid) |
| `Element` | `HTMLInputElement` |
| `DependentValues` | extends `Partial`<`Values`\> = `Partial`<`Values`\> |

## Hierarchy

- `Omit`<[`BaseFieldProps`](components_Field_Field_types.BaseFieldProps.md)<`Value`, `Key`, `Element`\>, ``"validate"``\>

- [`UseDependentFieldEventsOptions`](hooks_fields_useDependentFieldEvents.UseDependentFieldEventsOptions.md)<`Values`, `Value`, `DependentValues`\>

  ↳ **`BaseDependentFieldProps`**

## Properties

### as

• `Optional` **as**: `ComponentType`<[`FieldComponentProps`](../modules/components_Field_Field_types.md#fieldcomponentprops)<`Value`, `Key`, `Element`\> & `NativeElementProps`<`Element`\>\>

The component to render the ui of the field.

#### Inherited from

Omit.as

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:87](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L87)

___

### children

• `Optional` **children**: `ReactNode`

#### Inherited from

Omit.children

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:90](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L90)

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

#### Inherited from

[UseDependentFieldEventsOptions](hooks_fields_useDependentFieldEvents.UseDependentFieldEventsOptions.md).[dependencies](hooks_fields_useDependentFieldEvents.UseDependentFieldEventsOptions.md#dependencies)

#### Defined in

[packages/react-formz/src/hooks/fields/useDependentFieldEvents.ts:25](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/fields/useDependentFieldEvents.ts#L25)

___

### label

• `Optional` **label**: `string`

#### Inherited from

Omit.label

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:109](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L109)

___

### max

• `Optional` **max**: `number`

#### Inherited from

Omit.max

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:105](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L105)

___

### min

• `Optional` **min**: `number`

#### Inherited from

Omit.min

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:104](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L104)

___

### multiple

• `Optional` **multiple**: `boolean`

#### Inherited from

Omit.multiple

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:108](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L108)

___

### name

• **name**: `Key`

The unique name/id of the field.

#### Inherited from

Omit.name

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:83](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L83)

___

### onDependenciesChange

• `Optional` **onDependenciesChange**: [`DependentFieldChangeCallback`](../modules/types_field.md#dependentfieldchangecallback)<`Value`, `DependentValues`\>

A callback function that will be called whenever at least one of the
dependencies changes. This function will recieve the dependencies object and
the field actions object so that you can take actions on the field whenever
its' dependencies change.

#### Inherited from

[UseDependentFieldEventsOptions](hooks_fields_useDependentFieldEvents.UseDependentFieldEventsOptions.md).[onDependenciesChange](hooks_fields_useDependentFieldEvents.UseDependentFieldEventsOptions.md#ondependencieschange)

#### Defined in

[packages/react-formz/src/hooks/fields/useDependentFieldEvents.ts:38](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/fields/useDependentFieldEvents.ts#L38)

___

### pattern

• `Optional` **pattern**: `RegExp`

#### Inherited from

Omit.pattern

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:106](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L106)

___

### placeholder

• `Optional` **placeholder**: `string`

#### Inherited from

Omit.placeholder

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:107](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L107)

___

### ref

• `Optional` **ref**: `Ref`<`Element`\>

#### Inherited from

Omit.ref

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:110](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L110)

___

### required

• `Optional` **required**: `boolean`

If true, the field must have a value to not be in an error state.

#### Inherited from

Omit.required

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:102](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L102)

___

### style

• `Optional` **style**: `CSSProperties`

CSS Styles to pass to the rendered component.

#### Inherited from

Omit.style

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:94](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L94)

___

### type

• `Optional` **type**: `HTMLInputTypeAttribute`

HTML input type.

#### Inherited from

Omit.type

#### Defined in

[packages/react-formz/src/components/Field/Field.types.ts:98](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Field/Field.types.ts#L98)

___

### validate

• `Optional` **validate**: [`DependentFieldValidator`](../modules/types_field.md#dependentfieldvalidator)<`Value`, `DependentValues`\>

Validation function that will recieve the field value in addition to
the values of its' dependencies. You can use both arguments in conjuction
to validate the field.

#### Inherited from

[UseDependentFieldEventsOptions](hooks_fields_useDependentFieldEvents.UseDependentFieldEventsOptions.md).[validate](hooks_fields_useDependentFieldEvents.UseDependentFieldEventsOptions.md#validate)

#### Defined in

[packages/react-formz/src/hooks/fields/useDependentFieldEvents.ts:31](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/fields/useDependentFieldEvents.ts#L31)
