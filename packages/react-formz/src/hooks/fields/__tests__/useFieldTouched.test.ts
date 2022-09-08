import { renderHook, WrapperComponent } from '@testing-library/react-hooks'
import React from 'react'
import { defaultTestFormName } from '../../../../testUtils/constants'
import createDefaultFormzState from '../../../../testUtils/createDefaultFormzState'
import renderWithFormIdProvider from '../../../../testUtils/renderWithFormIdProvider'
import { formzStore } from '../../../store'
import useFieldTouched from '../useFieldTouched'

const wrapper: WrapperComponent<{ children: React.ReactNode }> = ({ children }) => renderWithFormIdProvider(children);

describe('hooks/fields/useFieldTouched', () => { 
    beforeEach(() => {
        formzStore.setState((state) => {
            state.forms[defaultTestFormName] = createDefaultFormzState();
        });
    });

    it("should return error message for a field.", () => {
        formzStore.setState((state) => {
            state.forms[defaultTestFormName].touched["test-field"] = true
        });

        const { result } = renderHook(() => useFieldTouched("test-field"), {
            wrapper
        });

        expect(result.current).toEqual(true)
    })
 })