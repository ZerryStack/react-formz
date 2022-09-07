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
  NumberField,
  RadioField,
  FieldComponentProps,
  ArrayField,
} from "../src";
import MuiButton from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {
  Checkbox,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

export default {
  title: "Examples/Material UI",
  component: Field,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Field>;

const MuiTextFieldComponent = <Key extends string>({
  error,
  input: { label, required, ...input },
  ref,
  storeValue,
  ...restProps
}: FieldComponentProps<Key, string | number, HTMLInputElement>) => (
  <MuiTextField
    error={error !== undefined}
    {...input}
    inputProps={{
      ref,
    }}
    {...restProps}
    label={label}
    helperText={error?.message}
    required={required}
  />
);

const MuiSelectFieldComponent = ({
  error,
  input: { label, required, onChange, onBlur, value },
  children,
  ref,
  storeValue,
  ...restProps
}: FieldComponentProps<string, string, HTMLSelectElement>) => {
  return (
    <FormControl error={error !== undefined}>
      <InputLabel>{label}</InputLabel>
      <Select
        {...restProps}
        value={value}
        label={label}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        style={{ width: 200 }}
        inputRef={ref}
      >
        {children}
      </Select>
      <FormHelperText>{error?.message}</FormHelperText>
    </FormControl>
  );
};

const MuiCheckboxFieldComponent = <Key extends string>({
  error,
  input: { label, onBlur, onChange, required, checked, ...input },
  ref,
  storeValue,
  ...restProps
}: FieldComponentProps<Key, boolean, HTMLInputElement>) => {
  return (
    <FormControl error={error !== undefined}>
      <FormControlLabel
        control={
          <Checkbox
            {...restProps}
            checked={checked}
            onBlur={onBlur}
            onChange={onChange}
            required={required}
            inputProps={input}
            inputRef={ref}
          />
        }
        label={label}
      />
      <FormHelperText>{error?.message}</FormHelperText>
    </FormControl>
  );
};

const MuiRadioFieldComponent = <Key extends string>({
  error,
  input: { label, value, onBlur, onChange, name },
  children,
  storeValue,
  ...restProps
}: FieldComponentProps<Key, string, HTMLInputElement>) => {
  return (
    <FormControl error={error !== undefined}>
      <FormLabel>{label}</FormLabel>
      <RadioGroup
        {...restProps}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        name={name}
      >
        {children}
      </RadioGroup>
    </FormControl>
  );
};

type SimpleFormState = {
  firstName: string;
  kg: string;
  library: string;
  cool: boolean;
  gender: string;
  friends: { name: string }[];
};

const SimpleFormTemplate: ComponentStory<typeof Field> = () => {
  const {} = useSnackbar();

  return (
    <Form<SimpleFormState>
      initialValues={{
        firstName: "",
        kg: "",
        library: "",
        cool: false,
        gender: "",
        friends: [{ name: "John" }],
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
            max={10}
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
          <RadioField
            name="gender"
            label="Gender"
            required
            as={MuiRadioFieldComponent}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioField>
        </Box>
        <Box display="flex" flexDirection="column">
          <ArrayField<{ name: string }>
            name="friends"
            render={({ values }) => {
              return (
                <Box>
                  {values.map((_, index) => {
                    return (
                      <TextField
                        key={index}
                        name={`friends.${index}[hey]`}
                        label="Friend"
                        required
                        as={MuiTextFieldComponent}
                      />
                    );
                  })}
                </Box>
              );
            }}
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
