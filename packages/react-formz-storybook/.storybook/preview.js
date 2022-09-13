import "./wdyr";
import "antd/dist/antd.css";
import "./preview.css";
import { SnackbarProvider } from "notistack";
import { FormzDateProvider } from "@zerry/react-formz";
import formatDate from "date-fns/format";

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
    <FormzDateProvider
      formatter={(date, format) => formatDate(new Date(date), format)}
    >
      <SnackbarProvider>
        <Story />
      </SnackbarProvider>
    </FormzDateProvider>
    // </Profiler>
  ),
];
