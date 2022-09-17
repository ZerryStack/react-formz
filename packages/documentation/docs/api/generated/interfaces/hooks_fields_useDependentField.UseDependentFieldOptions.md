---
id: "hooks_fields_useDependentField.UseDependentFieldOptions"
title: "Interface: UseDependentFieldOptions<Values, Value, DependentValues>"
sidebar_label: "UseDependentFieldOptions"
custom_edit_url: null
---

[hooks/fields/useDependentField](../modules/hooks_fields_useDependentField.md).UseDependentFieldOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `Values` | extends [`FormzValues`](../modules/types_form.md#formzvalues) |
| `Value` | extends [`FieldValue`](../modules/types_field.md#fieldvalue) = [`FieldValue`](../modules/types_field.md#fieldvalue) |
| `DependentValues` | extends `Partial`<`Values`\> = `Partial`<`Values`\> |

## Hierarchy

- [`UseDependentFieldEventsOptions`](hooks_fields_useDependentFieldEvents.UseDependentFieldEventsOptions.md)<`Values`, `Value`, `DependentValues`\>

- `Omit`<[`UseFieldOptions`](hooks_fields_useField.UseFieldOptions.md)<`Value`\>, ``"validate"``\>

  ↳ **`UseDependentFieldOptions`**

## Properties

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

[packages/react-formz/src/hooks/fields/useField.ts:17](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/fields/useField.ts#L17)

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

• `Optional` **type**: ``"number"`` \| ``"search"`` \| `string` & {} \| ``"button"`` \| ``"checkbox"`` \| ``"color"`` \| ``"date"`` \| ``"datetime-local"`` \| ``"email"`` \| ``"file"`` \| ``"hidden"`` \| ``"image"`` \| ``"month"`` \| ``"password"`` \| ``"radio"`` \| ``"range"`` \| ``"reset"`` \| ``"submit"`` \| ``"tel"`` \| ``"text"`` \| ``"time"`` \| ``"url"`` \| ``"week"``

#### Inherited from

Omit.type

#### Defined in

[packages/react-formz/src/hooks/fields/useField.ts:16](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/fields/useField.ts#L16)

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
