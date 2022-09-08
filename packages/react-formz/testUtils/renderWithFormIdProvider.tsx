import React from "react";
import FormIdProvider from "../src/providers/FormIdProvider";
import { FormzValues } from "../src/types/form";
import { defaultTestFormName } from "./constants";

/**
 * Test util for wrapping a component tree with a form id provider.
 * @param children Children components
 * @param name The form name (default: "test")
 * @param initialValues The initial form values.
 * @returns 
 */
function renderWithFormIdProvider(children: React.ReactNode, name: string = defaultTestFormName, initialValues: FormzValues = {}) {
    return (
        <FormIdProvider name={name} initialValues={initialValues}>
            {children}
        </FormIdProvider>
    );
}

export default renderWithFormIdProvider;
