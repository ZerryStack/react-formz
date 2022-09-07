import useStableCallback from "./useStableCallback";

function useSelector<SelectorFn extends (...args: any[]) => any>(fn: SelectorFn) {
  const selector = useStableCallback<SelectorFn>(fn());

  return selector;
}

export default useSelector;
