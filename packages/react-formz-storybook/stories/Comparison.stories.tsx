import React, { useState } from "react";
import { Profiler } from "react";
import {
  Formik,
  Form as FormikForm,
  Field as FormikField,
  FieldProps as FormikFieldProps,
} from "formik";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  Form,
  Field,
  SubmitButton,
  FieldComponentProps,
} from "@zerry/react-formz";
import {
  useForm as useReactHookForm,
  FormProvider as ReactHookFormProvider,
  useFormContext as useReactHookFormContext,
  UseFormReturn,
  Controller,
} from "react-hook-form";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  Input as MuiInput,
} from "@mui/material";

const logger = console;

export default {
  title: "Comparison/Many Inputs",
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

const array = new Array(150).fill(null).map((_, index) => index);
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
  logger.log(
    `${id}:`,
    phase,
    `actualDuration:`,
    actualDuration,
    `baseDuration:`,
    baseDuration
  );
};

const ReactFormzField = ({
  error,
  input,
  ...restProps
}: FieldComponentProps<string | number | boolean>) => {
  return (
    <FormControl error={error !== undefined}>
      <InputLabel htmlFor="my-input">Item {input.name}</InputLabel>
      <MuiInput
        {...restProps}
        {...input}
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

const NestedReactFormzFields = () => {
  return (
    <>
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
    </>
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
        onSubmit={console.log}
      >
        <NestedReactFormzFields />
        <SubmitButton>Submit</SubmitButton>
      </Form>
    </Profile>
  );
};

const FormikFormsField = ({ field, form: { errors } }: FormikFieldProps) => {
  const { name } = field;
  return (
    <FormControl error={errors[name] !== undefined}>
      <InputLabel htmlFor="my-input">Item {name}</InputLabel>
      <MuiInput {...field} id={name} aria-describedby={`${name}-error`} />
      {errors[name] && (
        <FormHelperText id="component-error-text">
          {errors[name] as string}
        </FormHelperText>
      )}
    </FormControl>
  );
};

const NestedFormikFields = () => {
  return (
    <>
      {array.map((name) => {
        return (
          <FormikField key={name} name={name.toString()}>
            {FormikFormsField}
          </FormikField>
        );
      })}
    </>
  );
};

const FormikForms = () => {
  const Profile =
    process.env.NODE_ENV === "development" ? Profiler : React.Fragment;

  return (
    <Profile id="Formik" onRender={logProfiler}>
      <Formik initialValues={initialValuesPerformance} onSubmit={console.log}>
        <FormikForm style={performanceStyle} name="Performance">
          <NestedFormikFields />
        </FormikForm>
      </Formik>
    </Profile>
  );
};

const ConnectForm = ({
  children,
}: {
  children: (methods: UseFormReturn) => JSX.Element;
}) => {
  const methods = useReactHookFormContext();

  return children({ ...methods });
};

const ReactHookFormField = ({ name }: { name: string }) => {
  return (
    <ConnectForm>
      {({ formState: { errors }, control }) => {
        const error = errors[name];

        return (
          <Controller
            name={name}
            control={control}
            render={({ field: { onChange, value }}) => (
              <FormControl error={errors[name] !== undefined}>
                <InputLabel htmlFor="my-input">Item {name}</InputLabel>
                <MuiInput onChange={onChange} value={value} />
                {error && (
                  <span id="component-error-text">
                    {error.message as string}
                  </span>
                )}
              </FormControl>
            )}
          />
        );
      }}
    </ConnectForm>
  );
};

const NestedReactHookFormFields = () => {
  return (
    <>
      {array.map((name) => {
        return <ReactHookFormField key={name} name={name.toString()} />;
      })}
    </>
  );
};

const ReactHookForm = () => {
  const Profile =
    process.env.NODE_ENV === "development" ? Profiler : React.Fragment;

  const methods = useReactHookForm({
    defaultValues: initialValuesPerformance
  });

  const { handleSubmit } = methods;

  return (
    <Profile id="React Hook Form" onRender={logProfiler}>
      <form onSubmit={handleSubmit(console.log)} style={performanceStyle}>
        <ReactHookFormProvider {...methods}>
          <NestedReactHookFormFields />
          <button type="submit">Submit</button>
        </ReactHookFormProvider>
      </form>
    </Profile>
  );
};

const PerformanceTemplate: ComponentStory<typeof Form> = () => {
  const [library, setLibrary] =
    useState<"react-formz" | "formik" | "react-hook-form">("react-formz");

  return (
    <div>
      <select
        value={library}
        onChange={(e) => setLibrary(e.target.value as any)}
      >
        <option value="react-formz">React-Formz</option>
        <option value="formik">Formik</option>
        <option value="react-hook-form">React Hook Form</option>
      </select>
      {library === "react-formz" && <ReactFormz />}
      {library === "formik" && <FormikForms />}
      {library === "react-hook-form" && <ReactHookForm />}
    </div>
  );
};

export const Performance = PerformanceTemplate.bind({});

Performance.args = {};
