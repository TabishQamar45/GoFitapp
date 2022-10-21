import {
  StyleSheet,
  Text,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { COLORS } from "../../constants/Constants";
import { RFValue } from "react-native-responsive-fontsize";
import useDynamicStyling from "../../customhooks/useDynamicStyling";

const MentorAboutScreen = () => {
  const { DynamicStyles } = useDynamicStyling();
  return (
    <ScrollView style={{ backgroundColor: COLORS.PRIMARY_100,flex:1, }}>
      <Text
        style={{
          fontSize: RFValue(14, 667),
          lineHeight:DynamicStyles(20),
          letterSpacing:DynamicStyles(0.2),
          textDecorationLine:'underline',
          textAlign:'justify',
          textTransform:'capitalize',
          fontFamily: "MontserratR",
          marginVertical: DynamicStyles(15),
          color: "#6e6e6e",
        }}
      >
        I care deeply about my clients, and there’s nothing of more value to me
        than helping somebody go through an experience that makes them happy,
        confident, and strong. I realize how being overweight affects many
        aspects of your life, and I want to be there for you and help you
        discover the benefits and joys of training that helped me become the
        person I am today. I’m here to be your personal guide on every step of
        the journey.
      </Text>
    </ScrollView>
  );
};

export default MentorAboutScreen;

const styles = StyleSheet.create({});
