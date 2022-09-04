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
  isOver21: false,
};

function Input(
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) {
  return <input {...props} />;
}
const FieldTemplate: ComponentStory<typeof Form> = () => {
  return (
    <Form style={style} name="WithFields" initialValues={initialValues}>
      <Field
        as={({ error, ...inputProps }) => (
          <>
            <Input {...inputProps} />
            {error && <span aria-live="polite">{error}</span>}
          </>
        )}
        required
        name="firstName"
      />
      <Field as={Input} name="lastName" />
      <Field as={Input} name="isOver21" type="checkbox" />
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
    initialValues,
  });

  return (
    <form style={style}>
      <Input
        name="firstName"
        value={form.values.firstName}
        onChange={form.handleChange}
      />
      <Input
        name="lastName"
        value={form.values.lastName}
        onChange={form.handleChange}
      />
      <Input
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

const performanceStyle: React.CSSProperties = {
  ...style,
  flexDirection: "row",
  flexWrap: "wrap",
  width: "100%",
};

const PerformanceTemplate: ComponentStory<typeof Form> = () => {
  return (
    <Form
      style={performanceStyle}
      name="Performance"
      initialValues={initialValuesPerformance}
    >
      {array.map((name) => {
        return (
          <Field
            key={name}
            as={({ error, ...inputProps }) => (
              <div>
                <Input {...inputProps} />
                {error && <div><span aria-live="polite">{error}</span></div>}
              </div>
            )}
            name={name.toString()}
            required
          />
        );
      })}
    </Form>
  );
};

export const Performance = PerformanceTemplate.bind({});

Performance.args = {};
