import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { COLORS } from "../constants/Constants";

import { View, Text, TouchableOpacity } from "react-native";
import GenderSelectionScreen from "../screens/AccountSetupScreens/GenderSelectionScreen";
import SelectAgeScreen from "../screens/AccountSetupScreens/SelectAgeScreen";
import SelectWeightScreen from "../screens/AccountSetupScreens/SelectWeightScreen";
import GoalWeightScreen from "../screens/AccountSetupScreens/GoalWeightScreen";
import SelectHeightScreen from "../screens/AccountSetupScreens/SelectHeightScreen";
import FitnessLevelOpScreens from "../screens/AccountSetupScreens/FitnessLevelOpScreens";
import SelectFavScreen from "../screens/AccountSetupScreens/SelectFavScreen";
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";
import FitnessGoalScreen from "../screens/AccountSetupScreens/FitnessGoalScreen";
const Stack = createNativeStackNavigator();

const AccSetupNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitle: "",
      }}
    >
      <Stack.Screen
        name="select-fav"
        component={SelectFavScreen}
        options={({ route, navigation }) => ({
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("gender-Selection")}
            >
              <Text
                style={{
                  fontFamily: "MontserratB",
                  fontSize: RFValue(14, 667),
                }}
              >
                Skip
              </Text>
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="gender-Selection"
        component={GenderSelectionScreen}
        options={({ route, navigation }) => ({
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("select-age")}>
              <Text
                style={{
                  fontFamily: "MontserratB",
                  fontSize: RFValue(14, 667),
                }}
              >
                Skip
              </Text>
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="select-age"
        component={SelectAgeScreen}
        options={({ route, navigation }) => ({
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("select-weight")}
            >
              <Text
                style={{
                  fontFamily: "MontserratB",
                  fontSize: RFValue(14, 667),
                }}
              >
                Skip
              </Text>
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="select-weight"
        component={SelectWeightScreen}
        options={({ route, navigation }) => ({
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("goal-weight")}
            >
              <Text
                style={{
                  fontFamily: "MontserratB",
                  fontSize: RFValue(14, 667),
                }}
              >
                Skip
              </Text>
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="goal-weight"
        component={GoalWeightScreen}
        options={({ route, navigation }) => ({
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("select-height")}
            >
              <Text
                style={{
                  fontFamily: "MontserratB",
                  fontSize: RFValue(14, 667),
                }}
              >
                Skip
              </Text>
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="select-height"
        component={SelectHeightScreen}
        options={({ route, navigation }) => ({
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("fitness-level")}
            >
              <Text
                style={{
                  fontFamily: "MontserratB",
                  fontSize: RFValue(14, 667),
                }}
              >
                Skip
              </Text>
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="fitness-level"
        component={FitnessLevelOpScreens}
        options={({ route, navigation }) => ({
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("fitness-goal")}
            >
              <Text
                style={{
                  fontFamily: "MontserratB",
                  fontSize: RFValue(14, 667),
                }}
              >
                Skip
              </Text>
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="fitness-goal"
        component={FitnessGoalScreen}
        options={({ route, navigation }) => ({
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("authentication")}
            >
              <Text
                style={{
                  fontFamily: "MontserratB",
                  fontSize: RFValue(14, 667),
                }}
              >
                Skip
              </Text>
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default AccSetupNavigator;
