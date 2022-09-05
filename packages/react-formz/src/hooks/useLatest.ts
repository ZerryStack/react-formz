import { useRef } from "react";

function useLatest<Value extends any>(value: Value): Value {
    const ref = useRef<Value | null>(null);

    if (!ref.current) {
        ref.current = value;
    }

    return ref.current;
}

export default useLatest;
