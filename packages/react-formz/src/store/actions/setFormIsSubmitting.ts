import { formzStore } from "../store";

function setFormIsSubmitting(id: string, isSubmitting: boolean) {
    formzStore.setState((state) => {
        state.forms[id].isSubmitting = isSubmitting;
    });
}

export default setFormIsSubmitting;