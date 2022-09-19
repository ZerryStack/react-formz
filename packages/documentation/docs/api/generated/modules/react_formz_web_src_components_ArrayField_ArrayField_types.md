---
id: "react_formz_web_src_components_ArrayField_ArrayField_types"
title: "Module: react-formz-web/src/components/ArrayField/ArrayField.types"
sidebar_label: "react-formz-web/src/components/ArrayField/ArrayField.types"
custom_edit_url: null
---

## Interfaces

- [ArrayFieldComponentProps](../interfaces/react_formz_web_src_components_ArrayField_ArrayField_types.ArrayFieldComponentProps.md)
- [BaseArrayFieldProps](../interfaces/react_formz_web_src_components_ArrayField_ArrayField_types.BaseArrayFieldProps.md)

## Type Aliases

### ArrayFieldComponent

Ƭ **ArrayFieldComponent**<`Value`, `Props`\>: `React.ComponentType`<[`ArrayFieldComponentProps`](../interfaces/react_formz_web_src_components_ArrayField_ArrayField_types.ArrayFieldComponentProps.md)<`Value`\> & `RemoveBaseProps`<`Props`\> & { `arrayHelpers`: [`ArrayHelpers`](../interfaces/react_formz_src_hooks_fields_useFieldArrayHelpers.ArrayHelpers.md)<`Value`\>  }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Value` | `Value` |
| `Props` | extends [`AnyObject`](react_formz_src_types_common.md#anyobject) |

#### Defined in

[packages/react-formz-web/src/components/ArrayField/ArrayField.types.ts:13](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz-web/src/components/ArrayField/ArrayField.types.ts#L13)

___

### ArrayFieldProps

Ƭ **ArrayFieldProps**<`Value`, `Key`, `Props`\>: [`BaseArrayFieldProps`](../interfaces/react_formz_web_src_components_ArrayField_ArrayField_types.BaseArrayFieldProps.md)<`Value`, `Key`, `Props`\> & `Props`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Value` | `Value` |
| `Key` | extends [`FieldId`](react_formz_src_types_field.md#fieldid) = [`FieldId`](react_formz_src_types_field.md#fieldid) |
| `Props` | extends `Record`<`string`, `any`\> = `Record`<`string`, `any`\> |

#### Defined in

[packages/react-formz-web/src/components/ArrayField/ArrayField.types.ts:26](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz-web/src/components/ArrayField/ArrayField.types.ts#L26)
