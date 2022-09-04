import "./wdyr";
import { Profiler } from "react";
import uuid from "react-uuid";
import 'antd/dist/antd.css';
import './preview.css';

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
