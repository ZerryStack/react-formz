import React from "react";
import { defaultTestFormName } from "../../../../testUtils/constants";
import createDefaultFormzState from "../../../../testUtils/createDefaultFormzState";
import { formzStore } from "../../../store";
import { render } from "@testing-library/react";
import Form from "../../Form";
import DependentField from "../DependentField";
import userEvent from "@testing-library/user-event";
import { DependentFieldProps } from "../DependentField.types";
import SubmitButton from "../../SubmitButton";
import Field, { FieldProps } from "../../Field";
import subYears from "date-fns/subYears";
import format from "date-fns/format";
import TestFieldComponent from "../../../../testUtils/TestFieldComponent";

type FormState = {
  name: string;
  dob: string;
  favoriteDrink: string;
};

function resetState() {
  () => {
    formzStore.setState((state) => {
      state.forms[defaultTestFormName] = createDefaultFormzState();
    });
  };
}

function TestField(props: FieldProps) {
  return <Field {...props} as={TestFieldComponent} />;
}

function TestDependentField(props: DependentFieldProps<FormState, string | number | boolean>) {
  return <DependentField {...props} as={TestFieldComponent} />;
}

function renderTest(
  ui?: React.ReactElement<any, string | React.JSXElementConstructor<any>>,
  options?: { favoriteDrink: Partial<DependentFieldProps<FormState, string | number | boolean>> }
) {
  const result = render(
    ui ?? (
      <Form<FormState>
        initialValues={{ name: "", dob: "", favoriteDrink: "" }}
        noValidate
      >
        <TestField name="name" type="text" label="Name" />
        <TestField name="dob" type="date" label="Date of Birth" />
        <TestDependentField
          name="favoriteDrink"
          label="Favorite Drink"
          required
          dependencies={({ dob }) => ({ dob })}
          validate={(_, { dob }) => {
            const isNotOver21 =
              dob &&
              new Date().getFullYear() - new Date(dob).getFullYear() < 21;

            if (isNotOver21) {
              return "You must be 21 to answer.";
            }
            return null;
          }}
          {...options?.favoriteDrink}
        />
        <SubmitButton>Submit</SubmitButton>
      </Form>
    )
  );

  function NameInput() {
    return result.getByLabelText("Name");
  }

  function DateOfBirthInput() {
    return result.getByLabelText("Date of Birth");
  }

  function FavoriteDrinkInput() {
    return result.getByLabelText("Favorite Drink");
  }

  function HtmlSubmitButton() {
    return result.getByText("Submit");
  }

  async function changeFieldValue(
    nameOrElement: string | HTMLElement,
    text: string
  ) {
    await userEvent.type(
      typeof nameOrElement === "string"
        ? result.getByLabelText(nameOrElement)
        : nameOrElement,
      text
    );
  }

  async function clickField(labelOrElement: string | HTMLElement) {
    await userEvent.click(typeof labelOrElement === "string" ? result.getByLabelText(labelOrElement) : labelOrElement);
  }

  async function clickSubmit() {
    await userEvent.click(HtmlSubmitButton());
  }

  function expectInputValueToBe(value: string) {
    expect(result.getByDisplayValue(value)).toBeInTheDocument();
  }

  return {
    result,
    NameInput,
    DateOfBirthInput,
    FavoriteDrinkInput,
    expectInputValueToBe,
    clickSubmit,
    HtmlSubmitButton,
    clickField,
    changeFieldValue,
  };
}

describe("components/DependentField", () => {
  beforeEach(resetState);

  describe("performance", () => {
    beforeEach(resetState);

    it("should only re-render when its dependencies change", async () => {
      const { changeFieldValue, result, NameInput } = renderTest();

      await changeFieldValue(NameInput(), "John Smith");

      expect(result.getByTestId("rerenders-favoriteDrink")).toHaveTextContent(
        "1"
      );
    });
  });

  describe("functionality", () => {
    beforeEach(resetState);

    it("should call validate function when dependencies change", async () => {
      const { result, clickField, changeFieldValue, DateOfBirthInput, FavoriteDrinkInput } =
        renderTest();

      const fiveYearsFromToday = format(subYears(new Date(), 5), "yyyy-MM-dd");

      await clickField(FavoriteDrinkInput());

      await changeFieldValue(DateOfBirthInput(), fiveYearsFromToday);

      expect(result.getByText("You must be 21 to answer.")).toBeInTheDocument();
    });

    it("should call onDependenciesChange callback when dependencies change", async () => {
      const handleDependenciesChange = jest.fn();

      const { changeFieldValue, clickField, DateOfBirthInput, FavoriteDrinkInput } = renderTest(
        undefined,
        {
          favoriteDrink: {
            onDependenciesChange: handleDependenciesChange,
          },
        }
      );

      const fiveYearsFromToday = format(subYears(new Date(), 5), "yyyy-MM-dd");

      await clickField(FavoriteDrinkInput());

      await changeFieldValue(DateOfBirthInput(), fiveYearsFromToday);

      expect(handleDependenciesChange).toHaveBeenCalledWith(
        { dob: expect.any(String) },
        { setValue: expect.any(Function), setError: expect.any(Function) }
      );
    });
  });
});
