import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import Apploading from "expo-app-loading";
import SplashScreen from "./screens/OnBoardingScreens/SplashScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import AuthenticationNavigator from "./navigation/AuthenticationNavigator";
import HomeScreenNavigator from "./navigation/HomeScreenNavigator";
import AccSetupNavigator from "./navigation/AccSetupNavigator";
import MainLayoutStackNavigator from "./navigation/MainLayoutStackNavigator";
const Stack = createNativeStackNavigator();
const getFonts = () =>
  Font.loadAsync({
    BebasNeue: require("./assets/fonts/BebasNeue-Regular/BebasNeue-Regular.ttf"),
    MontserratR: require("./assets/fonts/Montserrat/Montserrat-Regular.ttf"),
    MontserratB: require("./assets/fonts/Montserrat/Montserrat-Bold.ttf"),
    MontserratM: require("./assets/fonts/Montserrat/Montserrat_Medium.ttf"),
    DM_SansB: require("./assets/fonts/DM_Sans/DMSans_Bold.ttf"),
    DM_SansR: require("./assets/fonts/DM_Sans/DMSans_Regular.ttf"),
  });

export default function App() {
  const [fontsloaded, setFontsLoaded] = React.useState(false);
  if (fontsloaded) {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTransparent: true }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen
            options={{
              headerLeft: () => {
                <Ionicons name="arrow-back-sharp" />;
              },
              headerTitle: "",
              headerShown: false,
            }}
            name="authentication"
            component={AuthenticationNavigator}
          />
          <Stack.Screen
            name="home-screen-navigator"
            component={HomeScreenNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AccountSetup"
            component={AccSetupNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Main-Layout-Stack"
            component={MainLayoutStackNavigator}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <Apploading
        startAsync={getFonts}
        onFinish={() => {
          setFontsLoaded(true);
        }}
        onError={console.warn}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
