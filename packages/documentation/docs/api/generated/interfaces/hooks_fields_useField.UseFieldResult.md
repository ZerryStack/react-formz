---
id: "hooks_fields_useField.UseFieldResult"
title: "Interface: UseFieldResult<Value>"
sidebar_label: "UseFieldResult"
custom_edit_url: null
---

[hooks/fields/useField](../modules/hooks_fields_useField.md).UseFieldResult

## Type parameters

| Name | Type |
| :------ | :------ |
| `Value` | extends [`FieldValue`](../modules/types_field.md#fieldvalue) |

## Properties

### checked

• `Optional` **checked**: `boolean`

#### Defined in

[packages/react-formz/src/hooks/fields/useField.ts:24](https://github.com/ZerryStack/react-formz/blob/1bf2d41/packages/react-formz/src/hooks/fields/useField.ts#L24)

___

### error

• **error**: `undefined` \| [`FormzError`](../modules/types_form.md#formzerror)

#### Defined in

[packages/react-formz/src/hooks/fields/useField.ts:23](https://github.com/ZerryStack/react-formz/blob/1bf2d41/packages/react-formz/src/hooks/fields/useField.ts#L23)

___

### formId

• **formId**: `string`

#### Defined in

[packages/react-formz/src/hooks/fields/useField.ts:25](https://github.com/ZerryStack/react-formz/blob/1bf2d41/packages/react-formz/src/hooks/fields/useField.ts#L25)

___

### onBlur

• **onBlur**: (`event`: `FocusEvent`<`any`, `Element`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `FocusEvent`<`any`, `Element`\> |

##### Returns

`void`

#### Defined in

[packages/react-formz/src/hooks/fields/useField.ts:22](https://github.com/ZerryStack/react-formz/blob/1bf2d41/packages/react-formz/src/hooks/fields/useField.ts#L22)

___

### onChange

• **onChange**: (`event`: [`FormzChangeEvent`](types_events.FormzChangeEvent.md)<`any`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`FormzChangeEvent`](types_events.FormzChangeEvent.md)<`any`\> |

##### Returns

`void`

#### Defined in

[packages/react-formz/src/hooks/fields/useField.ts:21](https://github.com/ZerryStack/react-formz/blob/1bf2d41/packages/react-formz/src/hooks/fields/useField.ts#L21)

___

### value

• **value**: `Value`

#### Defined in

[packages/react-formz/src/hooks/fields/useField.ts:20](https://github.com/ZerryStack/react-formz/blob/1bf2d41/packages/react-formz/src/hooks/fields/useField.ts#L20)
