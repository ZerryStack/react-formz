import React from "react";
import { Form, TextField, ErrorMessage } from "@zerry/react-formz-native";
import {
  TextInput,
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
          <TextField
            name="firstName"
            required
            type="default"
            label="First Name"
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
            label="Email"
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
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
