import { FormzErrors, FormzValues, set } from "@zerry/react-formz";

function toNestedErrors<Values extends FormzValues>(errors: FormzErrors<Values>) {
    const nestedErrors: FormzErrors<Values> = {};

    for (const path in errors) {
        set(nestedErrors, path, errors[path]);
    }

    return nestedErrors;
}

export default toNestedErrors;
