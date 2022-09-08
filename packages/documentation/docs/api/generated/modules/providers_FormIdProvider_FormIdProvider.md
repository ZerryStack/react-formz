---
id: "providers_FormIdProvider_FormIdProvider"
title: "Module: providers/FormIdProvider/FormIdProvider"
sidebar_label: "providers/FormIdProvider/FormIdProvider"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### FormIdProvider

▸ **FormIdProvider**<`Values`\>(`__namedParameters`): `Element`

Provides consumers with a stable unique id for a
single form. Since the `id` is stable, it gets it's
own provider which allows any component in its' subtree
to subscribe to the `id` and not re-render because the
`id` never changes. This id is used to interact with the
form store.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Values` | extends [`FormzValues`](types_form.md#formzvalues) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `PropsWithChildren`<[`UseFormOptions`](../interfaces/hooks_forms_useForm.UseFormOptions.md)<`Values`\>\> |

#### Returns

`Element`

#### Defined in

[packages/react-formz/src/providers/FormIdProvider/FormIdProvider.tsx:17](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/providers/FormIdProvider/FormIdProvider.tsx#L17)

___

### useFormIdContext

▸ **useFormIdContext**(): `string`

Hook to grab the id of a form from the form id context.

#### Returns

`string`

#### Defined in

[packages/react-formz/src/providers/FormIdProvider/FormIdProvider.tsx:34](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/providers/FormIdProvider/FormIdProvider.tsx#L34)
