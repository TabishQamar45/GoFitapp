import {
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import useDynamicStyling from "../../customhooks/useDynamicStyling";
const TextFieldInput = ({ placeholder, value, setValue, secureTextEntry }) => {
  const { DynamicStyles } = useDynamicStyling();
  const { width } = useWindowDimensions();
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      setValue={(text) => setValue(text)}
      secureTextEntry={secureTextEntry}
      style={{
        backgroundColor: "#f5f5f5",
        borderRadius: DynamicStyles(10),
        borderWidth: DynamicStyles(1),
        borderColor: "#d7d7d7",
        paddingHorizontal: DynamicStyles(20),
        height: width / DynamicStyles(6),
        width: "100%",
        fontFamily: "MontserratR",
        fontSize: RFValue(14, 667),
        lineHeight: DynamicStyles(17),
        fontWeight: "500",
        color: "#303841",
      }}
    />
  );
};

export default TextFieldInput;
