---
id: "react_formz_src_providers_FormProvider_FormProvider"
title: "Module: react-formz/src/providers/FormProvider/FormProvider"
sidebar_label: "react-formz/src/providers/FormProvider/FormProvider"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### FormProvider

▸ **FormProvider**<`Values`\>(`__namedParameters`): `Element`

Context provider for a forms configuration.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Values` | extends [`FormzValues`](react_formz_src_types_form.md#formzvalues) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `PropsWithChildren`<[`UseFormOptions`](../interfaces/react_formz_src_hooks_forms_useForm.UseFormOptions.md)<`Values`\>\> |

#### Returns

`Element`

#### Defined in

[packages/react-formz/src/providers/FormProvider/FormProvider.tsx:12](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/providers/FormProvider/FormProvider.tsx#L12)

___

### useFormContext

▸ **useFormContext**<`Values`\>(): [`UseFormResult`](../interfaces/react_formz_src_hooks_forms_useForm.UseFormResult.md)<`Values`\>

Creates a form api for interacting with a form.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Values` | extends [`FormzValues`](react_formz_src_types_form.md#formzvalues) |

#### Returns

[`UseFormResult`](../interfaces/react_formz_src_hooks_forms_useForm.UseFormResult.md)<`Values`\>

#### Defined in

[packages/react-formz/src/providers/FormProvider/FormProvider.tsx:46](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/providers/FormProvider/FormProvider.tsx#L46)
