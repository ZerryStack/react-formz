import React from "react";
import { renderHook, WrapperComponent } from "@testing-library/react-hooks";
import useStableValue from "../useStableValue";

const wrapper: WrapperComponent<{ children: React.ReactNode }> = ({
  children,
}) => <div>{children}</div>;

function runTest() {
  const callback = jest.fn();

  const originalValue = {};

  const { result, rerender } = renderHook<any, any>(
    (value) => useStableValue(value),
    {
        initialProps: originalValue,
      wrapper,
    }
  );

  return { result, rerender, callback, originalValue };
}

describe("hooks/utils/useStableValue", () => {
  it("returned callback should never be invalidated", () => {
    const { rerender, result } = runTest();

    let prevReference = result.current;

    expect(prevReference).toStrictEqual(result.current);

    rerender(1);

    expect(prevReference).toStrictEqual(result.current);

    rerender(2);

    expect(prevReference).toStrictEqual(result.current);
  });
});
