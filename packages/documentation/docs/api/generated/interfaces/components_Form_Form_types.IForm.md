---
id: "components_Form_Form_types.IForm"
title: "Interface: IForm<Values>"
sidebar_label: "IForm"
custom_edit_url: null
---

[components/Form/Form.types](../modules/components_Form_Form_types.md).IForm

## Type parameters

| Name | Type |
| :------ | :------ |
| `Values` | extends [`FormzValues`](../modules/types_form.md#formzvalues) |

## Hierarchy

- `FC`<[`FormProps`](components_Form_Form_types.FormProps.md)<`Values`\>\>

  ↳ **`IForm`**

## Callable

### IForm

▸ **IForm**(`props`, `context?`): ``null`` \| `ReactElement`<`any`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`FormProps`](components_Form_Form_types.FormProps.md)<`Values`\> |
| `context?` | `any` |

#### Returns

``null`` \| `ReactElement`<`any`, `any`\>

#### Defined in

node_modules/@types/react/index.d.ts:520

## Properties

### CheckboxField

• **CheckboxField**: <Key, Component\>(`props`: [`FieldProps`](../modules/components_Field_Field_types.md#fieldprops)<`Key`, [`TypeFromPath`](../modules/types_keys.md#typefrompath)<[`FormzValues`](../modules/types_form.md#formzvalues), `Key`\>, `HTMLInputElement`, `Component`\>) => `Element`

#### Type declaration

▸ <`Key`, `Component`\>(`props`): `Element`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | extends `string` = `string` |
| `Component` | extends `ComponentType`<{}\> = `ComponentType`<{}\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`FieldProps`](../modules/components_Field_Field_types.md#fieldprops)<`Key`, [`TypeFromPath`](../modules/types_keys.md#typefrompath)<[`FormzValues`](../modules/types_form.md#formzvalues), `Key`\>, `HTMLInputElement`, `Component`\> |

##### Returns

`Element`

#### Defined in

[packages/react-formz/src/components/Form/Form.types.ts:66](https://github.com/ZerryStack/react-formz/blob/1ba1704/packages/react-formz/src/components/Form/Form.types.ts#L66)

___

### Field

• **Field**: <Key, Element, Component\>(`props`: [`FieldProps`](../modules/components_Field_Field_types.md#fieldprops)<`Key`, [`TypeFromPath`](../modules/types_keys.md#typefrompath)<[`FormzValues`](../modules/types_form.md#formzvalues), `Key`\>, `Element`, `Component`\>) => `Element`

#### Type declaration

▸ <`Key`, `Element`, `Component`\>(`props`): `Element`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | extends `string` = `string` |
| `Element` | `HTMLInputElement` |
| `Component` | extends `ComponentType`<{}\> = `ComponentType`<{}\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`FieldProps`](../modules/components_Field_Field_types.md#fieldprops)<`Key`, [`TypeFromPath`](../modules/types_keys.md#typefrompath)<[`FormzValues`](../modules/types_form.md#formzvalues), `Key`\>, `Element`, `Component`\> |

##### Returns

`Element`

#### Defined in

[packages/react-formz/src/components/Form/Form.types.ts:47](https://github.com/ZerryStack/react-formz/blob/1ba1704/packages/react-formz/src/components/Form/Form.types.ts#L47)

___

### NumberField

• **NumberField**: <Key, Component\>(`props`: [`FieldProps`](../modules/components_Field_Field_types.md#fieldprops)<`Key`, [`TypeFromPath`](../modules/types_keys.md#typefrompath)<[`FormzValues`](../modules/types_form.md#formzvalues), `Key`\>, `HTMLInputElement`, `Component`\>) => `Element`

#### Type declaration

▸ <`Key`, `Component`\>(`props`): `Element`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | extends `string` = `string` |
| `Component` | extends `ComponentType`<{}\> = `ComponentType`<{}\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`FieldProps`](../modules/components_Field_Field_types.md#fieldprops)<`Key`, [`TypeFromPath`](../modules/types_keys.md#typefrompath)<[`FormzValues`](../modules/types_form.md#formzvalues), `Key`\>, `HTMLInputElement`, `Component`\> |

##### Returns

`Element`

#### Defined in

[packages/react-formz/src/components/Form/Form.types.ts:60](https://github.com/ZerryStack/react-formz/blob/1ba1704/packages/react-formz/src/components/Form/Form.types.ts#L60)

___

### TextField

• **TextField**: <Key, Component\>(`props`: [`FieldProps`](../modules/components_Field_Field_types.md#fieldprops)<`Key`, [`TypeFromPath`](../modules/types_keys.md#typefrompath)<[`FormzValues`](../modules/types_form.md#formzvalues), `Key`\>, `HTMLInputElement`, `Component`\>) => `Element`

#### Type declaration

▸ <`Key`, `Component`\>(`props`): `Element`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | extends `string` = `string` |
| `Component` | extends `ComponentType`<{}\> = `ComponentType`<{}\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`FieldProps`](../modules/components_Field_Field_types.md#fieldprops)<`Key`, [`TypeFromPath`](../modules/types_keys.md#typefrompath)<[`FormzValues`](../modules/types_form.md#formzvalues), `Key`\>, `HTMLInputElement`, `Component`\> |

##### Returns

`Element`

#### Defined in

[packages/react-formz/src/components/Form/Form.types.ts:54](https://github.com/ZerryStack/react-formz/blob/1ba1704/packages/react-formz/src/components/Form/Form.types.ts#L54)
