import { useCallback, useRef } from "react";
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";

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
