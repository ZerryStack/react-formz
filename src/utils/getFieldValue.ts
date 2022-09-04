import { FormzChangeEvent } from "../types/events";
import { isCheckbox, isString } from "./is";

function getFieldValue(eventOrTextValue: string | FormzChangeEvent<any>): string | number | boolean {
    if (!isString(eventOrTextValue)) {

        if (isCheckbox(eventOrTextValue.target)) {
            return eventOrTextValue.target.checked;
        }

        const { value } = eventOrTextValue.target;

        return value;
    }

    return eventOrTextValue;
}

export default getFieldValue;