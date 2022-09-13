import { ComponentStory } from "@storybook/react";
import React from "react";
import {
  DateField,
  ErrorMessage,
  Form,
  SubmitButton,
  TextField,
} from "@zerry/react-formz";
import zod from "zod";
import ZodSchemaValidator from "@zerry/react-formz-validators-zod";

export default {
  title: "Validations/Zod",
  parameters: {
    layout: "fullscreen",
  },
  argTypes: { onSubmit: { action: "submitted" } },
};

type FormValues = {
  name: string;
  dob: string;
};

const schema = zod.object({
  name: zod.string().min(10),
  dob: zod.string()
});

const schemaValidator = new ZodSchemaValidator(schema);

const Template: ComponentStory<any> = (args) => {
  return (
    <Form<FormValues>
      initialValues={{ name: "", dob: "1970-01-01" }}
      schemaValidator={schemaValidator}
      onSubmit={args.onSubmit}
    >
      <TextField
        name="name"
        label="Name"
        as={({ input: { label, ...input } }) => {
          return (
            <div>
              <label htmlFor={input.name}>{label}</label>
              <input className="rf-input" {...input} />
              <ErrorMessage field={input.name} onlyShowIfTouched={false} className="rf-error" />
            </div>
          );
        }}
      />
      <DateField
        name="dob"
        label="Date of Birth"
        as={({ input: { label, value, ...input } }) => {
          return (
            <div>
              <label htmlFor={input.name}>{label}</label>
              <input className="rf-input" value={value} {...input} />
              <ErrorMessage field={input.name} onlyShowIfTouched={false} className="rf-error" />
            </div>
          );
        }}
      />
      <div>
        <SubmitButton>Submit</SubmitButton>
      </div>
    </Form>
  );
};

export const Basic = Template.bind({});

Basic.args = {};
