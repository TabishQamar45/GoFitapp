import {
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import useDynamicStyling from "../../customhooks/useDynamicStyling";
import { RFValue } from "react-native-responsive-fontsize";
const PrimaryButton = ({
  children,
  textColor,
  backgroundColor,
  onPress,
  borderColor,
}) => {
  const { DynamicStyles } = useDynamicStyling();
  const { width, height } = useWindowDimensions();

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          backgroundColor: backgroundColor,
          borderRadius: DynamicStyles(10),
          justifyContent: "center",
          height:
            width / (height < 700 ? DynamicStyles(7) : DynamicStyles(6.5)),
          borderColor: borderColor,
          borderWidth: 1,
        }}
      >
        <Text
          style={{
            color: textColor,
            textAlign: "center",
            fontFamily: "BebasNeue",
            lineHeight: DynamicStyles(27),
            fontWeight: "400",
            fontSize: RFValue(22),
          }}
        >
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
