import "react-native-gesture-handler";
import { View, Text } from "react-native";
import React from "react";
import { COLORS } from "../../constants/Constants";
import Animated from "react-native-reanimated";
import { useDrawerProgress } from "@react-navigation/drawer";
const MainLayout = () => {
  const progress = useDrawerProgress();

  const scale = Animated.interpolateNode(progress.value, {
    inputRange: [0, 1],
    outputRange: [1, 0.75],
  });
  const borderRadius = Animated.interpolateNode(progress.value, {
    inputRange: [0, 1],
    outputRange: [0, 30],
  });

  const animatedStyle = {
    borderRadius,
    transform: [{ scale }],
    overflow: "hidden",
  };
  console.log('over',animatedStyle.overflow);
  return (
    <Animated.View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.PRIMARY_200,
        ...animatedStyle,
        // ...drawerAnimationStyle,
      }}
    >
      <Text>HomeScreen</Text>
    </Animated.View>
  );
};

export default MainLayout;
