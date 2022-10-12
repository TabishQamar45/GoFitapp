import "react-native-gesture-handler";
import {
  createDrawerNavigator,
  useDrawerProgress,
} from "@react-navigation/drawer";
import { View } from "react-native";
import { COLORS } from "../constants/Constants";
import MenuDrawerContent from "../Components/MenuDrawerComponent/MenuDrawerContent";
import Animated from "react-native-reanimated";
import React, { useState } from "react";
import HomeScreen from "../screens/HomeActionMenuScreens/HomeScreen";
const MenuDrawer = createDrawerNavigator();

function MenuDrawerNavigator() {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.PRIMARY_100 }}>
      <MenuDrawer.Navigator
        detachInactiveScreens={true}
        screenOptions={{
          headerShown: true,
          drawerType: "slide",
          overlayColor: "transparent",
          drawerStyle: {
            flex: 1,
            width: "65%",
            paddingRight: 20,
            backgroundColor: "transparent",
          },
          sceneContainerStyle: {
            backgroundColor: "transparent",
          },
          // title: "",
        }}
        initialRouteName="HomeScreen"
        useLegacyImplementation
        drawerContent={(props) => {
          return <MenuDrawerContent {...props} />;
        }}
      >
        <MenuDrawer.Screen
          name="main"
          component={HomeScreen}
          options={{
            title: "",
          }}
        />
      </MenuDrawer.Navigator>
    </View>
  );
}
export default MenuDrawerNavigator;
