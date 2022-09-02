import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useForm, Form, Field } from "../src";
import { Input } from "antd";

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
};

const FieldTemplate: ComponentStory<typeof Form> = () => {
  return (
    <Form style={style} initialValues={initialValues}>
      <Field as={Input} name="firstName" />
      <Field as={Input} name="lastName" />
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
    </form>
  );
};

export const WithHook = HookTemplate.bind({});

WithHook.args = {};
