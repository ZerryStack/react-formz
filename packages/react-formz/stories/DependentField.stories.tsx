import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  Form,
  Field,
  ErrorMessage,
  SubmitButton,
  FormLastPersistedAt,
  CheckboxField,
  DependentField,
} from "../src";
import { FieldComponentProps } from "../src/components/Field";
import { useSnackbar } from "notistack";
import format from "date-fns/format";

export default {
  title: "Components/DependentField",
  component: DependentField,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof DependentField>;

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
  favoriteDrink: "",
};

type SimpleFormState = {
  firstName: string;
  lastName: "";
  isOver21: boolean;
  age: number;
  dob: string;
  favoriteDrink: string;
};

function Input<Value extends string | boolean | number, Key extends string>(
  props: Omit<FieldComponentProps<Value, Key>, "actions">
) {
  const { input } = props;

  return (
    <>
    <label htmlFor={input.name}>{input.label ?? input.name}</label>
      <input {...input} className="rf-input" />
      <ErrorMessage field={input.name} style={{ color: "#bd0101" }} />
    </>
  );
}

const SimpleTemplate: ComponentStory<typeof Form> = () => {
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
      <Field as={Input} required name="firstName" placeholder="First Name" label="First Name" />
      <Field
        as={Input}
        name="lastName"
        label="Last Name"
        validate={(value) =>
          value !== "Hogan" ? "Last name should be Hogan" : undefined
        }
        placeholder="Last Name"
      />
      <Field
        as={Input}
        label="Age"
        type="number"
        name="age"
        min={3}
        max={40}
        placeholder="Age"
      />
      <Field as={Input} type="date" name="dob" label="Date of Birth" placeholder="Date of Birth" />
      <DependentField<SimpleFormState, string, "favoriteDrink">
        as={Input}
        type="text"
        name="favoriteDrink"
        label="Favorite Drink"
        placeholder="What's your favorite drink?"
        dependencies={({ isOver21, dob }) => ({ isOver21, dob })}
        onDependenciesChange={({ dob, isOver21 }, { setValue }) => {
          if (dob && isOver21 && (new Date().getFullYear() - new Date(dob).getFullYear()) < 21) {
            setValue("N/A");
          }
        }}
        validate={(_, { dob, isOver21 = false }) => {
          if (dob && isOver21 && (new Date().getFullYear() - new Date(dob).getFullYear()) < 21) {
            return "Must be at least 21";
          }
          return null;
        }}
      />
      <CheckboxField as={Input} name="isOver21" label="Over 21?" />
      <FormLastPersistedAt />
      <SubmitButton className="rf-button">Submit</SubmitButton>
    </Form>
  );
};

export const SimpleDependentField = SimpleTemplate.bind({});

SimpleDependentField.args = {};
