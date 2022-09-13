import { WrapperComponent, act } from "@testing-library/react-hooks";
import { defaultTestFormName } from "../../../../testUtils/constants";
import createDefaultFormzState from "../../../../testUtils/createDefaultFormzState";
import renderHookInAct from "../../../../testUtils/renderHookInAct";
import renderWithFormIdProvider from "../../../../testUtils/renderWithFormIdProvider";
import { formzStore } from "../../../store";
import useDependentFieldEvents from "../useDependentFieldEvents";

type FormValues = {
  "test-field": string;
  dependency: string;
};

const dependentFieldName = "test-field";
const dependencyFieldName = "dependency";

const wrapper: WrapperComponent<{ children: React.ReactNode }> = ({
  children,
}) => renderWithFormIdProvider(children);

async function testDependentFieldEventsHook() {
  const onDependenciesChange = jest.fn();
  const validate = jest.fn();

  const { result } = await renderHookInAct(
    () =>
      useDependentFieldEvents<FormValues>(dependentFieldName, {
        onDependenciesChange,
        dependencies: ({ dependency }) => ({ dependency }),
        validate,
      }),
    {
      wrapper,
    }
  );

  async function changeDependencyValue(value: string) {
    await act(async () => {
      formzStore.setState((state) => {
        state.forms[defaultTestFormName].values[dependencyFieldName] = value;
      });
    });
  }

  return {
    result,
    validate,
    onDependenciesChange,
    changeDependencyValue,
  };
}

describe("hooks/fields/useDependentFieldEvents", () => {
  beforeEach(() => {
    formzStore.setState((state) => {
      state.forms[defaultTestFormName] = createDefaultFormzState();
    });
  });

  it("should return validate function", async () => {
    const { result } = await testDependentFieldEventsHook();

    expect(result.current.validate).toEqual(expect.any(Function));
  });

  it("should call onDependenciesChange when a dependency is changed", async () => {
    const { changeDependencyValue, onDependenciesChange } =
      await testDependentFieldEventsHook();

    await changeDependencyValue("John");

    const dependencies = { dependency: "John" };
    const actions = {
      setError: expect.any(Function),
      setValue: expect.any(Function),
    };

    expect(onDependenciesChange).toHaveBeenCalled();
    expect(onDependenciesChange).toHaveBeenLastCalledWith(
      dependencies,
      actions
    );
  });

  it("should call user-defined validate function when a dependency is changed", async () => {
    const { changeDependencyValue, validate } =
      await testDependentFieldEventsHook();

    await changeDependencyValue("John");

    const value = undefined;
    const dependencies = { dependency: "John" };

    expect(validate).toHaveBeenLastCalledWith(value, dependencies);
  });
});
