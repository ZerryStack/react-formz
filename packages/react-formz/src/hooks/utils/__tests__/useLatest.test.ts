import { renderHook } from '@testing-library/react-hooks'
import useLatest from "../useLatest";

// const wrapper: WrapperComponent<{ children: React.ReactNode }> = ({ children }) => renderWithFormIdProvider(children);

function runTest() {

    const { result, rerender } = renderHook<any, any>(
        (latest) => useLatest(latest),
        {
            initialProps: { }
        }
      );

      return { result, rerender }
}
describe('hooks/utils/useLatest', () => { 
    it("should return latest value for every re-render", () => {
        const latest = {};

        const { result, rerender } = runTest();

        rerender(latest);

        expect(result.current).toStrictEqual(latest);

        const nextLatest = { name: true };

        rerender(nextLatest);

        expect(result.current).toStrictEqual(nextLatest);

        const finalLatest = [{ name: true }];

        rerender(finalLatest);

        expect(result.current).toStrictEqual(finalLatest);
    });
 })