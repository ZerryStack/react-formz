import { FormzState, FormzValues } from "../src/types/form";

function createDefaultFormzState<Values extends FormzValues>(partial?: FormzState<Values>  ): FormzState<Values> {
    const state: FormzState<Values> = {
        values: {} as Values,
        errors: {},
        isInvalid: false,
        isSubmitting: false,
        isValidating: false,
        initialValues: {} as Values,
        initialized: true,
        touched: {},
        submitCount: 0,
        saveDrafts: false,
        lastPersistedAt: null,
        hydrated: false,
        restoredFromDate: null,
        ...partial,
    };

    return state;
}

export default createDefaultFormzState;
