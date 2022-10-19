import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Text } from "react-native";
import ProductDetail from "../../Components/ShopComponents/ProductDetail";
import ShopScreen from "./../../screens/HomeActionMenuScreens/ShopScreen";
const Stack = createNativeStackNavigator();

const ShopStack = () => {
  return (
    <Stack.Navigator initialRouteName="ShopScreen">
      <Stack.Screen name="ShopScreen" component={ShopScreen} />
      <Stack.Screen
        options={{
          headerShown: true,
          title: "ProductDetail",
        }}
        name="ProductDetail"
        component={ProductDetail}
      />
    </Stack.Navigator>
  );
};

export default ShopStack;
