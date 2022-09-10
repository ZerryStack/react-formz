import React from "react";
import { defaultTestFormName } from "../../../../testUtils/constants";
import createDefaultFormzState from "../../../../testUtils/createDefaultFormzState";
import { formzStore } from "../../../store";
import { render } from "@testing-library/react";
import Form from "../../Form";
import Field from "../Field";
import userEvent from "@testing-library/user-event";
import { FieldProps } from "../Field.types";
import SubmitButton from "../../SubmitButton";
import TestFieldComponent from "../../../../testUtils/TestFieldComponent";

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

function renderTest(
  ui?: React.ReactElement<any, string | React.JSXElementConstructor<any>>,
  options?: { lastName: Partial<FieldProps> }
) {
  const result = render(
    ui ?? (
      <Form initialValues={{ firstName: "", lastName: "" }} noValidate>
        <TestField name="firstName" label="First Name" />
        <TestField
          name="lastName"
          label="Last Name"
          required
          {...options?.lastName}
        />
        <SubmitButton>Submit</SubmitButton>
      </Form>
    )
  );

  function FirstNameInput() {
    return result.getByLabelText("First Name");
  }

  function LastNameInput() {
    return result.getByLabelText("Last Name");
  }

  function HtmlSubmitButton() {
    return result.getByText("Submit");
  }

  async function changeFirstNameValue(text: string) {
    await userEvent.type(FirstNameInput(), text);
  }

  async function changeLastNameValue(text: string) {
    await userEvent.type(LastNameInput(), text);
  }

  async function clickField(label: string) {
    await userEvent.click(result.getByLabelText(label));
  }

  async function clickSubmit() {
    await userEvent.click(HtmlSubmitButton());
  }

  function expectInputValueToBe(value: string) {
    expect(result.getByDisplayValue(value)).toBeInTheDocument();
  }

  return {
    result,
    FirstNameInput,
    LastNameInput,
    changeFirstNameValue,
    changeLastNameValue,
    expectInputValueToBe,
    clickSubmit,
    HtmlSubmitButton,
    clickField,
  };
}

describe("components/Field", () => {
  beforeEach(resetState);

  it("should render without error", () => {
    const { FirstNameInput, LastNameInput } = renderTest();

    expect(FirstNameInput()).toBeInTheDocument();
    expect(LastNameInput()).toBeInTheDocument();
  });

  describe("functionality", () => {
    beforeEach(resetState);

    it("should update input value when user types", async () => {
      const { changeFirstNameValue, expectInputValueToBe } = renderTest();

      await changeFirstNameValue("u");

      expectInputValueToBe("u");
    });
  });

  describe("performance", () => {
    beforeEach(resetState);

    it("should not re-render if its' value does not change.", async () => {
      const { changeFirstNameValue, result } = renderTest();

      await changeFirstNameValue("John");

      expect(result.getByTestId("rerenders-firstName")).toHaveTextContent("5");
      expect(result.getByTestId("rerenders-lastName")).toHaveTextContent("1");
    });
  });

  describe("accessibility", () => {
    it("should have aria-required=true if field is required", async () => {
      const { LastNameInput } = renderTest();

      expect(LastNameInput()).toHaveAttribute("aria-required", "true");
    });

    it("should have aria-invalid=true when there is an error", async () => {
      const {
        changeFirstNameValue,
        result,
        clickSubmit,
        clickField,
        LastNameInput,
      } = renderTest();

      await changeFirstNameValue("John");

      await clickField("Last Name");

      await clickSubmit();

      expect(LastNameInput()).toHaveAttribute("aria-invalid", "true");

      expect(result.getByText("Last Name is required.")).toBeInTheDocument();
    });

    it("should have aria-describedby when there is an error", async () => {
      const {
        changeFirstNameValue,
        result,
        clickSubmit,
        clickField,
        LastNameInput,
      } = renderTest();

      await changeFirstNameValue("John");

      await clickField("Last Name");

      await clickSubmit();

      expect(LastNameInput()).toHaveAttribute(
        "aria-describedby",
        "lastName-error"
      );

      expect(result.getByText("Last Name is required.")).toBeInTheDocument();
      expect(result.getByText("Last Name is required.")).toHaveAttribute(
        "id",
        "lastName-error"
      );
    });
  });

  describe("validation", () => {
    beforeEach(resetState);

    it("should show error if field is required", async () => {
      const { changeFirstNameValue, result, clickSubmit, clickField } =
        renderTest();

      await changeFirstNameValue("John");

      await clickField("Last Name");

      await clickSubmit();

      expect(result.getByText("Last Name is required.")).toBeInTheDocument();
    });

    it("should not show error if a field has not yet been touched", async () => {
      const { changeFirstNameValue, result, clickSubmit } = renderTest();

      await changeFirstNameValue("John");

      await clickSubmit();

      expect(
        result.queryByText("Last Name is required.")
      ).not.toBeInTheDocument();
    });

    it("should show error if value is above max", async () => {
      const { changeLastNameValue, result, clickSubmit, clickField } =
        renderTest(undefined, { lastName: { max: 5, type: "number" } });

      await changeLastNameValue("10");

      await clickField("Last Name");

      await clickSubmit();

      expect(result.getByTestId("rerenders-firstName")).toHaveTextContent("1");
      expect(
        result.getByText("Last Name is above the maximum value of 5.")
      ).toBeInTheDocument();
    });

    it("should show error if value is below min", async () => {
      const { changeLastNameValue, result, clickSubmit, clickField } =
        renderTest(undefined, { lastName: { min: 5, type: "number" } });

      await changeLastNameValue("3");

      await clickField("Last Name");

      await clickSubmit();

      expect(
        result.getByText("Last Name is below the minimum value of 5.")
      ).toBeInTheDocument();
    });

    it("should show error if value does not match pattern", async () => {
      const { changeLastNameValue, result, clickSubmit, clickField } =
        renderTest(undefined, {
          lastName: { pattern: /[a-z]+/, type: "text" },
        });

      await changeLastNameValue("3");

      await clickField("Last Name");

      await clickSubmit();

      expect(
        result.getByText("Last Name does not match pattern /[a-z]+/.")
      ).toBeInTheDocument();
    });
  });
});
