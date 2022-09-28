import { StyleSheet, Text, View } from "react-native";
import React from "react";
import useDynamicStyling from "../../customhooks/useDynamicStyling";
import { RFValue } from "react-native-responsive-fontsize";

const TextFieldTitle = ({ children }) => {
  const { DynamicStyles } = useDynamicStyling();
  return (
    <Text
      style={{
        fontFamily: "MontserratR",
        fontSize: RFValue(16, 667),
        fontWeight: "500",
        lineHeight: DynamicStyles(19.5),
        color: "#3A4750",
      }}
    >
      {children}
    </Text>
  );
};

export default TextFieldTitle;
