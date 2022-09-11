import { FormzChangeEvent } from "../types/events";
import { PossibleHTMLInputElement } from "../types/input";
import { isCheckboxInput, isNumberInput, isString } from "./is";

function getFieldValue(eventOrTextValue: string | FormzChangeEvent<any>): string | number | boolean | Date {
    if (!isString(eventOrTextValue)) {

        const target = eventOrTextValue.target as PossibleHTMLInputElement;

        if (isCheckboxInput(target)) {
            return target.checked;
        }

        if (isNumberInput(target)) {
            return target.valueAsNumber;
        }

        const { value } = target;

        return value;
    }

    return eventOrTextValue;
}

export default getFieldValue;