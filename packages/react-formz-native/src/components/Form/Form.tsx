import React from "react";
import { View } from "react-native";

const Form = ({ children }: React.PropsWithChildren<{}>) => {
    return (
        <View>
            {children}
        </View>
    );
}

export default Form;
