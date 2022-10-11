import { View, Text, useWindowDimensions } from "react-native";
import React, { useState } from "react";
import Heading from "../../Components/AuthComponents/Heading";
import useDynamicStyling from "../../customhooks/useDynamicStyling";
import PrimaryButton from "../../Components/ui/PrimaryButton";
import { RFValue } from "react-native-responsive-fontsize";
import TertiaryButton from "../../Components/ui/TertiaryButton";

const FitnessGoalScreen = ({ navigation }) => {
  const { height } = useWindowDimensions();
  const { DynamicStyles } = useDynamicStyling();
  const [weightLoss, setWeightLoss] = useState(true);
  const [gainMuscle, setGainMuscle] = useState(false);
  const [improveFitness, setImproveFitness] = useState(false);
  const [selectValue, setSelectValue] = useState("");

  const WeightLossBtnHandler = () => {
    setSelectValue("beginner");
    setWeightLoss(true);
    setGainMuscle(false);
    setImproveFitness(false);
  };
  const GainMuscleBtnHandler = () => {
    setSelectValue("intermediate");
    setWeightLoss(false);
    setGainMuscle(true);
    setImproveFitness(false);
  };
  const ImproveFitnessBtnHandler = () => {
    setSelectValue("advanced");
    setWeightLoss(false);
    setGainMuscle(false);
    setImproveFitness(true);
  };
  return (
    <View
      style={{
        flex: 1,
        paddingTop: height > 700 ? DynamicStyles(80) : DynamicStyles(90),
        alignItems: "flex-start",
        paddingHorizontal: DynamicStyles(16),
        backgroundColor: "#FCFCFC",
        justifyContent: "space-between",
      }}
    >
      <View style={{ alignSelf: "flex-start" }}>
        <Text
          style={{
            fontSize: RFValue(14, 667),
            lineHeight: 18.23,
            fontWeight: "500",
            fontFamily: "DM_SansR",
          }}
        >
          step 8 of 8
        </Text>
        <Heading>What's your fintess Goal ?</Heading>
      </View>

      <View
        style={{
          width: "100%",
          justifyContent: "space-between",
          height: 200,
        }}
      >
        <TertiaryButton
          alignItems={"center"}
          tintColor={weightLoss === true ? "#ffffff" : "#000000"}
          backgroundColor={weightLoss === true ? "#000000" : "#fcfcfc"}
          textColor={weightLoss === true ? "#ffffff" : "#000000"}
          borderColor={"#dcdcdc"}
          onPress={WeightLossBtnHandler}
          source={require("../../assets/Images/dashboard.png")}
        >
          Weight Loss
        </TertiaryButton>
        <TertiaryButton
          alignItems={"center"}
          backgroundColor={gainMuscle === true ? "#000000" : "#fcfcfc"}
          tintColor={gainMuscle === true ? "#ffffff" : "#000000"}
          textColor={gainMuscle === true ? "#ffffff" : "#000000"}
          borderColor={"#dcdcdc"}
          onPress={GainMuscleBtnHandler}
          source={require("../../assets/Images/weight.png")}
        >
          Gain Muscle
        </TertiaryButton>
        <TertiaryButton
          alignItems={"center"}
          backgroundColor={improveFitness === true ? "#000000" : "#fcfcfc"}
          tintColor={improveFitness === true ? "#ffffff" : "#000000"}
          textColor={improveFitness === true ? "#ffffff" : "#000000"}
          borderColor={"#dcdcdc"}
          onPress={ImproveFitnessBtnHandler}
          source={require("../../assets/Images/dumbl.png")}
        >
          Improve Fitness
        </TertiaryButton>
      </View>
      <View style={{ width: "100%", marginVertical: DynamicStyles(10) }}>
        <PrimaryButton
          backgroundColor={"#B0C929"}
          textColor={"#FFFFFF"}
          borderColor={"#B0C929"}
          onPress={() => navigation.navigate("authentication")}
        >
          Finish Steps
        </PrimaryButton>
      </View>
    </View>
  );
};

export default FitnessGoalScreen;
