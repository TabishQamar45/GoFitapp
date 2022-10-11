import { View, Text } from "react-native";
import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import useDynamicStyling from "../../customhooks/useDynamicStyling";

const Value = ({ children }) => {
  const { DynamicStyles } = useDynamicStyling();

  return (
    <Text
      style={{
        fontFamily: "MontserratR",
        fontSize: RFValue(16, 667),
        fontWeight: "600",
        lineHeight: DynamicStyles(20),
      }}
    >
      {children}
    </Text>
  );
};

export default Value;
