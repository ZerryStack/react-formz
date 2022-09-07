import { fieldArrayItemNameRegex } from "../constants";

function parseArrayFieldName(name: `${string}.${number}`) {
    const result = fieldArrayItemNameRegex.exec(name);

    if (result && result.groups) {
        const groups = result.groups as unknown as { name: string, index: number }
        return { name: groups.name, index: groups.index }
    }

    return null;
}

export default parseArrayFieldName;
