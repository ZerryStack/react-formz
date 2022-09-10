# React Formz 🚀

A small, blazing fast, intuitive form library for React. React Formz has a cozy api that let's you build forms they way you want to. With less the 10kb bundle size, React Formz boasts near constant performance regardless of how many form elements you render.

[![Build Size](https://img.shields.io/bundlephobia/minzip/%40zerry%2Freact-formz?label=bundle%20size&style=flat&colorA=000000&colorB=000000)](https://bundlephobia.com/result?p=%40zerry%2Freact-formz)
[![Version](https://img.shields.io/npm/v/%40zerry%2Freact-formz?style=flat&colorA=000000&colorB=000000)](https://www.npmjs.com/package/%40zerry%2Freact-formz)
[![Downloads](https://img.shields.io/npm/dt/%40zerry%2Freact-formz.svg?style=flat&colorA=000000&colorB=000000)](https://www.npmjs.com/package/%40zerry%2Freact-formz)

Get started now:

```bash
npm install @zerry/react-formz immer
```

```bash
yarn add @zerry/react-formz immer
```

Visit the official website [https://react-formz.zerry.dev/](https://react-formz.zerry.dev/)

## Summary

React Formz is a headless (meaning it does not provide a ui) library for building forms in React. The goal of this library is to solve 2 recurring issues that arise when building forms with other libraries:

1. Performance Bottlenecks - With most other form libraries when you need to build forms with nested inputs i.e. not render directly within the parent `Form` element, you will run into performance issues.
2. Sloppy Syntax/Code - Partly because of the first issue, with most other form libraries you almost always end up writing less than ideal code using `shouldComponentUpdate` or `React.memo` and the code becomes unreadable after a few months of development. Other reasons that may cause sloppy code is when you start needing dependent fields i.e. a field that depends on the value of another field or fields.

React Formz solves both of those problems enabling you to build forms that are performance optimized right out of the box. React Formz guarantess near constant performance when typing/interacting with inputs regardless of the number of inputs that are rendered. This ensures that your users never run into laggy forms and you never have to comprise on code quality. React Formz inputs **only** re-render when their value (or their dependencies if applicable) changes. This ensures maximum performance.

In addition, React Formz makes form building feel natural and declarative. Building forms are neccessarily a declarative coding paradigm where fields are identified often by the type of value they hold i.e. `text`, `number`, `date`, etc... React formz requires no boilerplate code to get started, in its most basic form you only need 2 components `Form` and `Field`.

```tsx
import {
  Form,
  TextField,
  NumberField,
  DependentTextField,
} from "@zerry/react-formz";

const MyForm = () => {
  return (
    <Form initialValues={{ name: "", age: "", favoriteDrink: "" }}>
      <TextField
        required
        name="name"
        as={({ input }) => <input {...input} />}
      />
      <NumberField
        required
        name="age"
        as={({ input }) => <input {...input} />}
      />
      <DependentTextField
        name="favoriteDrink"
        dependencies={(formValues) => ({ age: formValues.age })}
        as={({ input }) => <input {...input} />}
        validate={(_, dependencies) => {
            if (dependencies.age < 21) return "You must be 21 to answer.";
            return null;
        }}
        onDependenciesChange={(dependencies, actions) => {
            if (dependencies.age < 21) {
                actions.setValue("None");
            }
        }}
      />
    </Form>
  );
};
```

## Features

- Written in Typescript
- Accessibility built-in
- First class support for dependent fields.
- Custom form validation
- Ability to render array/list data structures
- Pre-built field validations for common use cases
- Components only re-render if their values or dependent values change. No more use of React.memo or shouldComponentUpdate. Your formz will be maximally performant from the get go.
- Near constant performance when using inputs and changing values. Because re-renders only occur when an inputs value changes, you can add as many components as needed and the performance will be the same. No more laggy typing on large forms.
- Ability to persist form state locally and rehydrate when a user returns. Useful for when users partially complete a form and might accidentally exit the page.
- Support for components or hooks, we don't care how you want to use react. All components have an equivalent hook that you can use for building your own primitives. So, the Field component has a useField hook.
