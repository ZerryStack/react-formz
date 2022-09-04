import React, { useState } from "react";
import { Profiler } from "react";
import {
  Formik,
  Form as FormikForm,
  Field as FormikField,
  FieldProps as FormikFieldProps,
} from "formik";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Form, Field } from "../src";
import { FormControl, FormHelperText, InputLabel } from "@mui/material";

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

const array = new Array(50).fill(null).map((_, index) => index);
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

const logProfiler: React.ProfilerOnRenderCallback = (
  id,
  phase,
  actualDuration,
  baseDuration
) => {
  console.log(
    id,
    phase,
    `actualDuration:`,
    actualDuration,
    `baseDuration:`,
    baseDuration
  );
};

const ReactFormz = () => {
  const Profile =
    process.env.NODE_ENV === "development" ? Profiler : React.Fragment;

  return (
    <Profile id="React-Formz" onRender={logProfiler}>
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
                <FormControl error={error !== undefined}>
                  <InputLabel htmlFor="my-input">Item {name}</InputLabel>
                  <Input
                    {...inputProps}
                    aria-describedby="component-error-text"
                    required
                  />
                  {error && (
                    <FormHelperText id="component-error-text">
                      {error}
                    </FormHelperText>
                  )}
                </FormControl>
              )}
              name={name.toString()}
              required
            />
          );
        })}
      </Form>
    </Profile>
  );
};

const FormikForms = () => {
  const Profile =
    process.env.NODE_ENV === "development" ? Profiler : React.Fragment;

  return (
    <Profile id="Formik" onRender={logProfiler}>
      <Formik initialValues={initialValuesPerformance} onSubmit={console.log}>
        <FormikForm style={performanceStyle} name="Performance">
          {array.map((name) => {
            return (
              <FormikField key={name} name={name.toString()}>
                {({ field, form: { errors } }: FormikFieldProps) => {
                  return (
                    <FormControl error={errors[name] !== undefined}>
                      <InputLabel htmlFor="my-input">Item {name}</InputLabel>
                      <Input
                        {...field}
                        aria-describedby="component-error-text"
                        required
                      />
                      {errors[name] && (
                        <FormHelperText id="component-error-text">
                          {errors[name] as string}
                        </FormHelperText>
                      )}
                    </FormControl>
                  );
                }}
              </FormikField>
            );
          })}
        </FormikForm>
      </Formik>
    </Profile>
  );
};
const PerformanceTemplate: ComponentStory<typeof Form> = () => {
  const [library, setLibrary] =
    useState<"react-formz" | "formik">("react-formz");

  return (
    <div>
      <select
        value={library}
        onChange={(e) => setLibrary(e.target.value as any)}
      >
        <option value="react-formz">React-Formz</option>
        <option value="formik">Formik</option>
      </select>
      {library === "react-formz" && <ReactFormz />}
      {library === "formik" && <FormikForms />}
    </div>
  );
};

export const Performance = PerformanceTemplate.bind({});

Performance.args = {};
