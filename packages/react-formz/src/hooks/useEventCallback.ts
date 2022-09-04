import { useCallback, useRef } from "react";
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";

/**
 * Returns a memoized callback that does not require a dependency
 * list. This prevents callbacks from being invalidated too frequently
 * which can cause excessive re-renders.
 * @param fn The function to call.
 */
function useEventCallback<T extends (...args: any[]) => any>(fn: T): T {
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

export default useEventCallback;
