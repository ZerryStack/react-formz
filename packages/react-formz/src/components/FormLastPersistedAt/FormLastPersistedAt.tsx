import React from "react";
import useFormLastPersistedAt from "../../hooks/forms/useFormLastPersistedAt";
import { useFormIdContext } from "../../providers/FormIdProvider";
import { FormLastPersistedAtProps } from "./FormLastPersistedAt.types";
import { useFormDateContext } from "../../providers/FormDateProvider";

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
