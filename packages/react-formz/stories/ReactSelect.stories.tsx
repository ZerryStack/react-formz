import { ComponentStory } from "@storybook/react";
import React from "react";
import { Field, Form, SubmitButton } from "../src";
import Select, { MultiValue } from "react-select";

export default {
  title: "Integrations/React Select",
  parameters: {
    layout: "fullscreen",
  },
  argTypes: { onSubmit: { action: 'submitted' } },
};

type FormValues = {
  flavor: string;
};

type Value = ({ label: string, value: string }) | undefined | null;

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Template: ComponentStory<any> = () => {
  return (
    <Form<FormValues> initialValues={{ flavor: "chocolate" }}>
      <Field<"flavor", Value>
        name="flavor"
        label="Favorite Flavor"
        as={({ input: { label, ...input } }) => {
          return (
            <Select
              id={input.id}
              name={input.name}
              isClearable
              options={options}
              value={input.value}
              onChange={(value) => {
                input.onChange(value);
              }}
            />
          );
        }}
      />
    </Form>
  );
};

export const BasicSelect = Template.bind({});

BasicSelect.args = {};

const MultiTemplate: ComponentStory<any> = (args) => {
  return (
    <Form<FormValues> initialValues={{ flavor: "chocolate" }} onSubmit={(value) => args.onSubmit(value)}>
      <Field<"flavor", MultiValue<{ label: string, value: string }>>
        name="flavor"
        label="Favorite Flavor"
        as={({ input: { label, ...input }, storeValue }) => {
          return (
            <Select
              id={input.id}
              name={input.name}
              isClearable
              options={options}
              value={storeValue}
              onChange={(value) => {
                input.onChange(value);
              }}
              isMulti
            />
          );
        }}
      />
      <SubmitButton>Submit</SubmitButton>
    </Form>
  );
};

export const MultiSelect = MultiTemplate.bind({});

MultiSelect.args = {};

