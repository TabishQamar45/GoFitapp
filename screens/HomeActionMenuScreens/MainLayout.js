import "react-native-gesture-handler";
import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { COLORS, ICONS } from "../../constants/Constants";
import Animated from "react-native-reanimated";
import { useDrawerProgress } from "@react-navigation/drawer";
import useDynamicStyling from "../../customhooks/useDynamicStyling";
import { RFValue } from "react-native-responsive-fontsize";
import UserImg from "../../Components/UserProfileInformation/UserImg";
import UserType from "../../Components/UserProfileInformation/UserType";
import UserName from "../../Components/UserProfileInformation/UserName";
const MainLayout = ({ navigation }) => {
  // const progress = useDrawerProgress();
  // const scale = Animated.interpolateNode(progress.value, {
  //   inputRange: [0, 1],
  //   outputRange: [1, 0.75],
  // });
  // const borderRadius = Animated.interpolateNode(progress.value, {
  //   inputRange: [0, 1],
  //   outputRange: [0, 30],
  // });

  // const animatedStyle = {
  //   borderRadius,
  //   transform: [{ scale }],
  //   overflow: "hidden",
  // };
  const { DynamicStyles } = useDynamicStyling();
  return (
    <Animated.View
      style={{
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        backgroundColor: COLORS.PRIMARY_100,
      }}
    >
      <View
        style={{
          // backgroundColor: "yellow",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          marginVertical: DynamicStyles(50),
          paddingHorizontal: DynamicStyles(20),
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{
              marginTop: DynamicStyles(20),
              marginRight: DynamicStyles(10),
            }}
            onPress={() => navigation.navigate("")}
          >
            <Image source={require("../../assets/Images/menu-bar.png")} />
          </TouchableOpacity>
          <View>
            <UserImg width={50} height={50} borderRadius={25} />
            <UserType>Hello, Good Morning</UserType>
            <UserName>Sophia!</UserName>
          </View>
        </View>
        <TouchableOpacity style={{ marginTop: DynamicStyles(20) }}>
          <Image
            style={{ tintColor: "#000000" }}
            source={require("../../assets/Images/notification.png")}
          />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export default MainLayout;
