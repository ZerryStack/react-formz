import { FormzErrors, FormzValues } from "@zerry/react-formz-core";

function tryRequire(pkg: string) {
    try {
        return require(pkg);
    } catch (error) {
        return undefined;
    }
}

const set = tryRequire("@zerry/react-formz")?.set ?? tryRequire("@zerry/react-formz-native")?.set ?? undefined;

if (!set) {
    throw new Error("@zerry/react-formz or @zerry/react-formz-native are not installed or could not be found.")
}

function toNestedErrors<Values extends FormzValues>(errors: FormzErrors<Values>) {
    const nestedErrors: FormzErrors<Values> = {};

    for (const path in errors) {
        set(nestedErrors, path, errors[path]);
    }

    return nestedErrors;
}

export default toNestedErrors;
