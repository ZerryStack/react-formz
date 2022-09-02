import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useForm, Form } from "../src";

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

const ComponentTemplate: ComponentStory<typeof Form> = () => {
  return (
    <Form style={style} initialValues={initialValues}>
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
      />
      <input
        name="lastName"
        value={form.values.lastName}
        onChange={form.handleChange}
      />
    </form>
  );
};

export const WithHook = HookTemplate.bind({});

WithHook.args = {};
