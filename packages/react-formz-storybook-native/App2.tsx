import React from "react";
import { Form, Field } from "@zerry/react-formz-native";
import {
  TextInput,
  View,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

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
    marginBottom: 10,
  },
});

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Form<FormValues>
          initialValues={{ firstName: "Alex", email: "" }}
          component={({ children }) => (
            <KeyboardAvoidingView
              behavior="height"
              style={styles.container}
              key="story"
            >
              {children}
            </KeyboardAvoidingView>
          )}
        >
          <Field<string>
            name="firstName"
            required
            type="default"
            as={({ input }) => (
              <TextInput
                {...input}
                style={styles.input}
                placeholder="First Name"
              />
            )}
          />
          <Field<string>
            name="email"
            type="email-address"
            as={({ input }) => (
              <TextInput
                {...input}
                style={styles.input}
                placeholder="Email Address"
              />
            )}
          />
        </Form>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
