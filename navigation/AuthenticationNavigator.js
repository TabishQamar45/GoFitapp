import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import LoginScreen from "../screens/AuthenticationScreens/LoginScreen";
import RegistrationScreen from "../screens/AuthenticationScreens/RegistrationScreen";
import ResetPassScreen from "../screens/AuthenticationScreens/VerifyAccScreen";
import ForgotPassScreen from "../screens/AuthenticationScreens/ForgotPassScreen";

const AuthStack = createNativeStackNavigator();

const AuthenticationNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="login" component={LoginScreen} />
      <AuthStack.Screen name="register" component={RegistrationScreen} />
      <AuthStack.Screen name="forgot-pass" component={ForgotPassScreen} />
      <AuthStack.Screen name="verify-acc" component={ResetPassScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthenticationNavigator;
