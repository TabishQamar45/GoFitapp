import { StyleSheet, Text, View } from "react-native";
import React from "react";
import useDynamicStyling from "../../customhooks/useDynamicStyling";
import { RFValue } from "react-native-responsive-fontsize";
const Description = ({ children }) => {
  const { DynamicStyles } = useDynamicStyling();
  return (
    <Text
      style={{
        color: "#3A4750",
        fontWeight: "500",
        fontSize: RFValue(15, 667),
        lineHeight: DynamicStyles(19.5),
      }}
    >
      {children}
    </Text>
  );
};

export default Description;
