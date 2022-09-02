import { AnyObject } from "immer/dist/internal";
import React, { createContext, useContext } from "react";
import useForm, { UseFormOptions } from "../../hooks/useForm";

const Context = createContext<UseFormOptions<any>  | null>(null);

const FormProvider = <Values extends AnyObject>({ children, ...options }: React.PropsWithChildren<UseFormOptions<Values>>) => {
    return (
        <Context.Provider value={options}>
            {children}
        </Context.Provider>
    );
}

export function useFormContext<Values extends AnyObject>() {
    const options = useContext(Context);

    if (!options) {
        throw new Error("`useFormContext` must be used within a <Form />");
    }

    return useForm<Values>(options);
}

export default FormProvider;
