import { FormzState } from "../../../types/form";
import { formzStore } from "../../store";
import getFieldStoreValue from "../getFieldStoreValue"

describe('store/actions/getFieldStoreValue', () => { 
    it("should return form value from store", () => {
        formzStore.setState((state) => {
            state.forms["user"] = {
                values: {
                    name: {
                        value: "John"
                    }
                }
            } as FormzState<any>
        });
        const value = getFieldStoreValue("user", "name.value");

        expect(value).toEqual("John");
    })
 })