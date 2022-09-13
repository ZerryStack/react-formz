import {
  renderHook,
  act,
  RenderHookOptions,
  RenderHookResult,
  Renderer
} from "@testing-library/react-hooks";

async function renderHookInAct<TProps, TResult>(
  callback: (props: TProps) => TResult,
  options?: RenderHookOptions<TProps>
): Promise<RenderHookResult<TProps, TResult, Renderer<TProps>>> {
  let result: RenderHookResult<TProps, TResult, Renderer<TProps>> = {} as RenderHookResult<TProps, TResult, Renderer<TProps>>;

  await act(async () => {
    result = renderHook<TProps, TResult>(callback, options);
  });

  return result;
}

export default renderHookInAct;
