import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import GymBooking from "../../Components/Booking/GymBooking";
import OnlineBooking from "../../Components/Booking/OnlineBooking";

const Tab = createMaterialTopTabNavigator();
const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const BookScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#000",
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{
          paddingTop: 13,
          paddingBottom: 10,
          borderBottomWidth: 1,
          borderBottomColor: "white",
          marginBottom: 11,
        }}
      >
        <Text style={{ color: "white", fontSize: 28, fontWeight: "400" }}>
          Book Appointment
        </Text>
      </View>
      <Tab.Navigator
        sceneContainerStyle={{ backgroundColor: "transparent" }}
        screenOptions={{
          tabBarLabelStyle: {
            color: "white",
            fontWeight: "600",
          },
          // tabBarItemStyle: { width: "100%" },
          tabBarStyle: { marginBottom: 20, backgroundColor: "#000" },
          tabBarIndicatorStyle: {
            height: "100%",
            borderRadius: 10,
            backgroundColor: "#B0C929",
          },
        }}
      >
        <Tab.Screen name="Gym Session" component={GymBooking} />
        <Tab.Screen name="Online Session" component={OnlineBooking} />
      </Tab.Navigator>
    </View>
  );
};

export default BookScreen;

const styles = StyleSheet.create({});
