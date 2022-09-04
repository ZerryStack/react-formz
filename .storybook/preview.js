import "./wdyr";
import { Profiler } from "react";
import uuid from "react-uuid";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    // <Profiler id={uuid()} onRender={console.log}>
      <Story />
    // </Profiler>
  ),
];
