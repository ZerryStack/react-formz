import getFieldStoreValue from "./getFieldStoreValue";
import getFormState from "./getFormState";
import incrementFormSubmitCount from "./incrementFormSubmitCount";
import resetFieldError from "./resetFieldError";
import { setFieldError } from "./setFieldError";
import setFieldTouched from "./setFieldTouched";
import setFormIsSubmitting from "./setFormIsSubmitting";
import updateFormValue from "./updateFormValue";

const actions = {
    getFieldStoreValue,
    getFormState,
    incrementFormSubmitCount,
    resetFieldError,
    setFieldError,
    setFieldTouched,
    setFormIsSubmitting,
    updateFormValue,
}

export default actions;
