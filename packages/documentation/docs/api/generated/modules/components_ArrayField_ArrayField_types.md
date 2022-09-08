---
id: "components_ArrayField_ArrayField_types"
title: "Module: components/ArrayField/ArrayField.types"
sidebar_label: "components/ArrayField/ArrayField.types"
custom_edit_url: null
---

## Interfaces

- [ArrayFieldComponentProps](../interfaces/components_ArrayField_ArrayField_types.ArrayFieldComponentProps.md)
- [BaseArrayFieldProps](../interfaces/components_ArrayField_ArrayField_types.BaseArrayFieldProps.md)

## Type Aliases

### ArrayFieldComponent

Ƭ **ArrayFieldComponent**<`Value`, `Props`\>: `React.ComponentType`<[`ArrayFieldComponentProps`](../interfaces/components_ArrayField_ArrayField_types.ArrayFieldComponentProps.md)<`Value`\> & `RemoveBaseProps`<`Props`\> & { `arrayHelpers`: [`ArrayHelpers`](../interfaces/hooks_fields_useFieldArrayHelpers.ArrayHelpers.md)<`Value`\>  }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Value` | `Value` |
| `Props` | extends [`AnyObject`](types_common.md#anyobject) |

#### Defined in

[packages/react-formz/src/components/ArrayField/ArrayField.types.ts:15](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/ArrayField/ArrayField.types.ts#L15)

___

### ArrayFieldProps

Ƭ **ArrayFieldProps**<`Value`, `Key`, `Props`\>: [`BaseArrayFieldProps`](../interfaces/components_ArrayField_ArrayField_types.BaseArrayFieldProps.md)<`Value`, `Key`, `Props`\> & `Props`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Value` | `Value` |
| `Key` | extends [`FieldId`](types_field.md#fieldid) = [`FieldId`](types_field.md#fieldid) |
| `Props` | extends `Record`<`string`, `any`\> = `Record`<`string`, `any`\> |

#### Defined in

[packages/react-formz/src/components/ArrayField/ArrayField.types.ts:28](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/ArrayField/ArrayField.types.ts#L28)
