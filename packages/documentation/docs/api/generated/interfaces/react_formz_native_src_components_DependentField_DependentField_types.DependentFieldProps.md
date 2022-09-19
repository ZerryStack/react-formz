---
id: "react_formz_native_src_components_DependentField_DependentField_types.DependentFieldProps"
title: "Interface: DependentFieldProps<Values, Value, Key, Ref, DependentValues>"
sidebar_label: "DependentFieldProps"
custom_edit_url: null
---

[react-formz-native/src/components/DependentField/DependentField.types](../modules/react_formz_native_src_components_DependentField_DependentField_types.md).DependentFieldProps

## Type parameters

| Name | Type |
| :------ | :------ |
| `Values` | extends [`FormzValues`](../modules/react_formz_src_types_form.md#formzvalues) = [`FormzValues`](../modules/react_formz_src_types_form.md#formzvalues) |
| `Value` | extends [`FieldValue`](../modules/react_formz_src_types_field.md#fieldvalue) = [`FieldValue`](../modules/react_formz_src_types_field.md#fieldvalue) |
| `Key` | extends [`FieldId`](../modules/react_formz_src_types_field.md#fieldid) = [`FieldId`](../modules/react_formz_src_types_field.md#fieldid) |
| `Ref` | `HTMLInputElement` |
| `DependentValues` | extends `Partial`<`Values`\> = `Partial`<`Values`\> |

## Hierarchy

- `Omit`<[`NativeFieldProps`](react_formz_native_src_components_Field_Field_types.NativeFieldProps.md)<`Value`, `Key`, `Ref`\>, ``"validate"``\>

- [`UseDependentFieldEventsOptions`](react_formz_src_hooks_fields_useDependentFieldEvents.UseDependentFieldEventsOptions.md)<`Values`, `Value`, `DependentValues`\>

  ↳ **`DependentFieldProps`**

## Properties

### as

• `Optional` **as**: `ComponentType`<[`FieldComponentProps`](react_formz_native_src_components_Field_Field_types.FieldComponentProps.md)<`Value`, `Key`, `Ref`\>\>

The component to render the ui of the field.

#### Inherited from

Omit.as

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

[UseDependentFieldEventsOptions](react_formz_src_hooks_fields_useDependentFieldEvents.UseDependentFieldEventsOptions.md).[dependencies](react_formz_src_hooks_fields_useDependentFieldEvents.UseDependentFieldEventsOptions.md#dependencies)

#### Defined in

[packages/react-formz/src/hooks/fields/useDependentFieldEvents.ts:25](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/fields/useDependentFieldEvents.ts#L25)

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

### onDependenciesChange

• `Optional` **onDependenciesChange**: [`DependentFieldChangeCallback`](../modules/react_formz_src_types_field.md#dependentfieldchangecallback)<`Value`, `DependentValues`\>

A callback function that will be called whenever at least one of the
dependencies changes. This function will recieve the dependencies object and
the field actions object so that you can take actions on the field whenever
its' dependencies change.

#### Inherited from

[UseDependentFieldEventsOptions](react_formz_src_hooks_fields_useDependentFieldEvents.UseDependentFieldEventsOptions.md).[onDependenciesChange](react_formz_src_hooks_fields_useDependentFieldEvents.UseDependentFieldEventsOptions.md#ondependencieschange)

#### Defined in

[packages/react-formz/src/hooks/fields/useDependentFieldEvents.ts:38](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/fields/useDependentFieldEvents.ts#L38)

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

#### Inherited from

Omit.type

#### Defined in

[packages/react-formz-native/src/components/Field/Field.types.ts:75](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz-native/src/components/Field/Field.types.ts#L75)

___

### validate

• `Optional` **validate**: [`DependentFieldValidator`](../modules/react_formz_src_types_field.md#dependentfieldvalidator)<`Value`, `DependentValues`\>

Validation function that will recieve the field value in addition to
the values of its' dependencies. You can use both arguments in conjuction
to validate the field.

#### Inherited from

[UseDependentFieldEventsOptions](react_formz_src_hooks_fields_useDependentFieldEvents.UseDependentFieldEventsOptions.md).[validate](react_formz_src_hooks_fields_useDependentFieldEvents.UseDependentFieldEventsOptions.md#validate)

#### Defined in

[packages/react-formz/src/hooks/fields/useDependentFieldEvents.ts:31](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/fields/useDependentFieldEvents.ts#L31)
