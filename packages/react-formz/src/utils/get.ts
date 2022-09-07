import { TypeFromPath } from "../types/keys";

function get<
  Path extends string,
  Data,
  DefaultValue = TypeFromPath<Data, Path>
>(
  data: Data,
  path: Path,
  defaultValue?: DefaultValue
): TypeFromPath<Data, Path> | DefaultValue {
  const parts = path.split(/[.[\]]/).filter(Boolean);

  const value = parts.reduce<TypeFromPath<Data, Path>>((value, key) => {
    return (value as any)?.[key];
  }, data as any);

  return value !== undefined ? value : (defaultValue as DefaultValue);
}

export default get;
