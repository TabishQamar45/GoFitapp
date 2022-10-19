import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BookingScreen from "./../../screens/HomeActionMenuScreens/BookingScreen";

const Stack = createNativeStackNavigator();

const BookingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BookingScreen" component={BookingScreen} />
    </Stack.Navigator>
  );
};

export default BookingStack;
