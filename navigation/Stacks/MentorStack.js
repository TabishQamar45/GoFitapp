import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import MentorDetail from "../../screens/HomeActionMenuScreens/MentorDetail";
import MentorsScreen from "./../../screens/HomeActionMenuScreens/MentorsScreen";
import MentorChatScreen from "../../screens/HomeActionMenuScreens/MentorChatScreen";
import { COLORS } from "../../constants/Constants";
import useDynamicStyling from "../../customhooks/useDynamicStyling";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

const MentorStack = () => {
  const { DynamicStyles } = useDynamicStyling();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MentorsScreen"
        component={MentorsScreen}
        options={{
          headerTitleAlign: "center",
          title: "Mentors",
        }}
      />
      <Stack.Screen
        options={({ route, navigation }) => ({
          headerStyle: { backgroundColor: COLORS.PRIMARY_100 },
          title: "Profile",
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("MentorChat")}>
              <Image
                source={require("../../assets/Images/messages.png")}
                style={{ tintColor: "#000000" }}
              />
            </TouchableOpacity>
          ),
        })}
        name="MentorDetail"
        component={MentorDetail}
      />
      <Stack.Screen
        name="MentorChat"
        component={MentorChatScreen}
        options={({ route, navigation }) => ({
          // headerLeft: () => <Ionicons name="arrow-back" color={"red"} />,
          // header: (props) => (
          //   <View
          //     style={{
          //       alignItems: "center",
          //       height: DynamicStyles(120),
          //       flexDirection: "row",
          //     }}
          //   >
          //     <TouchableOpacity
          //       onPress={() => navigation.navigate("MentorDetail")}
          //     >
          //       <Ionicons name="arrow-back" color={"red"} size={26} />
          //     </TouchableOpacity>
          //     <Image
          //       source={require("../../assets/Images/Ellipse.png")}
          //       style={{
          //         height: DynamicStyles(50),
          //         width: DynamicStyles(50),
          //         borderRadius: DynamicStyles(25),
          //       }}
          //     />
          //   </View>
          // ),
        })}
      />
    </Stack.Navigator>
  );
};

export default MentorStack;
