
export function remove<Value>(array: Array<Value>, index: number) {
    return array.splice(index, 1);
}

export function removeFirst<Value>(array: Array<Value>) {
    return array.shift();
}

export function removeLast<Value>(array: Array<Value>) {
    return array.pop();
}

export function insert<Value>(array: Array<Value>, index: number, value: Value) {
    return array.splice(index, 0, value);
}

export function insertFirst<Value>(array: Array<Value>, value: Value) {
    return array.unshift(value);
}

export function add<Value>(array: Array<Value>, value: Value, index?: number) {
    if (index) return insert(array, index, value)[0];

    const length = array.length;

    array.push(value);

    return array[length];
}

export function update<Value>(array: Array<Value>, index: number, value: Partial<Value>) {
    array[index] = {
        ...array[index],
        ...value
    };

    return array[index];
}

