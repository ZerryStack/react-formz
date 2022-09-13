import React, { useState } from "react";
import { ComponentStory } from "@storybook/react";
import {
  Form,
} from "@zerry/react-formz";
import LargeFormReactFormz from "./LargeForm.ReactFormz";
import LargeFormReactHookForm from "./LargeForm.ReactHookForm";

export default {
  title: "Examples/Large Form",
  parameters: {
    layout: "fullscreen",
  },
};

const Template: ComponentStory<typeof Form> = () => {
  const [library, setLibrary] =
    useState<"react-formz" | "formik" | "react-hook-form">("react-formz");

  return (
    <div>
      <select
        value={library}
        onChange={(e) => setLibrary(e.target.value as any)}
      >
        <option value="react-formz">React-Formz</option>
        <option value="formik">Formik</option>
        <option value="react-hook-form">React Hook Form</option>
      </select>
      {library === "react-formz" && <LargeFormReactFormz />}
      {/* {library === "formik" && <FormikForms />} */}
      {library === "react-hook-form" && <LargeFormReactHookForm />}
    </div>
  );
};

export const Example = Template.bind({});

Example.args = {};
