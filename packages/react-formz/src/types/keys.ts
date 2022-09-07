type NotUndefined<T> = Exclude<T, undefined>;

type ValidKey<Obj> = keyof Obj;

type ValidIndex<Obj> = keyof Obj;

type KeyError<K, T, M = "KeyError: This key doesn't exist."> = {
  message: M;
  key: K;
  object: T;
  from: "react-formz";
};

type StringIndex = `${number}`;

type GetValueFromTuple<T> = "0" extends ValidKey<T>
  ? KeyError<"0", T>
  : number extends ValidIndex<T>
  ? T[number]
  : KeyError<number, T, "Index out of range on Tuple.">;

type GetIndexedField<T, K> = K extends ValidKey<T>
  ? T[K]
  : K extends StringIndex
  ? GetValueFromTuple<T>
  : KeyError<K, T, "Index does not exist.">;

type FieldWithPossiblyUndefined<T, Key> =
  | TypeFromPath<NotUndefined<T>, Key>
  | Extract<T, undefined>;

type IndexedFieldWithPossiblyUndefined<T, Key> =
  | GetIndexedField<NotUndefined<T>, Key>
  | Extract<T, undefined>;

type TypeFromBracketNotation<T, Left, Right> =
  Left extends `${infer FieldKey}[${infer IndexKey}]`
    ? FieldKey extends ValidKey<T>
      ? FieldWithPossiblyUndefined<
          IndexedFieldWithPossiblyUndefined<T[FieldKey], IndexKey>,
          Right
        >
      : KeyError<FieldKey, T>
    : KeyError<{ left: Left, right: Right }, T, "Key Error: You are trying to access a key that doesn't exist.">;

type LastIndexedField<T, P> = P extends `${infer FieldKey}[${infer IndexKey}]`
  ? FieldKey extends ValidKey<T>
    ? IndexedFieldWithPossiblyUndefined<T[FieldKey], IndexKey>
    : KeyError<FieldKey, T>
  : KeyError<P, T>;

export type TypeFromPath<T, P> = P extends `${infer Left}.${infer Right}`
  ? Left extends ValidKey<T>
    ? FieldWithPossiblyUndefined<T[Left], Right>
    : TypeFromBracketNotation<T, Left, Right>
  : P extends ValidKey<T>
  ? T[P]
  : LastIndexedField<T, P>;
