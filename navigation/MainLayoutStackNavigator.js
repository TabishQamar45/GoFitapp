import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import { COLORS } from "../constants/Constants";
import ProfileScreen from "../screens/MainLayoutScreens/ProfileScreen";
import EditProfileScreen from "../screens/MainLayoutScreens/EditProfileScreen";
const Stack = createNativeStackNavigator();

const MainLayoutStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ route, navigation }) => ({
          headerStyle: { backgroundColor: COLORS.PRIMARY_100 },
          title: "Profile",
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("edit-profile")}
            >
              <Image source={require("../assets/Images/edit-btn.png")} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="edit-profile"
        component={EditProfileScreen}
        options={({ route, navigation }) => ({
          title: "Edit Profile",
          headerStyle: { backgroundColor: COLORS.PRIMARY_100 },
        })}
      />
    </Stack.Navigator>
  );
};

export default MainLayoutStackNavigator;
