---
id: "components_DependentField_DependentField_extras"
title: "Module: components/DependentField/DependentField.extras"
sidebar_label: "components/DependentField/DependentField.extras"
custom_edit_url: null
---

## Functions

### DependentCheckboxField

▸ **DependentCheckboxField**<`Values`, `Key`, `Element`, `DependentValues`\>(`props`): `Element`

An abstraction of `DependentField` that can be used for boolean field values. The default
input type will be `checkbox` but can be overriden.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Values` | extends [`FormzValues`](types_form.md#formzvalues) |
| `Key` | extends `string` = `string` |
| `Element` | `HTMLInputElement` |
| `DependentValues` | extends `Partial`<`Values`\> = `Partial`<`Values`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`DependentFieldProps`](components_DependentField_DependentField_types.md#dependentfieldprops)<`Values`, `Key`, `boolean`, `Element`, `DependentValues`\> |

#### Returns

`Element`

#### Defined in

[packages/react-formz/src/components/DependentField/DependentField.extras.tsx:25](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/DependentField/DependentField.extras.tsx#L25)

___

### DependentMultiSelectField

▸ **DependentMultiSelectField**<`Values`, `Key`, `Element`, `DependentValues`\>(`props`): `Element`

An abstraction of `DependentField` that can be used for multi select field values. The default
input type will be `select` but can be overriden.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Values` | extends [`FormzValues`](types_form.md#formzvalues) |
| `Key` | extends `string` = `string` |
| `Element` | `HTMLInputElement` |
| `DependentValues` | extends `Partial`<`Values`\> = `Partial`<`Values`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`DependentFieldProps`](components_DependentField_DependentField_types.md#dependentfieldprops)<`Values`, `Key`, `string`, `Element`, `DependentValues`\> |

#### Returns

`Element`

#### Defined in

[packages/react-formz/src/components/DependentField/DependentField.extras.tsx:25](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/DependentField/DependentField.extras.tsx#L25)

___

### DependentNumberField

▸ **DependentNumberField**<`Values`, `Key`, `Element`, `DependentValues`\>(`props`): `Element`

An abstraction of `DependentField` that can be used for number field values. The default
input type will be `number` but can be overriden.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Values` | extends [`FormzValues`](types_form.md#formzvalues) |
| `Key` | extends `string` = `string` |
| `Element` | `HTMLInputElement` |
| `DependentValues` | extends `Partial`<`Values`\> = `Partial`<`Values`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`DependentFieldProps`](components_DependentField_DependentField_types.md#dependentfieldprops)<`Values`, `Key`, `number`, `Element`, `DependentValues`\> |

#### Returns

`Element`

#### Defined in

[packages/react-formz/src/components/DependentField/DependentField.extras.tsx:25](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/DependentField/DependentField.extras.tsx#L25)

___

### DependentRadioField

▸ **DependentRadioField**<`Values`, `Key`, `Element`, `DependentValues`\>(`props`): `Element`

An abstraction of `DependentField` that can be used for radio field values. The default
input type will be `radio` but can be overriden.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Values` | extends [`FormzValues`](types_form.md#formzvalues) |
| `Key` | extends `string` = `string` |
| `Element` | `HTMLInputElement` |
| `DependentValues` | extends `Partial`<`Values`\> = `Partial`<`Values`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`DependentFieldProps`](components_DependentField_DependentField_types.md#dependentfieldprops)<`Values`, `Key`, `string`, `Element`, `DependentValues`\> |

#### Returns

`Element`

#### Defined in

[packages/react-formz/src/components/DependentField/DependentField.extras.tsx:25](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/DependentField/DependentField.extras.tsx#L25)

___

### DependentSelectField

▸ **DependentSelectField**<`Values`, `Key`, `Element`, `DependentValues`\>(`props`): `Element`

An abstraction of `DependentField` that can be used for select field values. The default
input type will be `select` but can be overriden.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Values` | extends [`FormzValues`](types_form.md#formzvalues) |
| `Key` | extends `string` = `string` |
| `Element` | `HTMLInputElement` |
| `DependentValues` | extends `Partial`<`Values`\> = `Partial`<`Values`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`DependentFieldProps`](components_DependentField_DependentField_types.md#dependentfieldprops)<`Values`, `Key`, `string`, `Element`, `DependentValues`\> |

#### Returns

`Element`

#### Defined in

[packages/react-formz/src/components/DependentField/DependentField.extras.tsx:25](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/DependentField/DependentField.extras.tsx#L25)

___

### DependentTextField

▸ **DependentTextField**<`Values`, `Key`, `Element`, `DependentValues`\>(`props`): `Element`

An abstraction of `DependentField` that can be used for text field values. The default
input type will be `text` but can be overriden.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Values` | extends [`FormzValues`](types_form.md#formzvalues) |
| `Key` | extends `string` = `string` |
| `Element` | `HTMLInputElement` |
| `DependentValues` | extends `Partial`<`Values`\> = `Partial`<`Values`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`DependentFieldProps`](components_DependentField_DependentField_types.md#dependentfieldprops)<`Values`, `Key`, `string`, `Element`, `DependentValues`\> |

#### Returns

`Element`

#### Defined in

[packages/react-formz/src/components/DependentField/DependentField.extras.tsx:25](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/DependentField/DependentField.extras.tsx#L25)
