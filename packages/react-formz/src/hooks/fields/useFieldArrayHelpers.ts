import { formzStore } from "../../store";
import useStableCallback from "../utils/useStableCallback";
import * as arrayHelpers from "../../utils/array";
import get from "../../utils/get";

export interface ArrayHelpers<Value> {
    remove: (index: number) => void;
    insert: (index: number, value: Value) => void;
    update: (index: number, value: Value) => void;
}

/**
 * Helper functions for manipulating fields that are arrays. 
 */
function useFieldArrayHelpers<Value>(formId: string, fieldName: string): ArrayHelpers<Value> {
    const remove = useStableCallback((index: number) => {
        formzStore.setState((state) => {
            const array: Value[] = get(state.forms[formId].values, fieldName);

            arrayHelpers.remove(array, index);
        })
    });

    const insert = useStableCallback((index: number, value: Value) => {
        formzStore.setState((state) => {
            const array: Value[] = get(state.forms[formId].values, fieldName);

            arrayHelpers.insert(array, index, value);
        })
    });

    const update = useStableCallback((index: number, value: Value) => {
        formzStore.setState((state) => {
            const array: Value[] = get(state.forms[formId].values, fieldName);

            arrayHelpers.update(array, index, value);
        })
    });

    return { remove, insert, update };
}

export default useFieldArrayHelpers;
