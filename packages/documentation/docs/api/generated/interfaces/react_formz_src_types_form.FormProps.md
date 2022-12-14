---
id: "react_formz_src_types_form.FormProps"
title: "Interface: FormProps<Values>"
sidebar_label: "FormProps"
custom_edit_url: null
---

[react-formz/src/types/form](../modules/react_formz_src_types_form.md).FormProps

## Type parameters

| Name | Type |
| :------ | :------ |
| `Values` | extends [`FormzValues`](../modules/react_formz_src_types_form.md#formzvalues) |

## Hierarchy

- [`UseFormOptions`](react_formz_src_hooks_forms_useForm.UseFormOptions.md)<`Values`\>

  ↳ **`FormProps`**

  ↳↳ [`WebFormProps`](react_formz_web_src_components_Form_Form_types.WebFormProps.md)

  ↳↳ [`NativeFormProps`](react_formz_native_src_components_Form_Form_types.NativeFormProps.md)

## Properties

### children

• `Optional` **children**: `ReactNode`

#### Defined in

[packages/react-formz/src/types/form.ts:85](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/form.ts#L85)

___

### id

• `Optional` **id**: `string`

#### Inherited from

[UseFormOptions](react_formz_src_hooks_forms_useForm.UseFormOptions.md).[id](react_formz_src_hooks_forms_useForm.UseFormOptions.md#id)

#### Defined in

[packages/react-formz/src/hooks/forms/useForm.ts:17](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/forms/useForm.ts#L17)

___

### initialValues

• **initialValues**: `Values`

The initial values of the form.

#### Inherited from

[UseFormOptions](react_formz_src_hooks_forms_useForm.UseFormOptions.md).[initialValues](react_formz_src_hooks_forms_useForm.UseFormOptions.md#initialvalues)

#### Defined in

[packages/react-formz/src/hooks/forms/useForm.ts:21](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/forms/useForm.ts#L21)

___

### name

• `Optional` **name**: `string`

A unique name for the form. If `saveDrafts` is enabled, a name is required.

#### Inherited from

[UseFormOptions](react_formz_src_hooks_forms_useForm.UseFormOptions.md).[name](react_formz_src_hooks_forms_useForm.UseFormOptions.md#name)

#### Defined in

[packages/react-formz/src/hooks/forms/useForm.ts:16](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/forms/useForm.ts#L16)

___

### onFormRehydrated

• `Optional` **onFormRehydrated**: [`FormRehydrationCallback`](../modules/react_formz_src_types_form.md#formrehydrationcallback)<`Values`\>

A callback that will be called after a form has successfully been rehydrated with
the locally cached form state from a previous session. You can use this event
callback to notify users that the form has been rehydrated.

Example Usage:

```tsx
<Form onFormRehydrated={() => notifyUser("We've restore your form!")} />
```

#### Overrides

[UseFormOptions](react_formz_src_hooks_forms_useForm.UseFormOptions.md).[onFormRehydrated](react_formz_src_hooks_forms_useForm.UseFormOptions.md#onformrehydrated)

#### Defined in

[packages/react-formz/src/types/form.ts:106](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/form.ts#L106)

___

### onSubmit

• `Optional` **onSubmit**: [`FormSubmitCallback`](../modules/react_formz_src_types_form.md#formsubmitcallback)<`Values`\>

A callback that will be called if and when a form is submitted and 
the form is not in an invalid state.

#### Defined in

[packages/react-formz/src/types/form.ts:90](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/form.ts#L90)

___

### persist

• `Optional` **persist**: `boolean`

If true, a forms state will not be deleted from the store when the form is unmounted.
This is useful for forms that might span multiple pages or tabs like a wizard
or a signup form on a mobile device.

#### Overrides

[UseFormOptions](react_formz_src_hooks_forms_useForm.UseFormOptions.md).[persist](react_formz_src_hooks_forms_useForm.UseFormOptions.md#persist)

#### Defined in

[packages/react-formz/src/types/form.ts:117](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/form.ts#L117)

___

### resetOnSubmit

• `Optional` **resetOnSubmit**: `boolean`

If true, the form state will reset after a successful submission.

#### Defined in

[packages/react-formz/src/types/form.ts:94](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/form.ts#L94)

___

### saveDrafts

• `Optional` **saveDrafts**: `boolean`

If true, the form state will be saved to localstorage as the user updates values.

#### Inherited from

[UseFormOptions](react_formz_src_hooks_forms_useForm.UseFormOptions.md).[saveDrafts](react_formz_src_hooks_forms_useForm.UseFormOptions.md#savedrafts)

#### Defined in

[packages/react-formz/src/hooks/forms/useForm.ts:25](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/forms/useForm.ts#L25)

___

### schemaValidator

• `Optional` **schemaValidator**: [`SchemaValidator`](../classes/react_formz_src_models_SchemaValidator.SchemaValidator.md)<`Values`\>

Validates the form data against a schema. Could be `zod` or `yup` or any custom
schema validator.

#### Overrides

[UseFormOptions](react_formz_src_hooks_forms_useForm.UseFormOptions.md).[schemaValidator](react_formz_src_hooks_forms_useForm.UseFormOptions.md#schemavalidator)

#### Defined in

[packages/react-formz/src/types/form.ts:111](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/form.ts#L111)
