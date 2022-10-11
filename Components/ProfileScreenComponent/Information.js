import { View, Text } from "react-native";
import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import useDynamicStyling from "../../customhooks/useDynamicStyling";

const Information = ({ children }) => {
  const { DynamicStyles } = useDynamicStyling();

  return (
    <Text
      style={{
        fontFamily: "MontserratR",
        fontSize: RFValue(10, 667),
        fontWeight: "500",
        lineHeight: DynamicStyles(12),
      }}
    >
      {children}
    </Text>
  );
};

export default Information;
