import "react-datepicker/dist/react-datepicker.css";

import { ComponentStory } from "@storybook/react";
import React from "react";
import DatePicker from "react-datepicker";
import { DateField, DependentTextField, ErrorMessage, Form } from "../src";

export default {
  title: "Integrations/React Date Picker",
  parameters: {
    layout: "fullscreen",
  },
};

type FormValues = {
  date: Date | null | undefined;
  favoriteDrink: string;
};

const Template: ComponentStory<any> = () => {
  return (
    <Form<FormValues>
      initialValues={{ date: new Date("01/01/1970"), favoriteDrink: "" }}
    >
      <DateField
        name="date"
        label="Date"
        required
        as={({ input: { label, ...input } }) => {
          return (
            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <label htmlFor={input.name}>{label}</label>
              <DatePicker
                onChange={(date) => input.onChange(date)}
                onBlur={input.onBlur}
                selected={input.value}
                customInput={<input className="rf-input" />}
              />
            </div>
          );
        }}
      />
      <DependentTextField<FormValues>
        name="favoriteDrink"
        label="Favorite Drink"
        as={({ input: { label, ...input } }) => {
          return (
            <>
              <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <label htmlFor={input.name}>{label}</label>
                <input {...input} className="rf-input" />
              </div>
              <ErrorMessage field={input.name} />
            </>
          );
        }}
        dependencies={({ date }) => ({ date })}
        validate={(_, dependencies) => {
          const isUnder21 =
            dependencies.date &&
            new Date().getFullYear() -
              new Date(dependencies.date).getFullYear() <
              21;

          if (isUnder21) {
            return "Must be over 21 to answer";
          }
          return null;
        }}
      />
    </Form>
  );
};

export const ReactDatePicker = Template.bind({});

ReactDatePicker.args = {};
