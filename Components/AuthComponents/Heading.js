import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import useDynamicStyling from "../../customhooks/useDynamicStyling";
const Heading = ({ children }) => {
  const { DynamicStyles } = useDynamicStyling();
  const { height } = useWindowDimensions();
  return (
    <Text
      style={{
        fontFamily: "BebasNeue",
        fontSize: RFValue(30, 667),
        fontWeight: "400",
        lineHeight: DynamicStyles(30),
        color: "#000000",
        marginVertical: height < 700 ? DynamicStyles(5) : DynamicStyles(15),
      }}
    >
      {children}
    </Text>
  );
};

export default Heading;
