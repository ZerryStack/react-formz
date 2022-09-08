import { FormzState } from "../../../types/form";
import { formzStore } from "../../store";
import incrementFormSubmitCount from "../incrementFormSubmitCount"

describe('store/actions/incrementFormSubmitCount', () => { 
    it("should return form value from store", () => {
        formzStore.setState((state) => {
            state.forms["user"] = {
                submitCount: 0,
            } as FormzState<any>
        });

        incrementFormSubmitCount("user");
        incrementFormSubmitCount("user");
        incrementFormSubmitCount("user");

        expect(formzStore.getState().forms["user"].submitCount).toEqual(3);
    })
 })