import { View, Text } from "react-native";
import React from "react";
import { RFValue } from "react-native-responsive-fontsize";

const UserType = ({ children }) => {
  return (
    <Text
      style={{
        fontFamily: "MontserratR",
        fontWeight: "500",
        fontSize: RFValue(14, 700),
        color: "#3A4750",
      }}
    >
      {children}
    </Text>
  );
};

export default UserType;
