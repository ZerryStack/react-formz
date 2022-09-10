import { useRef } from "react";

/**
 * React state hook that returns the latest state as described in the React hooks FAQ.
 * This is mostly useful to get access to the latest value of some props or state 
 * inside an asynchronous callback, instead of that value at the time the callback 
 * was created from.
 * @param value The value to return.
 */
function useLatest<Value extends any>(value: Value): Value {
    const ref = useRef<Value | null>(null);

    ref.current = value;

    return ref.current;
}

export default useLatest;
