import { DependentCheckboxField, Form, TextField } from "@zerry/react-formz";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  MuiCheckboxFieldComponent,
  MuiFormControl,
} from "./LargeForm.components";

type FormState = {
  firstName: string;
  lastName: string;
  address: {
    street: string;
    zipcode: string;
  };
  dob: string;
  isOver25: boolean;
};

function isOver25(dob: string) {
  return new Date().getFullYear() - new Date(dob).getFullYear() >= 25;
}

const NestedForm = () => {
  return (
    <Box display="flex" padding={2}>
      <Box>
        <Typography variant="h6">Contact Details</Typography>
        <Box display="flex" gap={2}>
          <TextField
            name="firstName"
            label="First Name"
            as={MuiFormControl}
            required
          />
          <TextField
            name="lastName"
            label="Last Name"
            as={MuiFormControl}
            required
          />
          <TextField
            name="dob"
            label="Date of Birth"
            as={MuiFormControl}
            type="date"
            required
            validate={(dob) => {
              if (dob) {
                if (!isOver25(dob)) return "You must be at least 25.";
              }
              return null;
            }}
          />
        </Box>
        <Typography variant="h6" style={{ marginTop: 12 }}>
          Address
        </Typography>
        <Box display="flex" gap={2}>
          <TextField
            name="address.street"
            label="Street"
            as={MuiFormControl}
            required
          />
          <TextField
            name="address.zipcode"
            label="Zipcode"
            as={MuiFormControl}
            required
          />
          <DependentCheckboxField<FormState>
            name="isOver25"
            dependencies={({ dob }) => ({ dob })}
            label="Is Over 25"
            onDependenciesChange={({ dob }, { setValue }) => {
              if (dob) {
                if (isOver25(dob)) setValue(true);
                else setValue(false);
              } else {
                setValue(false);
              }
            }}
            as={MuiCheckboxFieldComponent}
          />
        </Box>
      </Box>
    </Box>
  );
};

const LargeFormReactFormz = () => {
  return (
    <Form<FormState>
      initialValues={{
        firstName: "",
        lastName: "",
        dob: "",
        address: {
          street: "",
          zipcode: "",
        },
        isOver25: false,
      }}
    >
      <NestedForm />
    </Form>
  );
};

export default LargeFormReactFormz;
