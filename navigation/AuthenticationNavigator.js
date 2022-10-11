import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import LoginScreen from "../screens/AuthenticationScreens/LoginScreen";
import RegistrationScreen from "../screens/AuthenticationScreens/RegistrationScreen";
import ResetPassScreen from "../screens/AuthenticationScreens/VerifyAccScreen";
import ForgotPassScreen from "../screens/AuthenticationScreens/ForgotPassScreen";
import { COLORS } from "../constants/Constants";

const AuthStack = createNativeStackNavigator();
const AuthenticationNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitle: "",
      }}
    >
      <AuthStack.Screen
        name="login"
        component={LoginScreen}
        options={{
          headerStyle: {
            backgroundColor: COLORS.PRIMARY_100,
          },
        }}
      />
      <AuthStack.Screen
        name="register"
        component={RegistrationScreen}
        options={{
          headerStyle: {
            backgroundColor: COLORS.PRIMARY_100,
          },
        }}
      />
      <AuthStack.Screen
        name="forgot-pass"
        component={ForgotPassScreen}
        options={{
          headerStyle: {
            backgroundColor: COLORS.PRIMARY_100,
          },
        }}
      />
      <AuthStack.Screen
        name="verify-acc"
        component={ResetPassScreen}
        options={{
          headerStyle: {
            backgroundColor: COLORS.PRIMARY_100,
          },
        }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthenticationNavigator;
