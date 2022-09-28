import "react-native-gesture-handler";
import {
  createDrawerNavigator,
  useDrawerProgress,
} from "@react-navigation/drawer";
import { View } from "react-native";
import { COLORS } from "../constants/Constants";
import MenuDrawerContent from "../Components/MenuDrawerComponent/MenuDrawerContent";
import Animated from "react-native-reanimated";
import { useState } from "react";
import MainLayout from "../screens/HomeActionMenuScreens/MainLayout";
const MenuDrawer = createDrawerNavigator();

function MenuDrawerNavigator() {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.PRIMARY_100 }}>
      <MenuDrawer.Navigator
        screenOptions={{
          headerShown: false,
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
        }}
        initialRouteName="MainLayout"
        detachInactiveScreens={true}
        useLegacyImplementation
        drawerContent={(props) => {
          return <MenuDrawerContent {...props} />;
        }}
      >
        <MenuDrawer.Screen name="main">
          {(props) => <MainLayout {...props} />}
        </MenuDrawer.Screen>
      </MenuDrawer.Navigator>
    </View>
  );
}
export default MenuDrawerNavigator;
