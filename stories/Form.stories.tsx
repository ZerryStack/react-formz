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

const inputStyle: React.CSSProperties = {
  border: "0px",
};

const initialValues = {
  firstName: "",
  lastName: "",
};

const FieldTemplate: ComponentStory<typeof Form> = () => {
  return (
    <Form style={style} initialValues={initialValues}>
      <Field as="input" name="firstName" style={inputStyle} />
      <Field as="input" name="lastName" style={inputStyle} />
    </Form>
  );
};

export const WithFields = FieldTemplate.bind({});

WithFields.args = {};

const ComponentTemplate: ComponentStory<typeof Form> = () => {
  return (
    <Form style={style} initialValues={initialValues}>
      {(form) => (
        <>
          <input
            name="firstName"
            value={form.values.firstName}
            onChange={form.handleChange}
            style={inputStyle}
          />
          <input
            name="lastName"
            value={form.values.lastName}
            onChange={form.handleChange}
            style={inputStyle}
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
    initialValues: {
      firstName: "",
      lastName: "",
    },
  });

  return (
    <form style={style}>
      <input
        name="firstName"
        value={form.values.firstName}
        onChange={form.handleChange}
        style={inputStyle}
      />
      <input
        name="lastName"
        value={form.values.lastName}
        onChange={form.handleChange}
        style={inputStyle}
      />
    </form>
  );
};

export const WithHook = HookTemplate.bind({});

WithHook.args = {};
