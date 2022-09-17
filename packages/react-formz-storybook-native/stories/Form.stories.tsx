import { ComponentMeta, ComponentStory } from "@storybook/react-native";
import { Form } from "@zerry/react-formz-native";

export default {
    title: "Components/Form",
    component: Form,
    parameters: {
      layout: "fullscreen",
    },
  } as ComponentMeta<typeof Form>;

const FieldTemplate: ComponentStory<typeof Form> = () => {
    return (
        <Form>

        </Form>
    );
}

export const WithFields = FieldTemplate.bind({});

WithFields.args = {};