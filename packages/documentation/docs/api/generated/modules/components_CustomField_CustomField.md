---
id: "components_CustomField_CustomField"
title: "Module: components/CustomField/CustomField"
sidebar_label: "components/CustomField/CustomField"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### CustomField

▸ **CustomField**<`Value`, `Key`, `Element`\>(`props`): `Element`

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
| `Value` | extends [`FieldValue`](types_field.md#fieldvalue) |
| `Key` | extends `string` = `string` |
| `Element` | `HTMLInputElement` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`FieldProps`](components_Field_Field_types.md#fieldprops)<`Key`, `Value`, `Element`\> |

#### Returns

`Element`

#### Defined in

packages/react-formz/src/components/CustomField/CustomField.tsx:13
