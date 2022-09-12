---
id: "hooks_forms_useForm.UseFormOptions"
title: "Interface: UseFormOptions<Values>"
sidebar_label: "UseFormOptions"
custom_edit_url: null
---

[hooks/forms/useForm](../modules/hooks_forms_useForm.md).UseFormOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `Values` | extends [`FormzValues`](../modules/types_form.md#formzvalues) |

## Hierarchy

- **`UseFormOptions`**

  ↳ [`FormProps`](components_Form_Form_types.FormProps.md)

## Properties

### id

• `Optional` **id**: `string`

#### Defined in

[packages/react-formz/src/hooks/forms/useForm.ts:14](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/forms/useForm.ts#L14)

___

### initialValues

• **initialValues**: `Values`

The initial values of the form.

#### Defined in

[packages/react-formz/src/hooks/forms/useForm.ts:18](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/forms/useForm.ts#L18)

___

### name

• `Optional` **name**: `string`

A unique name for the form. If `saveDrafts` is enabled, a name is required.

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
useForm({
 onFormRehydrated: () => notifyUser("We've restore your form!")
})
```

#### Defined in

[packages/react-formz/src/hooks/forms/useForm.ts:36](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/forms/useForm.ts#L36)

___

### saveDrafts

• `Optional` **saveDrafts**: `boolean`

If true, the form state will be saved to localstorage as the user updates values.

#### Defined in

[packages/react-formz/src/hooks/forms/useForm.ts:22](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/forms/useForm.ts#L22)

___

### schemaValidator

• `Optional` **schemaValidator**: `SchemaValidator`<`Values`\>

#### Defined in

[packages/react-formz/src/hooks/forms/useForm.ts:37](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/forms/useForm.ts#L37)
