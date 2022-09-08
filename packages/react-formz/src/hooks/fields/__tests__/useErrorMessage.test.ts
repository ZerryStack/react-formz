import { renderHook, WrapperComponent } from '@testing-library/react-hooks'
import React from 'react'
import { defaultTestFormName } from '../../../../testUtils/constants'
import createDefaultFormzState from '../../../../testUtils/createDefaultFormzState'
import renderWithFormIdProvider from '../../../../testUtils/renderWithFormIdProvider'
import { formzStore } from '../../../store'
import useErrorMessage from '../useErrorMessage'

const wrapper: WrapperComponent<{ children: React.ReactNode }> = ({ children }) => renderWithFormIdProvider(children);

describe('hooks/fields/useErrorMessage', () => { 
    beforeEach(() => {
        formzStore.setState((state) => {
            state.forms[defaultTestFormName] = createDefaultFormzState();
        });
    });

    it("should return error message for a field.", () => {
        const errorMessage = {
            type: "required",
            message: "This field is required."
        };
        formzStore.setState((state) => {
            state.forms[defaultTestFormName].errors["test-field"] = errorMessage
        });

        const { result } = renderHook(() => useErrorMessage("test-field"), {
            wrapper
        });

        expect(result.current).toEqual(errorMessage)
    })
 })