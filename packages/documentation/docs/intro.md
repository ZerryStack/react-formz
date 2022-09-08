---
sidebar_position: 1
---

# Getting Started

React Formz was built to be performant and as unopinionated as possible about how you build your forms.

## Motivation

Most other form libraries either use React's Context API or Redux. When it comes to React's Context API you will run into performance issues with the more components you have and the more updates you are making to form state per second. Redux on the other hand is extremely bloated and overly verbose. To make it less verbose you have to add additional dependencies and that just increases your bundle size.

I wanted a form library that was blazing fast and didn't require the use of `React.memo` or `shouldComponentUpdate` to optimize performance. A form library should enable developers to just build forms without having to spend valuable time optimizing re-renders. After reviewing other libraries I couldn't find a form library that didn't require user-defined optimization once forms became complex or nested and I found that frustrating. So, React Formsz was born.

## Features

- Written in Typescript
- Accessibility built-in
- Dependent fields.
- Custom form validation
- Pre-built validations for common use cases
- Components only re-render if their values or dependent values change. No more use of `React.memo` or `shouldComponentUpdate`. Your formz will be maximally performant from the get go.
- Near constant performance when using inputs and changing values. Because re-renders only occur when an inputs value changes, you can add as many components as needed and the performance will be the same. No more laggy typing on large forms.
- Ability to persist form state locally and rehydrate when a user returns. Useful for when users partially complete a form and might accidentally exit the page.
- Support for components or hooks, we don't care how you want to use react. All components have an equivalent hook that you can use for building your own primitives. So, the `Field` component has a `useField` hook.

## Installation

### NPM

React Formz can be installed the same as every other package.

```sh
npm install @zerry/react-formz immer
```

### Yarn

```sh
yarn add @zerry/react-formz immer
```

