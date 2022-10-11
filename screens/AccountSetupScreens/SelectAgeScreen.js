import {
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import Heading from "../../Components/AuthComponents/Heading";
import Description from "../../Components/AuthComponents/Description";
import useDynamicStyling from "../../customhooks/useDynamicStyling";
import PrimaryButton from "../../Components/ui/PrimaryButton";
import { ageData, COLORS } from "../../constants/Constants";
import { RFValue } from "react-native-responsive-fontsize";

const SelectAgeScreen = ({ navigation }) => {
  const { height } = useWindowDimensions();
  const { DynamicStyles } = useDynamicStyling();
  const [age, setAge] = useState("");
  const pickerData = (data) => {
    return (
      data.length > 0 &&
      data.map((val, index) => (
        <Picker.Item color={"#4d5961"} label={val} value={val} key={index} />
      ))
    );
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
          step 3 of 8
        </Text>
        <Heading>How Old Are You?</Heading>
        <Description>
          Age in years. This will help us to personalize an exercise program
          plan that suits you
        </Description>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
          width: 100,
          //   borderWidth: 2,
        }}
      >
        <Picker
          selectedValue={age}
          style={{ justifyContent: "center", height: 100, width: 200 }}
          itemStyle={{
            fontFamily: "MontserratR",
            fontSize: RFValue(18, 667),
            fontWeight: "500",
            justifyContent: "center",
            alignItems: "center",
          }}
          onValueChange={(itemValue, itemIndex) => setAge(itemValue)}
        >
          {pickerData(ageData)}
        </Picker>
      </View>
      <View style={{ width: "100%", marginVertical: DynamicStyles(20) }}>
        <PrimaryButton
          backgroundColor={"#B0C929"}
          textColor={"#FFFFFF"}
          borderColor={"#B0C929"}
          onPress={() => navigation.navigate("select-weight")}
        >
          Next Steps
        </PrimaryButton>
      </View>
    </View>
  );
};

export default SelectAgeScreen;
