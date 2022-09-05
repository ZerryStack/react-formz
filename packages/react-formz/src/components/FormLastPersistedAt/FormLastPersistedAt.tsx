import React from "react";
import formatDate from "date-fns/format";
import useFormLastPersistedAt from "../../hooks/forms/useFormLastPersistedAt";
import { useFormIdContext } from "../../providers/FormIdProvider";
import { FormLastPersistedAtProps } from "./FormLastPersistedAt.types";
import { isString } from "../../utils/is";

const FormLastPersistedAt = ({
  format = "Pp",
  ...spanProps
}: FormLastPersistedAtProps) => {
  const id = useFormIdContext();
  const lastPersistedAt = useFormLastPersistedAt(id);

  if (lastPersistedAt !== null) {
    const date = isString(format)
      ? formatDate(lastPersistedAt, format)
      : format(lastPersistedAt);
    return <span {...spanProps}>Draft saved at {date}</span>;
  }

  return null;
};

export default FormLastPersistedAt;
