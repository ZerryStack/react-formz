---
id: "react_formz_native_src_components_Form_Form"
title: "Module: react-formz-native/src/components/Form/Form"
sidebar_label: "react-formz-native/src/components/Form/Form"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### ReactNativeForm

▸ **ReactNativeForm**<`Values`\>(`__namedParameters`): `Element`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Values` | extends [`FormzValues`](react_formz_src_types_form.md#formzvalues) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `PropsWithChildren`<[`NativeFormProps`](../interfaces/react_formz_native_src_components_Form_Form_types.NativeFormProps.md)<`Values`\>\> |

#### Returns

`Element`

#### Defined in

[packages/react-formz-native/src/components/Form/Form.tsx:26](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz-native/src/components/Form/Form.tsx#L26)

___

### ReactNativePersistedForm

▸ **ReactNativePersistedForm**<`Values`\>(`__namedParameters`): `Element`

A form whose state will not be deleted from the store when unmounted.

This is useful for forms that may span multiple pages like wizards
or signup forms on mobile devices that might span multiple navigation routes.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Values` | extends [`FormzValues`](react_formz_src_types_form.md#formzvalues) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `PropsWithChildren`<[`NativeFormProps`](../interfaces/react_formz_native_src_components_Form_Form_types.NativeFormProps.md)<`Values`\>\> |

#### Returns

`Element`

#### Defined in

[packages/react-formz-native/src/components/Form/Form.tsx:63](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz-native/src/components/Form/Form.tsx#L63)
