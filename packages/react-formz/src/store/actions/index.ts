import getFieldStoreValue from "./getFieldStoreValue";
import getFormState from "./getFormState";
import incrementFormSubmitCount from "./incrementFormSubmitCount";
import resetFieldError from "./resetFieldError";
import resetFormState from "./resetFormState";
import { setFieldError } from "./setFieldError";
import setFieldTouched from "./setFieldTouched";
import setFieldValue from "./setFieldValue";
import setFormIsSubmitting from "./setFormIsSubmitting";
import updateFormValue from "./updateFormValue";

const actions = {
    getFieldStoreValue,
    getFormState,
    incrementFormSubmitCount,
    resetFieldError,
    resetFormState,
    setFieldError,
    setFieldTouched,
    setFieldValue,
    setFormIsSubmitting,
    updateFormValue,
}

export default actions;
