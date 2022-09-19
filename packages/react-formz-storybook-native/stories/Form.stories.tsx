import { ComponentMeta, ComponentStory } from "@storybook/react-native";
import { Form, TextField, ErrorMessage } from "@zerry/react-formz-native";
import { StyleSheet, TextInput, View } from "react-native";

export default {
  title: "Components/Form",
  component: Form,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Form>;

type FormValues = {
  firstName: string;
  email: string;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6E6FA",
    padding: 20,
    flexDirection: "column",
  },
  input: {
    height: 40,
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 10
  },
});

const FieldTemplate: ComponentStory<typeof Form> = () => {
  return (
    <>
    <Form<FormValues>
      initialValues={{ firstName: "Alex", email: "" }}
      component={({ children }) => <View style={styles.container} key="story">{children}</View>}
    >
      <TextField
        name="firstName"
        required
        type="default"
        as={({ input }) => (
          <>
            <TextInput
              {...input}
              style={styles.input}
              placeholder="First Name"
            />
            <ErrorMessage field={input.name} />
          </>
        )}
      />
      <TextField
        name="email"
        type="email-address"
        as={({ input }) => (
          <>
            <TextInput
              {...input}
              style={styles.input}
              placeholder="Email Address"
            />
            <ErrorMessage field={input.name} />
          </>
        )}
      />
    </Form>
    </>
  );
};

export const WithFields = FieldTemplate.bind({});

WithFields.args = {};
