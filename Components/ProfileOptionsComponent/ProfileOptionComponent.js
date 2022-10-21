import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import useDynamicStyling from "../../customhooks/useDynamicStyling";

const ProfileOptionComponent = ({ icon, text, onPress }) => {
  const { DynamicStyles } = useDynamicStyling();
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#d2d2d2",
          height: DynamicStyles(50),
          borderRadius: DynamicStyles(10),
          width: "95%",
          alignSelf: "center",
          marginTop: DynamicStyles(5),
        }}
      >
        <Image source={icon} style={{ marginHorizontal: DynamicStyles(10) }} />
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProfileOptionComponent;
