import { useFormDateContext, useFormIdContext, useFormLastPersistedAt } from "@zerry/react-formz-core";
import React from "react";
import { FormLastPersistedAtProps } from "./FormLastPersistedAt.types";
import { Text } from "react-native";

const FormLastPersistedAt = ({
  format = "Pp",
  as: Component = Text,
  ...textProps
}: FormLastPersistedAtProps) => {
  const id = useFormIdContext();
  const { formatter } = useFormDateContext();
  const lastPersistedAt = useFormLastPersistedAt(id);

  if (lastPersistedAt !== null) {
    const date = formatter(lastPersistedAt, format = "Pp");

    return <Component {...textProps}>Draft saved at {date}</Component>;
  }

  return null;
};

export default FormLastPersistedAt;
