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

[packages/react-formz/src/components/Form/Form.types.ts:30](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Form/Form.types.ts#L30)

___

### component

• `Optional` **component**: ``"form"`` \| `ComponentType`<`FormComponentProps`\>

#### Defined in

[packages/react-formz/src/components/Form/Form.types.ts:32](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Form/Form.types.ts#L32)

___

### id

• `Optional` **id**: `string`

#### Inherited from

[UseFormOptions](hooks_forms_useForm.UseFormOptions.md).[id](hooks_forms_useForm.UseFormOptions.md#id)

#### Defined in

[packages/react-formz/src/hooks/forms/useForm.ts:9](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/forms/useForm.ts#L9)

___

### initialValues

• **initialValues**: `Values`

#### Inherited from

[UseFormOptions](hooks_forms_useForm.UseFormOptions.md).[initialValues](hooks_forms_useForm.UseFormOptions.md#initialvalues)

#### Defined in

[packages/react-formz/src/hooks/forms/useForm.ts:10](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/forms/useForm.ts#L10)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[UseFormOptions](hooks_forms_useForm.UseFormOptions.md).[name](hooks_forms_useForm.UseFormOptions.md#name)

#### Defined in

[packages/react-formz/src/hooks/forms/useForm.ts:8](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/forms/useForm.ts#L8)

___

### onFormRehydrated

• `Optional` **onFormRehydrated**: [`FormRehydrationCallback`](../modules/types_form.md#formrehydrationcallback)<`Values`\>

#### Overrides

[UseFormOptions](hooks_forms_useForm.UseFormOptions.md).[onFormRehydrated](hooks_forms_useForm.UseFormOptions.md#onformrehydrated)

#### Defined in

[packages/react-formz/src/components/Form/Form.types.ts:37](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Form/Form.types.ts#L37)

___

### onSubmit

• `Optional` **onSubmit**: [`FormSubmitCallback`](../modules/types_form.md#formsubmitcallback)<`Values`\>

#### Defined in

[packages/react-formz/src/components/Form/Form.types.ts:31](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Form/Form.types.ts#L31)

___

### resetOnSubmit

• `Optional` **resetOnSubmit**: `boolean`

If true, the form state will reset after a successful submission.

#### Defined in

[packages/react-formz/src/components/Form/Form.types.ts:36](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/components/Form/Form.types.ts#L36)

___

### saveDrafts

• `Optional` **saveDrafts**: `boolean`

#### Inherited from

[UseFormOptions](hooks_forms_useForm.UseFormOptions.md).[saveDrafts](hooks_forms_useForm.UseFormOptions.md#savedrafts)

#### Defined in

[packages/react-formz/src/hooks/forms/useForm.ts:11](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/hooks/forms/useForm.ts#L11)
