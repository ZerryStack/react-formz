import React from "react";

/**
 * For easy compatability with third party UI libraries we limit the required properties
 * for the `ChangeEvent` to just the one we need which is `target`. Most libraries include
 * at least target but not all include the entire react change event.
 */
export interface FormzChangeEvent<T = Element> extends Pick<React.ChangeEvent<T>, "target"> {

}

/** 
 * Custom change event handler using @link {FormzChangeEvent} 
 */
export type FormzChangeEventHandler<T = Element> = (event: FormzChangeEvent<T>) => void;