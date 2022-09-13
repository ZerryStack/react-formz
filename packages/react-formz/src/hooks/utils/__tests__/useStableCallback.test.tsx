import React from "react";
import { renderHook, WrapperComponent } from "@testing-library/react-hooks";
import useStableCallback from "../useStableCallback";

const wrapper: WrapperComponent<{ children: React.ReactNode }> = ({
  children,
}) => <div>{children}</div>;

function runTest() {
  const callback = jest.fn();

  const { result, rerender } = renderHook<any, any>(
    () => useStableCallback(callback),
    {
      wrapper,
    }
  );

  return { result, rerender, callback };
}

describe("hooks/utils/useStableCallback", () => {
  it("returned callback should never be invalidated", () => {
    const { rerender, result } = runTest();

    let prevReference = result.current;

    expect(prevReference).toStrictEqual(result.current);

    rerender();

    expect(prevReference).toStrictEqual(result.current);

    rerender();

    expect(prevReference).toStrictEqual(result.current);
  });

  it("should pass args to original callback", () => {
    const { result, callback } = runTest();

    result.current("1", 2);

    expect(callback).toHaveBeenCalledWith("1", 2);

  });
});
