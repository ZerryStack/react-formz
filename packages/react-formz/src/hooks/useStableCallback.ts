import { useCallback, useRef } from "react";
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";

/**
 * Returns a memoized version of your function that maintains a stable reference, but
 * also can read the latest scope (props and state) of the component in which it is used.
 * 
 * See: https://github.com/facebook/react/issues/14099
 * @param fn The function to call.
 */
function useStableCallback<T extends (...args: any[]) => any>(fn: T): T {
  const ref = useRef(fn);

  useIsomorphicLayoutEffect(() => {
    ref.current = fn;
  });

  const callback = useCallback(
    (...args: any[]) => ref.current.apply(void 0, args),
    []
  ) as T;

  return callback;
}

export default useStableCallback;
