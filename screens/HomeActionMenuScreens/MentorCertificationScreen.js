import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../constants/Constants";
import { RFValue } from "react-native-responsive-fontsize";
import useDynamicStyling from "../../customhooks/useDynamicStyling";

const MentorCertificationScreen = () => {
  const { DynamicStyles } = useDynamicStyling();

  return (
    <View
      style={{
        backgroundColor: COLORS.PRIMARY_100,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FlatList
        data={[
          {
            point:
              "Previous experience as a personal trainer or relevant role.",
          },
          {
            point:
              " Knowledge of various fitness programs, from basic exercises to more challenging training sessions.",
          },
          {
            point:
              "Ability to guide and motivate clients Available to work flexible hours",
          },
          {
            point:
              " Excellent communication skills Certificates in CPR and first aid",
          },
          {
            point:
              " High School Diploma; a degree in Kinesiology or Sports Science is a plus.",
          },
        ]}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        renderItem={(point) => (
          <Text
            style={{
              fontSize: RFValue(14, 667),
              lineHeight: DynamicStyles(20),
              textDecorationLine: "underline",
              textAlign: "left",
              textTransform: "capitalize",
              fontFamily: "MontserratB",
              marginVertical: DynamicStyles(10),
              color: "#6e6e6e",
            }}
          >
            {point.item.point}
          </Text>
        )}
      />
    </View>
  );
};
export default MentorCertificationScreen;
const styles = StyleSheet.create({});
