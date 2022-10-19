import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../constants/Constants";

const MentorDivider = () => {
  return (
    <View
      style={{
        width: "97%",
        borderColor: COLORS.PRIMARY_200,
        borderRadius: 2,
        borderWidth: 0.5,
        alignSelf: "center",
      }}
    />
  );
};

export default MentorDivider;

const styles = StyleSheet.create({});
