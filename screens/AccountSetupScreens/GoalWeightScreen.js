import {
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import Heading from "../../Components/AuthComponents/Heading";
import Description from "../../Components/AuthComponents/Description";
import useDynamicStyling from "../../customhooks/useDynamicStyling";
import { Ionicons } from "@expo/vector-icons";
import PrimaryButton from "../../Components/ui/PrimaryButton";
import { RFValue } from "react-native-responsive-fontsize";
import SwitchSelector from "react-native-switch-selector";

const options = [
  {
    label: "LBS",
    value: "LBS",
    testID: "switch-one",
    accessibilityLabel: "switch-one",
  },
  {
    label: "KG",
    value: "KG",
    testID: "switch-one-thirty",
    accessibilityLabel: "switch-one-thirty",
  },
];
const GoalWeightScreen = ({ navigation }) => {
  const { height, width } = useWindowDimensions();
  const { DynamicStyles } = useDynamicStyling();
  const [weight, setWeight] = useState(0);
  const [weightUnit, setWeightUnit] = useState(0);

  useEffect(() => console.log("weight", weightUnit), []);

  const selectWeightHandler = (value) => {
    setWeightUnit(value);
    console.log(value);
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
          step 5 of 8
        </Text>
        <Heading>What's your goal weight?</Heading>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <SwitchSelector
          options={options}
          initial={0}
          onPress={selectWeightHandler}
          textColor={"#000000"}
          backgroundColor={"#d7d7d7"}
          style={{ width: DynamicStyles(100) }}
          borderRadius={8}
        />
      </View>
      <View
        style={{
          alignSelf: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextInput
            keyboardType="numeric"
            value={weight}
            // placeholder={weightUnit}
            onChangeText={(text) => setWeight(text)}
            style={{
              backgroundColor: "#f5f5f5",
              borderRadius: DynamicStyles(10),
              borderWidth: DynamicStyles(1),
              borderColor: "#d7d7d7",
              paddingHorizontal: DynamicStyles(20),
              height: width / DynamicStyles(6),
              width: "100%",
              fontFamily: "MontserratR",
              fontSize: RFValue(14, 667),
              lineHeight: DynamicStyles(17),
              fontWeight: "500",
              color: "#303841",
              textAlign: "center",
            }}
          />
        </View>
      </View>
      <View style={{ width: "100%", marginVertical: DynamicStyles(20) }}>
        <PrimaryButton
          backgroundColor={"#B0C929"}
          textColor={"#FFFFFF"}
          borderColor={"#B0C929"}
          onPress={() => navigation.navigate("select-height")}
        >
          Next Steps
        </PrimaryButton>
      </View>
    </View>
  );
};

export default GoalWeightScreen;
