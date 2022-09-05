function doesNotMatchPattern(value: string, pattern: RegExp) {
    return !value.match(pattern);
}

export default doesNotMatchPattern;