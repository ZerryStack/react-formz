import { AnyObject } from "immer/dist/internal";
import React, { createContext, useContext, useMemo } from "react";
import useForm, { UseFormOptions } from "../../hooks/useForm";

const Context = createContext<UseFormOptions<any>  | null>(null);

const FormProvider = <Values extends AnyObject>({ children, name, initialValues }: React.PropsWithChildren<UseFormOptions<Values>>) => {
    const options = useMemo(() => {
        return { name, initialValues };
    }, []);

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

    const form = useForm<Values>(options);
    
    return form;
}

export default FormProvider;
