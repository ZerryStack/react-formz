import { useRef } from "react";

/**
 * React hook that caches some value and does not change it. Useful for when
 * you want to maintain a reference to a function or an object and don't want
 * it to change.
 * @param value The value to return.
 */
function useStableValue<Value extends any>(value: Value): Value {
    const ref = useRef<Value | null>(null);

    if (!ref.current) {
        ref.current = value;
    }

    return ref.current;
}

export default useStableValue;
