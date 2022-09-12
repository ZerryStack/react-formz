---
id: "components_Form_Form_types.FormProps"
title: "Interface: FormProps<Values>"
sidebar_label: "FormProps"
custom_edit_url: null
---

[components/Form/Form.types](../modules/components_Form_Form_types.md).FormProps

## Type parameters

| Name | Type |
| :------ | :------ |
| `Values` | extends [`FormzValues`](../modules/types_form.md#formzvalues) |

## Hierarchy

- [`UseFormOptions`](hooks_forms_useForm.UseFormOptions.md)<`Values`\>

- `HtmlFormProps`

  ↳ **`FormProps`**

## Properties

### children

• `Optional` **children**: `ReactNode`

#### Defined in

[packages/react-formz/src/components/Form/Form.types.ts:28](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Form/Form.types.ts#L28)

___

### component

• `Optional` **component**: ``"form"`` \| `ComponentType`<`FormComponentProps`\>

If the value is a component then that component will be rendered
instead of the native html `form` element. 

Example Usage:

```
<Form component={MaterialUIForm} />
```

#### Defined in

[packages/react-formz/src/components/Form/Form.types.ts:44](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Form/Form.types.ts#L44)

___

### id

• `Optional` **id**: `string`

#### Inherited from

[UseFormOptions](hooks_forms_useForm.UseFormOptions.md).[id](hooks_forms_useForm.UseFormOptions.md#id)

#### Defined in

[packages/react-formz/src/hooks/forms/useForm.ts:14](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/forms/useForm.ts#L14)

___

### initialValues

• **initialValues**: `Values`

The initial values of the form.

#### Inherited from

[UseFormOptions](hooks_forms_useForm.UseFormOptions.md).[initialValues](hooks_forms_useForm.UseFormOptions.md#initialvalues)

#### Defined in

[packages/react-formz/src/hooks/forms/useForm.ts:18](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/forms/useForm.ts#L18)

___

### name

• `Optional` **name**: `string`

A unique name for the form. If `saveDrafts` is enabled, a name is required.

#### Inherited from

[UseFormOptions](hooks_forms_useForm.UseFormOptions.md).[name](hooks_forms_useForm.UseFormOptions.md#name)

#### Defined in

[packages/react-formz/src/hooks/forms/useForm.ts:13](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/forms/useForm.ts#L13)

___

### onFormRehydrated

• `Optional` **onFormRehydrated**: [`FormRehydrationCallback`](../modules/types_form.md#formrehydrationcallback)<`Values`\>

A callback that will be called after a form has successfully been rehydrated with
the locally cached form state from a previous session. You can use this event
callback to notify users that the form has been rehydrated.

Example Usage:

```tsx
<Form onFormRehydrated={() => notifyUser("We've restore your form!")} />
```

#### Overrides

[UseFormOptions](hooks_forms_useForm.UseFormOptions.md).[onFormRehydrated](hooks_forms_useForm.UseFormOptions.md#onformrehydrated)

#### Defined in

[packages/react-formz/src/components/Form/Form.types.ts:60](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Form/Form.types.ts#L60)

___

### onSubmit

• `Optional` **onSubmit**: [`FormSubmitCallback`](../modules/types_form.md#formsubmitcallback)<`Values`\>

A callback that will be called if and when a form is submitted and 
the form is not in an invalid state.

#### Defined in

[packages/react-formz/src/components/Form/Form.types.ts:33](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Form/Form.types.ts#L33)

___

### resetOnSubmit

• `Optional` **resetOnSubmit**: `boolean`

If true, the form state will reset after a successful submission.

#### Defined in

[packages/react-formz/src/components/Form/Form.types.ts:48](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Form/Form.types.ts#L48)

___

### saveDrafts

• `Optional` **saveDrafts**: `boolean`

If true, the form state will be saved to localstorage as the user updates values.

#### Inherited from

[UseFormOptions](hooks_forms_useForm.UseFormOptions.md).[saveDrafts](hooks_forms_useForm.UseFormOptions.md#savedrafts)

#### Defined in

[packages/react-formz/src/hooks/forms/useForm.ts:22](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/forms/useForm.ts#L22)

___

### schemaValidator

• `Optional` **schemaValidator**: `SchemaValidator`<`Values`\>

Validates the form data against a schema. Could be `zod` or `yup` or any custom
schema validator.

#### Overrides

[UseFormOptions](hooks_forms_useForm.UseFormOptions.md).[schemaValidator](hooks_forms_useForm.UseFormOptions.md#schemavalidator)

#### Defined in

[packages/react-formz/src/components/Form/Form.types.ts:65](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Form/Form.types.ts#L65)
