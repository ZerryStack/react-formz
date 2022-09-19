---
id: "react_formz_web_src_components_CustomField_CustomField"
title: "Module: react-formz-web/src/components/CustomField/CustomField"
sidebar_label: "react-formz-web/src/components/CustomField/CustomField"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### CustomField

▸ **CustomField**<`Value`, `Key`, `Ref`\>(`props`): `Element`

A custom field is a `Field` where the value is not your typical html input value like
your usual string, number, date, etc.

This field is great for integrating with third party libraries who's api's
are not standard html input such as `react-select`.

Example Usage:

```tsx
<CustomField<[Date, Date]>
 as={({ input: { value, ...input } }) => (
   <ReactDatePicker {...input} startDate={value[0]} endDate={value[1]} />
 )}
/>
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Value` | extends [`FieldValue`](react_formz_src_types_field.md#fieldvalue) |
| `Key` | extends `string` = `string` |
| `Ref` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`WebFieldProps`](../interfaces/react_formz_web_src_components_Field_Field_types.WebFieldProps.md)<`Value`, `Key`, `Ref`\> |

#### Returns

`Element`

#### Defined in

[packages/react-formz-web/src/components/CustomField/CustomField.tsx:13](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz-web/src/components/CustomField/CustomField.tsx#L13)
