import { View, Text, Image } from "react-native";
import React from "react";
import { ICONS } from "../../constants/Constants";

const UserImg = ({ height, width, borderRadius }) => {
  return (
    <Image
      source={ICONS.ellipse}
      style={{ height: height, width: width, borderRadius: borderRadius }}
    />
  );
};

export default UserImg;
