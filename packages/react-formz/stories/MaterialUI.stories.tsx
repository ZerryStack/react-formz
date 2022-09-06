import MuiTextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useSnackbar } from "notistack";
import React from "react";
import { Form, Field, TextField, SubmitButton } from "../src";
import MuiButton from "@mui/material/Button";
import { FieldComponentProps } from "../src/components/Field";

export default {
  title: "Examples/Material UI",
  component: Field,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Field>;

const MuiTextFieldComponent = ({
  error,
  input: { color, ref, label, id, required, ...input },
}: FieldComponentProps) => (
  <MuiTextField
    error={error !== undefined}
    {...input}
    inputProps={{
      color,
      ref,
    }}
    id={id}
    label={label}
    helperText={error?.message}
    required={required}
  />
);

const SimpleFormTemplate: ComponentStory<typeof Field> = () => {
  const {} = useSnackbar();

  return (
    <Form
      initialValues={{
        firstName: "",
        kg: "",
      }}
      name="SimpleForm"
      onSubmit={console.log}
      saveDrafts
    >
      <Box display="flex" flexDirection="column" gap={2} padding={3}>
        <Box display="flex" gap={2}>
          <TextField
            name="firstName"
            label="First Name"
            required
            as={MuiTextFieldComponent}
          />
          <TextField
            name="kg"
            label="Kilograms"
            required
            as={MuiTextFieldComponent}
          />
        </Box>
        <Box>
          <MuiButton component={SubmitButton}>Submit</MuiButton>
        </Box>
      </Box>
    </Form>
  );
};

export const SimpleForm = SimpleFormTemplate.bind({});

SimpleForm.args = {};
