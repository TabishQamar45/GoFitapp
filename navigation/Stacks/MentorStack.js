import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Text } from "react-native";
import MentorDetail from "../../Components/MentorComponents/MentorDetail";
import MentorsScreen from "./../../screens/HomeActionMenuScreens/MentorsScreen";
const Stack = createNativeStackNavigator();

const MentorStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MentorsScreen" component={MentorsScreen} />
      <Stack.Screen
        options={{
          headerShown: true,
          title: "ProductDetail",
        }}
        name="MentorDetail"
        component={MentorDetail}
      />
    </Stack.Navigator>
  );
};

export default MentorStack;
