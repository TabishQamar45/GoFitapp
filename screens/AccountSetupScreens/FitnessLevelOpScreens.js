import { View, Text, useWindowDimensions } from "react-native";
import React, { useState } from "react";
import Heading from "../../Components/AuthComponents/Heading";
import useDynamicStyling from "../../customhooks/useDynamicStyling";
import PrimaryButton from "../../Components/ui/PrimaryButton";
import { RFValue } from "react-native-responsive-fontsize";

const FitnessLevelOpScreens = ({ navigation }) => {
  const { height } = useWindowDimensions();
  const { DynamicStyles } = useDynamicStyling();
  const [beginner, setBeginner] = useState(true);
  const [intermediate, setIntermediate] = useState(false);
  const [advanced, setAdvanced] = useState(false);
  const [selectValue, setSelectValue] = useState("");

  const BeginBtnHandler = () => {
    setSelectValue("beginner");
    setBeginner(true);
    setAdvanced(false);
    setIntermediate(false);
  };
  const InterBtnHandler = () => {
    setSelectValue("intermediate");
    setBeginner(false);
    setAdvanced(false);
    setIntermediate(true);
  };
  const AdvancedBtnHandler = () => {
    setSelectValue("advanced");
    setBeginner(false);
    setAdvanced(true);
    setIntermediate(false);
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
          step 7 of 8
        </Text>
        <Heading>What's your fintess level?</Heading>
      </View>
      <View
        style={{
          width: "100%",
          justifyContent: "space-between",
          height: 200,
        }}
      >
        <PrimaryButton
          backgroundColor={beginner === true ? "#000000" : "#fcfcfc"}
          textColor={beginner === true ? "#ffffff" : "#000000"}
          borderColor={"#dcdcdc"}
          onPress={BeginBtnHandler}
        >
          Beginner
        </PrimaryButton>
        <PrimaryButton
          backgroundColor={intermediate === true ? "#000000" : "#fcfcfc"}
          textColor={intermediate === true ? "#ffffff" : "#000000"}
          borderColor={"#dcdcdc"}
          onPress={InterBtnHandler}
        >
          Intermediate
        </PrimaryButton>
        <PrimaryButton
          backgroundColor={advanced === true ? "#000000" : "#fcfcfc"}
          textColor={advanced === true ? "#ffffff" : "#000000"}
          borderColor={"#dcdcdc"}
          onPress={AdvancedBtnHandler}
        >
          Advanced
        </PrimaryButton>
      </View>
      <View style={{ width: "100%", marginVertical: DynamicStyles(10) }}>
        <PrimaryButton
          backgroundColor={"#B0C929"}
          textColor={"#FFFFFF"}
          borderColor={"#B0C929"}
          onPress={() => navigation.navigate("fitness-goal")}
        >
          Next Steps
        </PrimaryButton>
      </View>
    </View>
  );
};

export default FitnessLevelOpScreens;
