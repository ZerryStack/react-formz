import { renderHook } from "@testing-library/react";
import { defaultTestFormName } from "../../../../testUtils/constants";
import createDefaultFormzState from "../../../../testUtils/createDefaultFormzState";
import mockLocalStorage from "../../../../testUtils/mockLocalStorage";
import { formzStore } from "../../../store";
import useFormHydration from "../useFormHydration";

const storageKey = `react-formz-${defaultTestFormName}`;

describe("hooks/forms/useFormHydration", () => {
  beforeEach(() => {
    mockLocalStorage();
    formzStore.setState((state) => {
      state.forms[defaultTestFormName] = createDefaultFormzState();
    });
  });

  afterEach(() => {
    window.localStorage.removeItem(storageKey);
  });

  it("should hydrate form state from previous local storage", async () => {
    const cachedFormState = createDefaultFormzState({
      initialValues: {
        name: "",
      },
      values: {
        name: "John",
      },
    });
    window.localStorage.setItem(storageKey, JSON.stringify(cachedFormState));

    renderHook(() => useFormHydration(defaultTestFormName, true));

    const hydratedForm = formzStore.getState().forms[defaultTestFormName];

    expect(hydratedForm).toEqual({
      ...createDefaultFormzState(),
      ...cachedFormState,
      hydrated: true,
      lastPersistedAt: expect.any(Date),
    });
  });

  it.only("should not save draft if form is invalid", async () => {
    const cachedFormState = createDefaultFormzState({
      initialValues: {
        name: "",
      },
      values: {
        name: "John",
      },
    });

    window.localStorage.setItem(storageKey, JSON.stringify(cachedFormState));

    renderHook(() => useFormHydration(defaultTestFormName, true));

    formzStore.setState((state) => {
      state.forms[defaultTestFormName].errors = {
        name: {
          message: "Invalid",
          type: "invalid",
        },
      };
      state.forms[defaultTestFormName].isInvalid = true;
      state.forms[defaultTestFormName].values.name = "Alex";
    });

    const cachedValue = window.localStorage.getItem(storageKey) as string;

    expect(JSON.parse(cachedValue)).toEqual({
      ...createDefaultFormzState(),
      ...cachedFormState,
      hydrated: false,
      lastPersistedAt: null,
      values: {
        name: "John",
      },
    });
  });

  it("should call onRehydration callback after rehydrated", async () => {
    const callback = jest.fn();

    const cachedFormState = createDefaultFormzState({
      initialValues: {
        name: "",
      },
      values: {
        name: "John",
      },
    });
    window.localStorage.setItem(storageKey, JSON.stringify(cachedFormState));

    renderHook(() => useFormHydration(defaultTestFormName, true, callback));

    const form = formzStore.getState().forms[defaultTestFormName];

    expect(callback).toHaveBeenCalledWith(form, form.restoredFromDate);
  });

  it("should not save to local storage if saveDrafts is false", async () => {
    const callback = jest.fn();

    renderHook(() => useFormHydration(defaultTestFormName, false, callback));

    expect(callback).not.toHaveBeenCalled();
    expect(window.localStorage.getItem(storageKey)).toEqual(null);
  });

  it("should save form state to local storage when the form state changes", async () => {
    const cachedFormState = createDefaultFormzState({
      initialValues: {
        name: "",
      },
      values: {
        name: "John",
      },
    });
    window.localStorage.setItem(
      `react-formz-${defaultTestFormName}`,
      JSON.stringify(cachedFormState)
    );

    renderHook(() => useFormHydration(defaultTestFormName, true));

    formzStore.setState((state) => {
      state.forms[defaultTestFormName].values.name = "Alex";
    });

    const cachedValue = window.localStorage.getItem(storageKey) as string;

    expect(JSON.parse(cachedValue)).toEqual({
      ...createDefaultFormzState(),
      ...cachedFormState,
      values: {
        name: "Alex",
      },
      hydrated: true,
      lastPersistedAt: expect.any(String),
    });
  });
});
