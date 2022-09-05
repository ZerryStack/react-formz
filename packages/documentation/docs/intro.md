---
sidebar_position: 1
---

# Getting Started

React Formz was built to be performant and as unopinionated as possible about how you build your forms.

## Motivation

Most other form libraries either use React's Context API or Redux. When it comes to React's Context API you will run into performance issues with the more components you have and the more updates you are making to form state per second. Redux on the other hand is extremely bloated and overly verbose. To make it less verbose you have to add additional dependencies and that just increases your bundle size.

I wanted a form library that was blazing fast and didn't require the use of `React.memo` or `shouldComponentUpdate` to optimize performance. A form library should enable developers to just build forms without having to spend valuable time optimizing re-renders. After reviewing other libraries I couldn't find a form library that didn't require user-defined optimization once forms became complex or nested and I found that frustrating. So, React Formsz was born.

## Installation

### NPM

React Formz can be installed the same as every other package.

```sh
npm install react-formz
```

### Yarn

```sh
yarn add react-formz
```

## Da Basics

```tsx title="Basic usage"
import { Form, Field } from "react-formz";

function MyCoolInput({ error, ...restProps }) {
  return (
    <>
      <input {...restProps} />
      {error && <span aria-live="polite">{error.message}</span>}
    </>
  );
}

function MyCoolForm({ submitToServer }) {
  return (
    <Form
      name="MyCoolForm"
      initialValues={{ fullName: "" }}
      onSubmit={submitToServer}
    >
      <Field
        name="fullName"
        as={MyCoolInput}
        required
        pattern={/^[\w]+\s[\w]+$/gm}
      />
      <Field
        name="title"
        as={MyCoolInput}
        validate={(value) => {
          if (value !== "CoolDude") return "Have you heard about Doge Coin?";
          return null;
        }}
      />
    </Form>
  );
}
```
