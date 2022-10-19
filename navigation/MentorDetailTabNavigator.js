import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MentorAboutScreen from "../screens/HomeActionMenuScreens/MentorAboutScreen";
import MentorServicesScreen from "../screens/HomeActionMenuScreens/MentorServicesScreen";
import MentorExperienceScreen from "../screens/HomeActionMenuScreens/MentorServicesScreen";
import { COLORS } from "../constants/Constants";
import useDynamicStyling from "../customhooks/useDynamicStyling";

const Tab = createMaterialTopTabNavigator();

function MentorDetailTabNavigator() {
  const { DynamicStyles } = useDynamicStyling();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.PRIMARY_200,
        tabBarLabelStyle: { fontSize: 12 },
        tabBarItemStyle: { width: 100 },
        tabBarStyle: { backgroundColor: "#F6FBF4" },
        tabBarInactiveTintColor: "grey",
        tabBarContentContainerStyle: {
          // backgroundColor: "red",
          borderColor: "red",
          borderWidth: 2,
        },
      }}
    >
      <Tab.Screen name="About" component={MentorAboutScreen} />
      <Tab.Screen name="Services" component={MentorExperienceScreen} />
      <Tab.Screen name="Certifications" component={MentorServicesScreen} />
    </Tab.Navigator>
  );
}

export default MentorDetailTabNavigator;
