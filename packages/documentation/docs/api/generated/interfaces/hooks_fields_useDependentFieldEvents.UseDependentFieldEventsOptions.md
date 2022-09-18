---
id: "hooks_fields_useDependentFieldEvents.UseDependentFieldEventsOptions"
title: "Interface: UseDependentFieldEventsOptions<Values, Value, DependentValues>"
sidebar_label: "UseDependentFieldEventsOptions"
custom_edit_url: null
---

[hooks/fields/useDependentFieldEvents](../modules/hooks_fields_useDependentFieldEvents.md).UseDependentFieldEventsOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `Values` | extends [`FormzValues`](../modules/types_form.md#formzvalues) = [`FormzValues`](../modules/types_form.md#formzvalues) |
| `Value` | extends [`FieldValue`](../modules/types_field.md#fieldvalue) = [`FieldValue`](../modules/types_field.md#fieldvalue) |
| `DependentValues` | extends `Partial`<`Values`\> = `Partial`<`Values`\> |

## Hierarchy

- **`UseDependentFieldEventsOptions`**

  ↳ [`UseDependentFieldOptions`](hooks_fields_useDependentField.UseDependentFieldOptions.md)

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

#### Defined in

[packages/react-formz/src/hooks/fields/useDependentFieldEvents.ts:25](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/fields/useDependentFieldEvents.ts#L25)

___

### onDependenciesChange

• `Optional` **onDependenciesChange**: [`DependentFieldChangeCallback`](../modules/types_field.md#dependentfieldchangecallback)<`Value`, `DependentValues`\>

A callback function that will be called whenever at least one of the
dependencies changes. This function will recieve the dependencies object and
the field actions object so that you can take actions on the field whenever
its' dependencies change.

#### Defined in

[packages/react-formz/src/hooks/fields/useDependentFieldEvents.ts:38](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/fields/useDependentFieldEvents.ts#L38)

___

### validate

• `Optional` **validate**: [`DependentFieldValidator`](../modules/types_field.md#dependentfieldvalidator)<`Value`, `DependentValues`\>

Validation function that will recieve the field value in addition to
the values of its' dependencies. You can use both arguments in conjuction
to validate the field.

#### Defined in

[packages/react-formz/src/hooks/fields/useDependentFieldEvents.ts:31](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/fields/useDependentFieldEvents.ts#L31)
