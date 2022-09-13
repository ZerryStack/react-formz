import React, { useEffect } from "react";
import {
  useForm,
  UseFormReturn,
  useFormContext,
  Controller,
  FormProvider,
  useWatch,
} from "react-hook-form";
import Box from "@mui/material/Box";
import {
  MuiCheckboxFieldComponent,
  MuiFormControl,
} from "./LargeForm.components.ReactFormHook";
import Typography from "@mui/material/Typography";

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

const ConnectForm = ({
  children,
}: {
  children: (methods: UseFormReturn) => JSX.Element;
}) => {
  const methods = useFormContext();

  return children({ ...methods });
};

const NestedForm = () => {
  return (
    <Box display="flex" padding={2}>
      <Box>
        <Typography variant="h6">Contact Details</Typography>
        <Box display="flex" gap={2}>
          <ConnectForm>
            {({ control }) => {
              return (
                <Controller
                  name="firstName"
                  control={control}
                  rules={{ required: true }}
                  render={(props) => (
                    <MuiFormControl {...props} label="First Name" />
                  )}
                />
              );
            }}
          </ConnectForm>
          <ConnectForm>
            {({ control }) => {
              return (
                <Controller
                  name="lastName"
                  control={control}
                  rules={{ required: true }}
                  render={(props) => (
                    <MuiFormControl {...props} label="Last Name" />
                  )}
                />
              );
            }}
          </ConnectForm>
          <ConnectForm>
            {({ control }) => {
              return (
                <Controller
                  name="dob"
                  control={control}
                  rules={{
                    required: true,
                    validate: (dob) => {
                      if (dob) {
                        if (!isOver25(dob)) return "You must be at least 25.";
                      }
                    },
                  }}
                  render={(props) => (
                    <MuiFormControl
                      {...props}
                      type="date"
                      label="Date of Birth"
                    />
                  )}
                />
              );
            }}
          </ConnectForm>
        </Box>
        <Typography variant="h6" style={{ marginTop: 12 }}>
          Address
        </Typography>
        <Box display="flex" gap={2}>
          <ConnectForm>
            {({ control }) => {
              return (
                <Controller
                  name="address.street"
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={(props) => (
                    <MuiFormControl {...props} label="Street" />
                  )}
                />
              );
            }}
          </ConnectForm>
          <ConnectForm>
            {({ control }) => {
              return (
                <Controller
                  name="address.zipcode"
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={(props) => (
                    <MuiFormControl {...props} label="Zipcode" />
                  )}
                />
              );
            }}
          </ConnectForm>
          <ConnectForm>
            {({ control, setValue }) => {
              const dob = useWatch({ control, name: "dob" });

              useEffect(() => {
                if (dob) {
                  if (isOver25(dob)) setValue("isOver25", true);
                  else setValue("isOver25", false);
                }
              }, [dob]);
              
              return (
                <Controller
                  name="isOver25"
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={(props) => (
                    <MuiCheckboxFieldComponent {...props} label="Is Over 25" />
                  )}
                />
              );
            }}
          </ConnectForm>
        </Box>
      </Box>
    </Box>
  );
};

const LargeFormReactHookForm = () => {
  const methods = useForm<FormState>({
    defaultValues: {
      firstName: "",
      lastName: "",
      dob: "",
      address: {
        street: "",
        zipcode: "",
      },
      isOver25: false,
    },
  });

  const { handleSubmit } = methods;

  return (
    <form onSubmit={handleSubmit(console.log)}>
      <FormProvider {...methods}>
        <NestedForm />
      </FormProvider>
    </form>
  );
};

export default LargeFormReactHookForm;
