import { renderHook } from "@testing-library/react-hooks";
import useSelector from "../useSelector";

function runTest() {
  const callback = jest.fn();

  const { result, rerender } = renderHook<any, any>(
    () => useSelector(callback),
    {}
  );

  return { result, rerender, callback };
}

describe("hooks/utils/useSelector", () => {
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
