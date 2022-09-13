import React from "react";
import { renderHook, WrapperComponent } from "@testing-library/react-hooks";
import useComponentDidMount from "../useComponentDidMount";

const wrapper: WrapperComponent<{ children: React.ReactNode }> = ({
  children,
}) => <div>{children}</div>;

function runTest() {
  const callback = jest.fn();

  const { result, rerender } = renderHook<any, any>(
    () => useComponentDidMount(callback),
    {
      wrapper,
    }
  );

  return { result, rerender, callback };
}

describe("hooks/utils/useComponentDidMount", () => {
  it("should only call effect callback once when initially mounted", () => {
    const { rerender, callback } = runTest();

    expect(callback).toHaveBeenCalledTimes(1);

    rerender();

    expect(callback).toHaveBeenCalledTimes(1);

    rerender();

    expect(callback).toHaveBeenCalledTimes(1);
  });
});
