import React from "react";
import { render } from "@testing-library/react";
import Form from "../../Form";
import ArrayField from "../ArrayField";
import userEvent from "@testing-library/user-event";
import { ArrayFieldProps } from "../ArrayField.types";
import SubmitButton from "../../SubmitButton";
import Field, { FieldProps } from "../../Field";
import ErrorMessage from "../../ErrorMessage";
import { formzStore } from "@zerry/react-formz-core";
import TestFieldComponent from "../../../../testUtils/TestFieldComponent";
import { defaultTestFormName } from "../../../../testUtils/constants";
import createDefaultFormzState from "../../../../testUtils/createDefaultFormzState";

type FormState = {
  name: string;
  friends: { name: string }[];
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

function TestArrayField(props: ArrayFieldProps<{ name: string }>) {
  return <ArrayField {...props} />;
}

function renderTest(
  ui?: React.ReactElement<any, string | React.JSXElementConstructor<any>>,
  options?: { friends: Partial<ArrayFieldProps<{ name: string }>> }
) {
  const result = render(
    ui ?? (
      <Form<FormState>
        name="ArrayFieldTest"
        initialValues={{ name: "", friends: [{ name: "John" }] }}
      >
        <TestField name="name" type="text" label="Name" />
        <TestArrayField
          name="friends"
          render={({ values, arrayHelpers }) => {
            return (
              <div>
                <button onClick={() => arrayHelpers.add({ name: "Alex" })}>
                  Add Friend
                </button>
                <ul>
                  {values.map((_, index) => {
                    return (
                      <li key={`friends[${index}].name`}>
                        <Field
                          name={`friends[${index}].name`}
                          label={`Friend ${index}`}
                          required
                          as={TestFieldComponent}
                        />
                      </li>
                    );
                  })}
                </ul>
                <ErrorMessage field="friends" onlyShowIfTouched={false} />
              </div>
            );
          }}
          {...options?.friends}
        />
        <SubmitButton>Submit</SubmitButton>
      </Form>
    )
  );

  function NameInput() {
    return result.getByLabelText("Name");
  }

  function GetInput(label: string) {
    return result.getByLabelText(label);
  }

  function AddFriendButton() {
    return result.getByText("Add Friend");
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

  async function clearFieldValue(nameOrElement: string | HTMLElement) {
    await userEvent.clear(
      typeof nameOrElement === "string"
        ? result.getByLabelText(nameOrElement)
        : nameOrElement
    );
  }

  async function clickField(labelOrElement: string | HTMLElement) {
    await userEvent.click(
      typeof labelOrElement === "string"
        ? result.getByLabelText(labelOrElement)
        : labelOrElement
    );
  }

  async function clickSubmit() {
    await userEvent.click(HtmlSubmitButton());
  }

  async function clickAddFriend() {
    await userEvent.click(AddFriendButton());
  }

  function expectInputValueToBe(value: string) {
    expect(result.getByDisplayValue(value)).toBeInTheDocument();
  }

  return {
    result,
    AddFriendButton,
    clickAddFriend,
    GetInput,
    NameInput,
    expectInputValueToBe,
    clickSubmit,
    HtmlSubmitButton,
    clickField,
    changeFieldValue,
    clearFieldValue,
  };
}

describe("components/DependentField", () => {
  describe("functionality", () => {
    beforeEach(resetState);

    it("should render without error", () => {
      const { GetInput, NameInput } = renderTest();

      expect(NameInput()).toBeInTheDocument();
      expect(GetInput("Friend 0")).toBeInTheDocument();
    });

    it("should be able to call array helpers and update accordingly", async () => {
      const { clickAddFriend, GetInput, result } = renderTest();

      await clickAddFriend();

      expect(GetInput("Friend 0")).toBeInTheDocument();
      expect(GetInput("Friend 1")).toBeInTheDocument();

      expect(result.getByDisplayValue("John")).toBeInTheDocument();
      expect(result.getByDisplayValue("Alex")).toBeInTheDocument();
    });
  });

  describe("validation", () => {
    beforeEach(resetState);

    it("should call field array validate function", async () => {
      const { clickAddFriend, result } = renderTest(undefined, {
        friends: {
          validate: (values) => {
            if (!values) {
              return "You must have at least 3 friends.";
            }
            if (values.length < 3) {
              return "You must have at least 3 friends.";
            }
            return null;
          },
        },
      });

      await clickAddFriend();

      expect(
        result.getByText("You must have at least 3 friends.")
      ).toBeInTheDocument();
    });

    it("should call field level validation", async () => {
      const { GetInput, result, clearFieldValue, clickField, clickAddFriend } =
        renderTest();

      await clickAddFriend();
      await clearFieldValue(GetInput("Friend 0"));

      // trigger `touched` state
      await clickField(GetInput("Friend 0"));
      await clickField(GetInput("Friend 1"));

      expect(result.getByText("Friend 0 is required.")).toBeInTheDocument();
    });
  });

  describe("performance", () => {
    beforeEach(resetState);

    it("should only re-render when its dependencies change", async () => {
      const { changeFieldValue, result, NameInput } = renderTest();

      await changeFieldValue(NameInput(), "John Smith");

      expect(result.getByTestId("rerenders-friends[0].name")).toHaveTextContent(
        "1"
      );
    });
  });
});
