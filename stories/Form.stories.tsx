import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useForm, Form, Field } from "../src";

export default {
  title: "useForm",
  component: Form,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Form>;

const style: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 5,
  padding: 20,
  width: 400,
};

const initialValues = {
  firstName: "",
  lastName: "",
  isOver21: false
};

const FieldTemplate: ComponentStory<typeof Form> = () => {
  return (
    <Form style={style} name="WithFields" initialValues={initialValues}>
      <Field as="input" name="firstName" />
      <Field as="input" name="lastName" />
      <Field as="input" name="isOver21" type="checkbox" />
    </Form>
  );
};

export const WithFields = FieldTemplate.bind({});

WithFields.args = {};

const ComponentTemplate: ComponentStory<typeof Form> = () => {
  return (
    <Form style={style} name="WithForm" initialValues={initialValues}>
      {(form) => (
        <>
          <input
            name="firstName"
            value={form.values.firstName}
            onChange={form.handleChange}
          />
          <input
            name="lastName"
            value={form.values.lastName}
            onChange={form.handleChange}
          />
          <input
            name="isOver21"
            checked={form.values.isOver21}
            type="checkbox"
            onChange={form.handleChange}
          />
        </>
      )}
    </Form>
  );
};

export const WithForm = ComponentTemplate.bind({});

WithForm.args = {};

const HookTemplate: ComponentStory<typeof Form> = () => {
  const form = useForm({
    name: "WithHook",
    initialValues
  });

  return (
    <form style={style}>
      <input
        name="firstName"
        value={form.values.firstName}
        onChange={form.handleChange}
      />
      <input
        name="lastName"
        value={form.values.lastName}
        onChange={form.handleChange}
      />
      <input
        name="isOver21"
        type="checkbox"
        checked={form.values.isOver21}
        onChange={form.handleChange}
      />
    </form>
  );
};

export const WithHook = HookTemplate.bind({});

WithHook.args = {};

const array = new Array(1000).fill(null).map((_, index) => index);
const initialValuesPerformance: Record<string, string> = array.reduce(
  (acc, current) => {
    return {
      ...acc,
      [current.toString()]: "",
    };
  },
  {}
);

const PerformanceTemplate: ComponentStory<typeof Form> = () => {
  const form = useForm({
    name: "Performance",
    initialValues: initialValuesPerformance,
  });

  return (
    <form
      style={{
        ...style,
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%",
      }}
    >
      {array.map((name) => {
        return (
          <input
            key={name}
            name={name.toString()}
            value={form.values[name]}
            onChange={form.handleChange}
          />
        );
      })}
    </form>
  );
};

export const Performance = PerformanceTemplate.bind({});

Performance.args = {};
