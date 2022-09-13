import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import MuiInput from "@mui/material/Input";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import {
  ControllerRenderProps,
  ControllerFieldState,
} from "react-hook-form";

type Props = {
  field: ControllerRenderProps<any, any>;
  placeholder?: string;
  label: string;
  fieldState: ControllerFieldState;
  type?: string;
};

export const MuiFormControl = (props: Props) => {
  const {
    field,
    placeholder,
    label,
    fieldState: { error },
    type
  } = props;
  return (
    <FormControl error={error !== undefined}>
      <InputLabel htmlFor="my-input">{label}</InputLabel>
      <MuiInput
        {...field}
        placeholder={placeholder}
        aria-describedby="component-error-text"
        type={type}
      />
      {error && (
        <FormHelperText id="component-error-text">
          {error.message}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export const MuiCheckboxFieldComponent = (props: Props) => {
  const {
    field,
    label,
    fieldState: { error },
  } = props;

  return (
    <FormControl error={error !== undefined}>
      <FormControlLabel
        control={
          <Checkbox
            {...field}
            checked={field.value}
            onBlur={field.onBlur}
            onChange={field.onChange}
          />
        }
        label={label}
      />
      <FormHelperText>{error?.message}</FormHelperText>
    </FormControl>
  );
};
