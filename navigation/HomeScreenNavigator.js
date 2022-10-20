import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import { ICONS } from "../constants/Constants";
import { RFValue } from "react-native-responsive-fontsize";

import MentorStack from "./Stacks/MentorStack";
import ShopStack from "./Stacks/ShopStack";

import MenuDrawerNavigator from "./MenuDrawerNavigator";
import useDynamicStyling from "../customhooks/useDynamicStyling";
import ProfileScreen from "../screens/HomeActionMenuScreens/ProfileScreen";

const Tab = createBottomTabNavigator();

function HomeScreenNavigator() {
  const { DynamicStyles } = useDynamicStyling();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#000000",
        tabBarInactiveTintColor: "#909090",
        tabBarStyle: { backgroundColor: "white" },
      }}
    >
      <Tab.Screen
        name="Home"
        component={MenuDrawerNavigator}
        options={{
          tabBarLabelStyle: {
            fontFamily: "MontserratR",
            fontSize: RFValue(12, 667),
            fontWeight: "500",
            lineHeight: DynamicStyles(15),
          },
          tabBarIcon: ({ color }) => (
            <Image source={ICONS.home} style={{ tintColor: color }} />
          ),
        }}
      />
      <Tab.Screen
        name="Mentor"
        component={MentorStack}
        options={{
          tabBarLabelStyle: {
            fontFamily: "MontserratR",
            fontSize: RFValue(12, 667),
            fontWeight: "500",
            lineHeight: DynamicStyles(15),
          },
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../assets/Images/mentor.png")}
              style={{ tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={ShopStack}
        options={{
          tabBarLabelStyle: {
            fontFamily: "MontserratR",
            fontSize: RFValue(12, 667),
            fontWeight: "500",
            lineHeight: DynamicStyles(15),
          },
          tabBarIcon: ({ color }) => (
            <Image source={ICONS.exercise} style={{ tintColor: color }} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabelStyle: {
            fontFamily: "MontserratR",
            fontSize: RFValue(12, 667),
            fontWeight: "500",
            lineHeight: DynamicStyles(15),
          },
          tabBarIcon: ({ color }) => (
            <Image source={ICONS.dashboard} style={{ tintColor: color }} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default HomeScreenNavigator;
