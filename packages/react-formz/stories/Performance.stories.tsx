import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Form, Field, ErrorMessage } from "../src";
import { FormControl, FormHelperText, InputLabel } from "@mui/material";
import { FieldComponentProps } from "../src/components/Field";

export default {
  title: "Performance",
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

function Input<Key extends string>(
  props: FieldComponentProps<Key, string> & { dude?: true }
) {
  const { input } = props;

  return (
    <>
      <input {...input} className="rf-input" />
      <ErrorMessage field={input.name} />
    </>
  );
}

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

const ReactFormzField = ({
  error,
  input,
  ...restProps
}: FieldComponentProps<string, string>) => {
  return (
    <FormControl error={error !== undefined}>
      <InputLabel htmlFor="my-input">Item {input.name}</InputLabel>
      <Input
        {...restProps}
        input={input}
        aria-describedby="component-error-text"
      />
      {error && (
        <FormHelperText id="component-error-text">
          {error.message}
        </FormHelperText>
      )}
    </FormControl>
  );
};

const PerformanceTemplate: ComponentStory<typeof Form> = () => {
  return (
    <div>
      <Form
        style={performanceStyle}
        name="Performance"
        initialValues={initialValuesPerformance}
      >
        {array.map((name) => {
          return (
            <Field
              key={name}
              as={ReactFormzField}
              name={name.toString()}
              required
            />
          );
        })}
      </Form>
    </div>
  );
};

export const Performance = PerformanceTemplate.bind({});

Performance.args = {};
