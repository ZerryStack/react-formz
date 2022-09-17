import { getStorybookUI } from "@storybook/react-native";
import "./storybook.requires";

const StorybookUIRoot = getStorybookUI({
    shouldDisableKeyboardAvoidingView: true
});

export default StorybookUIRoot;
