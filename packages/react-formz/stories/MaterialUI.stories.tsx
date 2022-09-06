import MuiTextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useSnackbar } from "notistack";
import React from "react";
import {
  Form,
  Field,
  TextField,
  SubmitButton,
  SelectField,
  CheckboxField,
  NumberField
} from "../src";
import MuiButton from "@mui/material/Button";
import { FieldComponentProps } from "../src/components/Field";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Checkbox, FormControlLabel, FormHelperText } from "@mui/material";

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

const MuiSelectFieldComponent = ({
  error,
  input: { color, ref, label, id, required, onChange, onBlur, value, ...input },
  children,
}: FieldComponentProps) => {
  return (
    <FormControl error={error !== undefined}>
      <InputLabel>{label}</InputLabel>
      <Select
        id={id}
        value={value}
        label={label}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        style={{ width: 200 }}
        {...input}
      >
        {children}
      </Select>
      <FormHelperText>{error?.message}</FormHelperText>
    </FormControl>
  );
};

const MuiCheckboxFieldComponent = <Key extends string>({
  error,
  input: { color, ref, label, value, onBlur, onChange, required, ...input },
}: FieldComponentProps<Key, boolean>) => {
  return (
    <FormControl error={error !== undefined}>
      <FormControlLabel
        control={
          <Checkbox
            value={value}
            onBlur={onBlur}
            onChange={onChange}
            required={required}
            inputProps={{ ...input }}
          />
        }
        label={label}
      />
      <FormHelperText>{error?.message}</FormHelperText>
    </FormControl>
  );
};

const SimpleFormTemplate: ComponentStory<typeof Field> = () => {
  const {} = useSnackbar();

  return (
    <Form
      initialValues={{
        firstName: "",
        kg: "",
        library: "",
        cool: false,
      }}
      name="SimpleForm"
      onSubmit={console.log}
      resetOnSubmit
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
          <NumberField
            name="kg"
            label="Kilograms"
            required
            min={3}
            as={MuiTextFieldComponent}
          />
          <SelectField
            name="library"
            label="Library"
            placeholder="Which JavaScript library do you prefer?"
            required
            as={MuiSelectFieldComponent}
          >
            <MenuItem value="react">React</MenuItem>
            <MenuItem value="vue">Vue</MenuItem>
            <MenuItem value="angular">Angular</MenuItem>
          </SelectField>
        </Box>
        <Box>
          <CheckboxField
            name="cool"
            label="Are you cool?"
            required
            as={MuiCheckboxFieldComponent}
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
