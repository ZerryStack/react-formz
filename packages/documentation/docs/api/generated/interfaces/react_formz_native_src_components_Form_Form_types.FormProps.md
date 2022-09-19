---
id: "react_formz_native_src_components_Form_Form_types.FormProps"
title: "Interface: FormProps<Values>"
sidebar_label: "FormProps"
custom_edit_url: null
---

[react-formz-native/src/components/Form/Form.types](../modules/react_formz_native_src_components_Form_Form_types.md).FormProps

## Type parameters

| Name | Type |
| :------ | :------ |
| `Values` | extends [`FormzValues`](../modules/react_formz_src_types_form.md#formzvalues) |

## Properties

### component

• `Optional` **component**: `ComponentType`<{}\>

If the value is a component then that component will be rendered
instead of the native html `form` element.

Example Usage:

```
<Form component={View} />
```

#### Defined in

[packages/react-formz-native/src/components/Form/Form.types.ts:41](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz-native/src/components/Form/Form.types.ts#L41)

___

### initialValues

• **initialValues**: `Values`

The initial values of the form.

#### Defined in

[packages/react-formz-native/src/components/Form/Form.types.ts:11](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz-native/src/components/Form/Form.types.ts#L11)

___

### name

• `Optional` **name**: `string`

A unique name for the form. If `saveDrafts` is enabled, a name is required.

#### Defined in

[packages/react-formz-native/src/components/Form/Form.types.ts:7](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz-native/src/components/Form/Form.types.ts#L7)

___

### saveDrafts

• `Optional` **saveDrafts**: `boolean`

If true, the form state will be saved to localstorage as the user updates values.

#### Defined in

[packages/react-formz-native/src/components/Form/Form.types.ts:15](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz-native/src/components/Form/Form.types.ts#L15)

___

### schemaValidator

• `Optional` **schemaValidator**: [`SchemaValidator`](../classes/react_formz_src_models_SchemaValidator.SchemaValidator.md)<`Values`\>

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

[packages/react-formz-native/src/components/Form/Form.types.ts:29](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz-native/src/components/Form/Form.types.ts#L29)
