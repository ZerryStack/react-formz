/**
 * Converts a string path to an array.
 * 
 * Thanks!: https://github.com/react-hook-form/react-hook-form/blob/master/src/utils/stringToPath.ts
 */
function stringToPath(input: string): string[] {
    return input.replace(/["|']|\]/g, '').split(/\.|\[/).filter(Boolean).map((part) => {
        return part;
    });
}

export default stringToPath;
