---
id: "react_formz_src_types_keys"
title: "Module: react-formz/src/types/keys"
sidebar_label: "react-formz/src/types/keys"
sidebar_position: 0
custom_edit_url: null
---

## Type Aliases

### TypeFromPath

Ƭ **TypeFromPath**<`T`, `P`\>: `P` extends \`${infer Left}.${infer Right}\` ? `Left` extends `ValidKey`<`T`\> ? `FieldWithPossiblyUndefined`<`T`[`Left`], `Right`\> : `TypeFromBracketNotation`<`T`, `Left`, `Right`\> : `P` extends `ValidKey`<`T`\> ? `T`[`P`] : `LastIndexedField`<`T`, `P`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `P` |

#### Defined in

[packages/react-formz/src/types/keys.ts:52](https://github.com/ZerryStack/react-formz/blob/main/packages/react-formz/src/types/keys.ts#L52)
