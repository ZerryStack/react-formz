import Cache from "../models/Cache";

const cache = new Cache<string, string[]>();

/**
 * Converts a string path to an array.
 *
 * Thanks!: https://github.com/react-hook-form/react-hook-form/blob/master/src/utils/stringToPath.ts
 */
function stringToPath(input: string): string[] {
  if (cache.has(input)) return cache.get(input) as string[];

  const path = input
    .replace(/["|']|\]/g, "")
    .split(/\.|\[/)
    .filter(Boolean)
    .map((part) => {
      return part;
    });

  cache.add(input, path);

  return path;
}

export default stringToPath;
