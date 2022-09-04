import { isCheckbox, isString } from "./is";

function getFieldValue(eventOrTextValue: string | React.ChangeEvent<any>): string | number | boolean {
    if (!isString(eventOrTextValue)) {

        const { value, type } = eventOrTextValue.target;

        if (isCheckbox(eventOrTextValue.target)) {
            return eventOrTextValue.target.checked;
        }

        return value;
    }

    return eventOrTextValue;
}

export default getFieldValue;