import { isString } from "./is";

function getFieldValue(eventOrTextValue: string | React.ChangeEvent<any>): string | number | boolean {
    if (!isString(eventOrTextValue)) {

        const { value } = eventOrTextValue.target;

        return value;
    }

    return eventOrTextValue;
}

export default getFieldValue;