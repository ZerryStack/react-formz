import "react-datepicker/dist/react-datepicker.css";
import { ComponentStory } from "@storybook/react";
import React from "react";
import DatePicker from "react-datepicker";
import { CustomField, DependentTextField, ErrorMessage, Form } from "@zerry/react-formz";

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
      <CustomField<Date | null>
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

type RangeFormValues = {
    date: [Date | null | undefined, Date | null | undefined];
  };

const RangeTemplate: ComponentStory<any> = () => {
    return (
      <Form<RangeFormValues>
        initialValues={{ date: [new Date("01/01/1970"), new Date("01/01/1980")] }}
      >
        <CustomField<RangeFormValues["date"]>
          name="date"
          label="Date"
          type="date"
          required
          as={({ input: { label, value = [],  ...input } }) => {
            return (
              <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <label htmlFor={input.name}>{label}</label>
                <DatePicker
                  onChange={([start, end]) => input.onChange([start, end])}
                  onBlur={input.onBlur}
                  startDate={value[0]}
                  endDate={value[1]}
                  customInput={<input className="rf-input" style={{ width: 300 }} />}
                  selectsRange
                />
              </div>
            );
          }}
        />
      </Form>
    );
  };
  
  export const ReactDatePickerRange = RangeTemplate.bind({});
  
  ReactDatePickerRange.args = {};
