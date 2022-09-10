import React, { useRef } from "react";
import { ErrorMessage, FieldComponentProps } from "../src";

/**
 * A common ui component used as the component in `Field`'s when testing.
 *
 * It renders an input, with a label, an error message and a counter for the number
 * of re-renders.
 */
const TestFieldComponent = ({
  input: { label, ...input },
  error,
}: FieldComponentProps) => {
  const rerenders = useRef(0);
  rerenders.current++;
  return (
    <div>
      <label htmlFor={input.name}>{label}</label>
      <input {...input} id={input.name} />
      <div data-testid={`rerenders-${input.name}`}>{rerenders.current}</div>
      {error && <ErrorMessage field={input.name} />}
    </div>
  );
};

export default TestFieldComponent;
