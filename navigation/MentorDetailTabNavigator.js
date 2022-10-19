import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MentorAboutScreen from "../screens/HomeActionMenuScreens/MentorAboutScreen";
import MentorServicesScreen from "../screens/HomeActionMenuScreens/MentorServicesScreen";
import MentorExperienceScreen from "../screens/HomeActionMenuScreens/MentorServicesScreen";
import { COLORS } from "../constants/Constants";
import useDynamicStyling from "../customhooks/useDynamicStyling";
import MentorCertificationScreen from "../screens/HomeActionMenuScreens/MentorCertificationScreen";
import { RFValue } from "react-native-responsive-fontsize";
import { useWindowDimensions } from "react-native";

const Tab = createMaterialTopTabNavigator();

function MentorDetailTabNavigator() {
  const { DynamicStyles } = useDynamicStyling();
  const { width } = useWindowDimensions();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.PRIMARY_100,
        // tabBarScrollEnabled: true,
        tabBarLabelStyle: {
          fontSize: RFValue(10, 667),
          fontFamily: "MontserratM",
        },
        tabBarIndicatorStyle: {
          backgroundColor: COLORS.PRIMARY_200,
          height: "100%",
          borderRadius: DynamicStyles(5),
        },
        // tabBarItemStyle: { width: DynamicStyles(150) },
        tabBarStyle: { backgroundColor: COLORS.PRIMARY_100 },
        tabBarInactiveTintColor: "grey",
      }}
    >
      <Tab.Screen name="About" component={MentorAboutScreen} />
      <Tab.Screen name="Services" component={MentorExperienceScreen} />
      <Tab.Screen name="Certifications" component={MentorCertificationScreen} />
    </Tab.Navigator>
  );
}

export default MentorDetailTabNavigator;
