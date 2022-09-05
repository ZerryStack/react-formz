export interface HTMLSpecificInputElement<T extends string>
  extends Omit<HTMLInputElement, "type"> {
  type: T;
}

export interface HTMLNumberInputElement
  extends HTMLSpecificInputElement<"number"> {}

export interface HTMLCheckboxInputElement
  extends HTMLSpecificInputElement<"checkbox"> {}

  export interface HTMLDateInputElement
  extends HTMLSpecificInputElement<"date"> {}

export type PossibleHTMLInputElement =
  | HTMLInputElement
  | HTMLNumberInputElement
  | HTMLCheckboxInputElement
  | HTMLDateInputElement;
