import { ComponentMeta, ComponentStory } from "@storybook/react-native";
import { Form, Field } from "@zerry/react-formz-native";
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
      <Field<string>
        name="firstName"
        required
        type="default"
        as={({ input: { onChangeText, value } }) => (
          <TextInput
            onChangeText={onChangeText}
            value={value}
            style={styles.input}
            placeholder="First Name"
          />
        )}
      />
      <Field<string>
        name="email"
        type="email-address"
        as={({ input: { onChangeText, value } }) => (
          <TextInput
            onChangeText={onChangeText}
            value={value}
            style={styles.input}
            placeholder="Email Address"
          />
        )}
      />
    </Form>
    </>
  );
};

export const WithFields = FieldTemplate.bind({});

WithFields.args = {};
