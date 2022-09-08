---
id: "components_ArrayField_ArrayField_types.BaseArrayFieldProps"
title: "Interface: BaseArrayFieldProps<Value, Key, Props>"
sidebar_label: "BaseArrayFieldProps"
custom_edit_url: null
---

[components/ArrayField/ArrayField.types](../modules/components_ArrayField_ArrayField_types.md).BaseArrayFieldProps

## Type parameters

| Name | Type |
| :------ | :------ |
| `Value` | `Value` |
| `Key` | extends [`FieldId`](../modules/types_field.md#fieldid) = [`FieldId`](../modules/types_field.md#fieldid) |
| `Props` | extends `Record`<`string`, `any`\> = `Record`<`string`, `any`\> |

## Properties

### name

• **name**: `Key`

#### Defined in

[packages/react-formz/src/components/ArrayField/ArrayField.types.ts:23](https://github.com/ZerryStack/react-formz/blob/1bf2d41/packages/react-formz/src/components/ArrayField/ArrayField.types.ts#L23)

___

### render

• **render**: [`ArrayFieldComponent`](../modules/components_ArrayField_ArrayField_types.md#arrayfieldcomponent)<`Value`, `Props`\>

#### Defined in

[packages/react-formz/src/components/ArrayField/ArrayField.types.ts:24](https://github.com/ZerryStack/react-formz/blob/1bf2d41/packages/react-formz/src/components/ArrayField/ArrayField.types.ts#L24)

___

### validate

• `Optional` **validate**: [`FieldValidator`](../modules/types_field.md#fieldvalidator)<`Value`[]\>

#### Defined in

[packages/react-formz/src/components/ArrayField/ArrayField.types.ts:25](https://github.com/ZerryStack/react-formz/blob/1bf2d41/packages/react-formz/src/components/ArrayField/ArrayField.types.ts#L25)
