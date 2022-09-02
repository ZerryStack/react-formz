import React, { useEffect } from "react";

function useComponentDidMount(callback: React.EffectCallback) {
    useEffect(callback, []);
}

export default useComponentDidMount;
