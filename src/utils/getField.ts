import { FormzChangeEvent } from "../types/events";
import { isString } from "./is";

function getField(eventOrTextValue: string | FormzChangeEvent<any>, path?: string): string {

    if (path) {
        return path;
    }

    if (!isString(eventOrTextValue)) {
        return  eventOrTextValue.target.name ?? eventOrTextValue.target.id;
    }

    throw new Error();
}

export default getField;