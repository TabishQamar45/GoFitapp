import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MentorCard from "../../Components/MentorComponents/MentorCard";
import { COLORS } from "../../constants/Constants";
import MentorDetailTabNavigator from "../../navigation/MentorDetailTabNavigator";
import useDynamicStyling from "../../customhooks/useDynamicStyling";

const services = [
  { id: 1, service: "Private Personal Training" },
  { id: 2, service: "Improving General Fitness" },
  { id: 3, service: "Muscle and Strength Gain" },
  { id: 4, service: "Improving Flexibility" },
  { id: 5, service: "Nutrition and Meal Plans" },
  { id: 6, service: "Bodybuilding and Competing" },
  { id: 7, service: "Private Personal Training" },
];

const MentorDetail = ({ route, navigation }) => {
  const { name, address } = route.params;
  const { DynamicStyles } = useDynamicStyling();
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        backgroundColor: COLORS.PRIMARY_100,
      }}
    >
      <MentorCard name={name} address={address} pressable={true} />
      <MentorDetailTabNavigator />
    </View>
  );
};

export default MentorDetail;

const styles = StyleSheet.create({});
