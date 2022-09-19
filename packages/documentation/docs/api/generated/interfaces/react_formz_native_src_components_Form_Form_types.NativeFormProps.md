---
id: "react_formz_native_src_components_Form_Form_types.NativeFormProps"
title: "Interface: NativeFormProps<Values>"
sidebar_label: "NativeFormProps"
custom_edit_url: null
---

[react-formz-native/src/components/Form/Form.types](../modules/react_formz_native_src_components_Form_Form_types.md).NativeFormProps

## Type parameters

| Name | Type |
| :------ | :------ |
| `Values` | extends [`FormzValues`](../modules/react_formz_src_types_form.md#formzvalues) |

## Hierarchy

- [`FormProps`](react_formz_src_types_form.FormProps.md)<`Values`\>

- `ViewProps`

  ↳ **`NativeFormProps`**

## Properties

### children

• `Optional` **children**: `ReactNode`

#### Inherited from

[FormProps](react_formz_src_types_form.FormProps.md).[children](react_formz_src_types_form.FormProps.md#children)

#### Defined in

[packages/react-formz/src/types/form.ts:85](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/form.ts#L85)

___

### component

• `Optional` **component**: `ComponentType`<{}\>

If the value is a component then that component will be rendered
instead of the native html `form` element.

Example Usage:

```
<Form component={View} />
```

#### Defined in

[packages/react-formz-native/src/components/Form/Form.types.ts:15](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz-native/src/components/Form/Form.types.ts#L15)

___

### id

• `Optional` **id**: `string`

#### Inherited from

[FormProps](react_formz_src_types_form.FormProps.md).[id](react_formz_src_types_form.FormProps.md#id)

#### Defined in

[packages/react-formz/src/hooks/forms/useForm.ts:17](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/forms/useForm.ts#L17)

___

### initialValues

• **initialValues**: `Values`

The initial values of the form.

#### Inherited from

[FormProps](react_formz_src_types_form.FormProps.md).[initialValues](react_formz_src_types_form.FormProps.md#initialvalues)

#### Defined in

[packages/react-formz/src/hooks/forms/useForm.ts:21](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/forms/useForm.ts#L21)

___

### name

• `Optional` **name**: `string`

A unique name for the form. If `saveDrafts` is enabled, a name is required.

#### Inherited from

[FormProps](react_formz_src_types_form.FormProps.md).[name](react_formz_src_types_form.FormProps.md#name)

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

#### Inherited from

[FormProps](react_formz_src_types_form.FormProps.md).[onFormRehydrated](react_formz_src_types_form.FormProps.md#onformrehydrated)

#### Defined in

[packages/react-formz/src/types/form.ts:106](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/form.ts#L106)

___

### onSubmit

• `Optional` **onSubmit**: [`FormSubmitCallback`](../modules/react_formz_src_types_form.md#formsubmitcallback)<`Values`\>

A callback that will be called if and when a form is submitted and 
the form is not in an invalid state.

#### Inherited from

[FormProps](react_formz_src_types_form.FormProps.md).[onSubmit](react_formz_src_types_form.FormProps.md#onsubmit)

#### Defined in

[packages/react-formz/src/types/form.ts:90](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/form.ts#L90)

___

### persist

• `Optional` **persist**: `boolean`

If true, a forms state will not be deleted from the store when the form is unmounted.
This is useful for forms that might span multiple pages or tabs like a wizard
or a signup form on a mobile device.

#### Inherited from

[FormProps](react_formz_src_types_form.FormProps.md).[persist](react_formz_src_types_form.FormProps.md#persist)

#### Defined in

[packages/react-formz/src/types/form.ts:117](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/form.ts#L117)

___

### resetOnSubmit

• `Optional` **resetOnSubmit**: `boolean`

If true, the form state will reset after a successful submission.

#### Inherited from

[FormProps](react_formz_src_types_form.FormProps.md).[resetOnSubmit](react_formz_src_types_form.FormProps.md#resetonsubmit)

#### Defined in

[packages/react-formz/src/types/form.ts:94](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/form.ts#L94)

___

### saveDrafts

• `Optional` **saveDrafts**: `boolean`

If true, the form state will be saved to localstorage as the user updates values.

#### Inherited from

[FormProps](react_formz_src_types_form.FormProps.md).[saveDrafts](react_formz_src_types_form.FormProps.md#savedrafts)

#### Defined in

[packages/react-formz/src/hooks/forms/useForm.ts:25](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/forms/useForm.ts#L25)

___

### schemaValidator

• `Optional` **schemaValidator**: [`SchemaValidator`](../classes/react_formz_src_models_SchemaValidator.SchemaValidator.md)<`Values`\>

Validates the form data against a schema. Could be `zod` or `yup` or any custom
schema validator.

#### Inherited from

[FormProps](react_formz_src_types_form.FormProps.md).[schemaValidator](react_formz_src_types_form.FormProps.md#schemavalidator)

#### Defined in

[packages/react-formz/src/types/form.ts:111](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/form.ts#L111)
