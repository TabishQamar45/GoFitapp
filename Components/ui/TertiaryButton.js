import {
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import useDynamicStyling from "../../customhooks/useDynamicStyling";
import { RFValue } from "react-native-responsive-fontsize";
const TertiaryButton = ({
  children,
  textColor,
  backgroundColor,
  onPress,
  source,
}) => {
  const { width, height } = useWindowDimensions();
  const { DynamicStyles } = useDynamicStyling();
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          backgroundColor: backgroundColor,
          flexDirection: "row",
          borderRadius: DynamicStyles(10),
          justifyContent: "center",
          alignItems: "center",
          height:
            width / (height < 700 ? DynamicStyles(7) : DynamicStyles(6.5)),
        }}
      >
        <View style={{ flex: DynamicStyles(2), alignItems: "center" }}>
          <Image source={source} />
        </View>
        <View
          style={{ flex: DynamicStyles(5), paddingLeft: DynamicStyles(10) }}
        >
          <Text
            style={{
              fontFamily: "MontserratB",
              fontSize: RFValue(14),
              fontWeight: "600",
              lineHeight: DynamicStyles(17.07),
              color: textColor,
            }}
          >
            {children}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TertiaryButton;
