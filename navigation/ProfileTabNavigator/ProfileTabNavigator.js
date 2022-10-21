import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { COLORS } from "../../constants/Constants";
import ProfileOptionsScreen from "../../screens/HomeActionMenuScreens/ProfileOptionsScreen";

const Tab = createMaterialTopTabNavigator();

const ProfileTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#000000",
        tabBarInactiveTintColor: "#909090",
        tabBarStyle: { backgroundColor: COLORS.PRIMARY_100 },
      }}
    >
      <Tab.Screen
        name="profile-option"
        component={ProfileOptionsScreen}
        options={{
          title: "SETTINGS",
        }}
      />
      {/* <Tab.Screen name="profilee" component={ProfileScreen} /> */}
    </Tab.Navigator>
  );
};
export default ProfileTabNavigator;
