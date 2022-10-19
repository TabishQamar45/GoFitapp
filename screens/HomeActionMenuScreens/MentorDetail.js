import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const services = [
  { id: 1, service: "Private Personal Training" },
  { id: 2, service: "Improving General Fitness" },
  { id: 3, service: "Muscle and Strength Gain" },
  { id: 4, service: "Improving Flexibility" },
  { id: 5, service: "Nutrition and Meal Plans" },
  { id: 6, service: "Bodybuilding and Competing" },
  { id: 7, service: "Private Personal Training" },
];

const MentorDetail = () => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        marginTop: insets.top + 40,
        padding: 20,
        backgroundColor: "#ededed",
      }}
    >
      <Text
        style={{ fontSize: 20, fontFamily: "MontserratB", marginBottom: 15 }}
      >
        About
      </Text>
      <Text
        style={{
          fontSize: 14,
          fontFamily: "MontserratM",
          marginBottom: 15,
          color: "#6e6e6e",
        }}
      >
        Hardworking and goal-oriented Personal Fitness Trainer with over 4 years
        of experience working with adult clients. Skilled in weight and
        endurance training, and nutritional plan development. Committed to
        providing a holistic approach to fitness and reaching client's goals
      </Text>
      <Text
        style={{ fontSize: 20, fontFamily: "MontserratB", marginBottom: 15 }}
      >
        Services
      </Text>
      <View style={{ marginBottom: 10 }}>
        {services.map((item, idx) => {
          return (
            <Text
              key={idx}
              style={{
                color: "#6e6e6e",
                fontsize: 14,
                fontFamily: "MontserratM",
                marginBottom: 5,
              }}
            >
              {item.service}
            </Text>
          );
        })}
      </View>

      <Text
        style={{ fontSize: 20, fontFamily: "MontserratB", marginBottom: 15 }}
      >
        Certifications
      </Text>
      <Text>American councel on Exercise</Text>
    </View>
  );
};

export default MentorDetail;

const styles = StyleSheet.create({});
