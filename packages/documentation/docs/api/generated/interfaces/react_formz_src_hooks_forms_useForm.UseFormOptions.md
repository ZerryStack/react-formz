---
id: "react_formz_src_hooks_forms_useForm.UseFormOptions"
title: "Interface: UseFormOptions<Values>"
sidebar_label: "UseFormOptions"
custom_edit_url: null
---

[react-formz/src/hooks/forms/useForm](../modules/react_formz_src_hooks_forms_useForm.md).UseFormOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `Values` | extends [`FormzValues`](../modules/react_formz_src_types_form.md#formzvalues) |

## Hierarchy

- **`UseFormOptions`**

  ↳ [`FormProps`](react_formz_src_types_form.FormProps.md)

## Properties

### id

• `Optional` **id**: `string`

#### Defined in

[packages/react-formz/src/hooks/forms/useForm.ts:12](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/forms/useForm.ts#L12)

___

### initialValues

• **initialValues**: `Values`

The initial values of the form.

#### Defined in

[packages/react-formz/src/hooks/forms/useForm.ts:16](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/forms/useForm.ts#L16)

___

### name

• `Optional` **name**: `string`

A unique name for the form. If `saveDrafts` is enabled, a name is required.

#### Defined in

[packages/react-formz/src/hooks/forms/useForm.ts:11](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/forms/useForm.ts#L11)

___

### onFormRehydrated

• `Optional` **onFormRehydrated**: [`FormRehydrationCallback`](../modules/react_formz_src_types_form.md#formrehydrationcallback)<`Values`\>

A callback that will be called after a form has successfully been rehydrated with
the locally cached form state from a previous session. You can use this event
callback to notify users that the form has been rehydrated.

Example Usage:

```tsx
useForm({
 onFormRehydrated: () => notifyUser("We've restore your form!")
})
```

#### Defined in

[packages/react-formz/src/hooks/forms/useForm.ts:34](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/forms/useForm.ts#L34)

___

### saveDrafts

• `Optional` **saveDrafts**: `boolean`

If true, the form state will be saved to localstorage as the user updates values.

#### Defined in

[packages/react-formz/src/hooks/forms/useForm.ts:20](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/forms/useForm.ts#L20)

___

### schemaValidator

• `Optional` **schemaValidator**: [`SchemaValidator`](../classes/react_formz_src_models_SchemaValidator.SchemaValidator.md)<`Values`\>

#### Defined in

[packages/react-formz/src/hooks/forms/useForm.ts:35](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/forms/useForm.ts#L35)
