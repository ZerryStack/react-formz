import { ComponentMeta, ComponentStory } from "@storybook/react-native";
import {
  Form,
  TextField,
  ErrorMessage,
  ArrayField,
  SubmitButton,
} from "@zerry/react-formz-native";
import { StyleSheet, TextInput, View, Text, Button, Alert } from "react-native";

export default {
  title: "Components/Array Field",
  component: Form,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Form>;

type FormValues = {
  friends: { name: string }[];
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
  },
  inputWrapper: {
    marginBottom: 10,
  },
  errorMessage: {
    color: "red",
  },
});

const FieldTemplate: ComponentStory<typeof Form> = () => {
  return (
    <>
      <Form<FormValues>
        initialValues={{
          friends: [{ name: "John" }],
        }}
        component={({ children }) => (
          <View style={styles.container} key="story">
            {children}
          </View>
        )}
        onSubmit={(values) => {
          Alert.alert("Values", JSON.stringify(values));
        }}
      >
        <ArrayField<{ name: string }>
          name="friends"
          render={({ values, arrayHelpers }) => {
            return (
              <View>
                <Button
                  title="Add New User"
                  onPress={() => arrayHelpers.add({ name: "" })}
                />
                {values.map((_, index) => {
                  return (
                    <TextField
                      key={`friend-${index}`}
                      name={`friends.${index}.name`}
                      label="Friend"
                      required
                      as={({ input: { label, ...input } }) => {
                        return (
                          <View style={styles.inputWrapper}>
                            <Text>{label}</Text>
                            <TextInput {...input} style={styles.input} />
                            <ErrorMessage
                              field={input.name}
                              style={styles.errorMessage}
                            />
                          </View>
                        );
                      }}
                    />
                  );
                })}
              </View>
            );
          }}
        />
        <SubmitButton title="Submit" />
      </Form>
    </>
  );
};

export const WithFields = FieldTemplate.bind({});

WithFields.args = {};
