import { useFormDateContext, useFormIdContext, useFormLastPersistedAt } from "@zerry/react-formz-core";
import React from "react";
import { FormLastPersistedAtProps } from "./FormLastPersistedAt.types";

const FormLastPersistedAt = ({
  format = "Pp",
  ...spanProps
}: FormLastPersistedAtProps) => {
  const id = useFormIdContext();
  const { formatter } = useFormDateContext();
  const lastPersistedAt = useFormLastPersistedAt(id);

  if (lastPersistedAt !== null) {
    const date = formatter(lastPersistedAt, format = "Pp");

    return <span {...spanProps}>Draft saved at {date}</span>;
  }

  return null;
};

export default FormLastPersistedAt;
