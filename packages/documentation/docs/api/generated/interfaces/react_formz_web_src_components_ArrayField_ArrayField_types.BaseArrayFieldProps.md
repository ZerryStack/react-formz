---
id: "react_formz_web_src_components_ArrayField_ArrayField_types.BaseArrayFieldProps"
title: "Interface: BaseArrayFieldProps<Value, Key, Props>"
sidebar_label: "BaseArrayFieldProps"
custom_edit_url: null
---

[react-formz-web/src/components/ArrayField/ArrayField.types](../modules/react_formz_web_src_components_ArrayField_ArrayField_types.md).BaseArrayFieldProps

## Type parameters

| Name | Type |
| :------ | :------ |
| `Value` | `Value` |
| `Key` | extends [`FieldId`](../modules/react_formz_src_types_field.md#fieldid) = [`FieldId`](../modules/react_formz_src_types_field.md#fieldid) |
| `Props` | extends `Record`<`string`, `any`\> = `Record`<`string`, `any`\> |

## Properties

### name

• **name**: `Key`

#### Defined in

[packages/react-formz-web/src/components/ArrayField/ArrayField.types.ts:21](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz-web/src/components/ArrayField/ArrayField.types.ts#L21)

___

### render

• **render**: [`ArrayFieldComponent`](../modules/react_formz_web_src_components_ArrayField_ArrayField_types.md#arrayfieldcomponent)<`Value`, `Props`\>

#### Defined in

[packages/react-formz-web/src/components/ArrayField/ArrayField.types.ts:22](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz-web/src/components/ArrayField/ArrayField.types.ts#L22)

___

### validate

• `Optional` **validate**: [`FieldValidator`](../modules/react_formz_src_types_field.md#fieldvalidator)<`Value`[]\>

#### Defined in

[packages/react-formz-web/src/components/ArrayField/ArrayField.types.ts:23](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz-web/src/components/ArrayField/ArrayField.types.ts#L23)
