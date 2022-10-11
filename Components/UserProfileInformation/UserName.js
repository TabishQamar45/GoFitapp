import { View, Text } from "react-native";
import React from "react";
import { RFValue } from "react-native-responsive-fontsize";

const UserName = ({ children, alignSelf }) => {
  return (
    <Text
      style={{
        fontFamily: "DM_SansB",
        fontWeight: "500",
        fontSize: RFValue(20, 700),
        alignSelf: alignSelf,
      }}
    >
      {children}
    </Text>
  );
};

export default UserName;
