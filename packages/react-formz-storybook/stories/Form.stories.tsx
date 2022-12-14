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
  ErrorMessage,
  SubmitButton,
  FormLastPersistedAt,
  CheckboxField,
  FieldComponentProps,
} from "@zerry/react-formz";
import {
  useForm as useReactHookForm,
  FormProvider as ReactHookFormProvider,
  useFormContext as useReactHookFormContext,
} from "react-hook-form";
import { FormControl, FormHelperText, InputLabel, Input as MuiInput } from "@mui/material";
import { useSnackbar } from "notistack";
import format from "date-fns/format";

const logger = console;

export default {
  title: "Components/Form",
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

function Input<Value extends string | boolean | number, Key extends string>(
  props: Omit<FieldComponentProps<Value, Key>, "actions">
) {
  const { input } = props;

  return (
    <>
      <input {...input} className="rf-input" />
      <ErrorMessage field={input.name} />
    </>
  );
}

const FieldTemplate: ComponentStory<typeof Form> = () => {
  const { enqueueSnackbar } = useSnackbar();

  return (
    <Form
      style={style}
      name="WithFields"
      initialValues={{ ...initialValues, age: 0, dob: "1970-01-01" }}
      onSubmit={() => new Promise((resolve) => setTimeout(resolve, 2000))}
      saveDrafts
      onFormRehydrated={(state) => {
        if (state.restoredFromDate) {
          enqueueSnackbar(
            `We've restored your form from ${format(
              new Date(state.restoredFromDate),
              "Pp"
            )}.`,
            {
              variant: "success",
            }
          );
        } else {
          enqueueSnackbar(`We've restored your form.`, {
            variant: "success",
          });
        }
      }}
    >
      <Field as={Input} required name="firstName" placeholder="First Name" />
      <Field
        as={Input}
        name="lastName"
        validate={(value) =>
          value !== "Hogan" ? "Last name should be Hogan" : undefined
        }
        placeholder="Last Name"
      />
      <Field
        as={Input}
        type="number"
        name="age"
        min={3}
        max={40}
        placeholder="Age"
      />
      <Field as={Input} type="date" name="dob" placeholder="Date of Birth" />
      <CheckboxField as={Input} name="isOver21" />
      <FormLastPersistedAt />
      <SubmitButton className="rf-button">Submit</SubmitButton>
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
        <FormHelperText id="component-error-text">{error.message}</FormHelperText>
      )}
    </FormControl>
  )
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
      <input {...field} id={name} aria-describedby={`${name}-error`} />
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

const ReactHookFormField = ({ name }: { name: string }) => {
  const {
    register,
    formState: { errors },
  } = useReactHookFormContext();

  const error = errors[name];

  console.log(error);

  return (
    <FormControl error={errors[name] !== undefined}>
      <InputLabel htmlFor="my-input">Item {name}</InputLabel>
      <MuiInput {...register(name, { required: true })}  />
      {error && (
        <span id="component-error-text">
          {error.message as string}
        </span>
      )}
    </FormControl>
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
    
  const methods = useReactHookForm();

  const { handleSubmit } = methods;

  return (
    <Profile id="React Hook Form" onRender={logProfiler}>
      <form onSubmit={handleSubmit(console.log)}>
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
