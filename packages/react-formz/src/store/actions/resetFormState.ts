import { formzStore } from "../store";

function resetFormState(id: string) {
    formzStore.setState((state) => {
        const form = state.forms[id];

        form.values = state.forms[id].initialValues ?? {};
        form.errors = {};
        form.isInvalid = false;
        form.isSubmitting = false;
        form.submitCount = 0;
        form.touched = {};
        form.isValidating = false;
        form.lastPersistedAt = null;
    });
}

export default resetFormState;
