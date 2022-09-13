import { FieldComponentProps } from "@zerry/react-formz";
import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import MuiInput from "@mui/material/Input";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

export const MuiFormControl = <Value extends string | number | undefined>(
  props: Omit<FieldComponentProps<Value>, "actions">
) => {
  const {
    error,
    input: { label, ...input },
    placeholder
  } = props;
  return (
    <FormControl error={error !== undefined}>
      <InputLabel htmlFor="my-input">{label}</InputLabel>
      <MuiInput {...input} placeholder={placeholder} aria-describedby="component-error-text" />
      {error && (
        <FormHelperText id="component-error-text">
          {error.message}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export const MuiCheckboxFieldComponent = <Key extends string>({
    error,
    input: { label, onBlur, onChange, required, checked, ...input },
    ref,
    ...restProps
  }: Omit<FieldComponentProps<boolean, Key, HTMLInputElement>, "actions">) => {
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
  