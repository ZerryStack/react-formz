import { useRef } from "react";

function useCachedValue<Value extends any>(value: Value): Value {
    const ref = useRef<Value | null>(null);

    if (!ref.current) {
        ref.current = value;
    }

    return ref.current;
}

export default useCachedValue;
