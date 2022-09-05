import { StoreMutatorIdentifier, StateCreator } from "zustand";
import { FormzState, FormzValues } from "../types/form";
/**
 * Typed zustand middlewares thanks to: https://github.com/pmndrs/zustand/issues/1242#issuecomment-1231925031
 */
export type FormzMiddlewares = <
  T,
  Mps extends [StoreMutatorIdentifier, unknown][] = [],
  Mcs extends [StoreMutatorIdentifier, unknown][] = []
>(
  f: StateCreator<
    T,
    [...Mps, ["zustand/persist", T], ["zustand/immer", T]],
    Mcs
  >
) => StateCreator<
T,
  Mps,
  [["zustand/persist", T], ["zustand/immer", T], ...Mcs]
>;
export interface FormzStore {
  forms: Record<string, FormzState<any>>;
  addForm: <Values extends FormzValues>(
    id: string,
    initialValues: Values,
    saveDrafts: boolean
  ) => void;
  removeForm: (id: string) => void;
}
