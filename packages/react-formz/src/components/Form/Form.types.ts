import React from "react";
import { UseFormOptions, UseFormResult } from "../../hooks/forms/useForm";
import { FieldId } from "../../types/field";
import {
  FormRehydrationCallback,
  FormSubmitCallback,
  FormzValues,
} from "../../types/form";
import { TypeFromPath } from "../../types/keys";
import { FieldProps } from "../Field";

type HtmlFormProps = Omit<
  React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  >,
  "children" | "onSubmit"
>;

type FormComponentProps = Omit<
  React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  >,
  "ref"
>;
export interface FormProps<Values extends FormzValues>
  extends UseFormOptions<Values>,
    HtmlFormProps {
  children?: React.ReactNode;
  onSubmit?: FormSubmitCallback<Values>;
  component?: "form" | React.ComponentType<FormComponentProps>;
  /**
   * If true, the form state will reset after a successful submission.
   */
  resetOnSubmit?: boolean;
  onFormRehydrated?: FormRehydrationCallback<Values>;
}

export interface FormChildrenProps<Values extends FormzValues> {
  children: (form: UseFormResult<Values>) => React.ReactNode;
  form: UseFormResult<Values>;
}

export interface IForm<Values extends FormzValues>
  extends React.FC<FormProps<Values>> {
  Field: <
    Key extends FieldId = FieldId,
    Element = HTMLInputElement,
    Component extends React.ComponentType<{}> = React.ComponentType<{}>
  >(
    props: FieldProps<Key, TypeFromPath<FormzValues, Key>, Element, Component>
  ) => JSX.Element;
  TextField: <
    Key extends FieldId = FieldId,
    Component extends React.ComponentType<{}> = React.ComponentType<{}>
  >(
    props: FieldProps<Key, TypeFromPath<FormzValues, Key>, HTMLInputElement, Component>
  ) => JSX.Element;
  NumberField: <
    Key extends FieldId = FieldId,
    Component extends React.ComponentType<{}> = React.ComponentType<{}>,
  >(
    props: FieldProps<Key, TypeFromPath<FormzValues, Key>, HTMLInputElement, Component>
  ) => JSX.Element;
  CheckboxField: <
    Key extends FieldId = FieldId,
    Component extends React.ComponentType<{}> = React.ComponentType<{}>,
  >(
    props: FieldProps<Key, TypeFromPath<FormzValues, Key>, HTMLInputElement, Component>
  ) => JSX.Element;
}
