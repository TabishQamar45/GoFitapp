import {
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Heading from "../../Components/AuthComponents/Heading";
import Description from "../../Components/AuthComponents/Description";
import useDynamicStyling from "../../customhooks/useDynamicStyling";
import { Ionicons } from "@expo/vector-icons";
import PrimaryButton from "../../Components/ui/PrimaryButton";
import { COLORS } from "../../constants/Constants";
import { RFValue } from "react-native-responsive-fontsize";
const GenderSelectionScreen = ({ navigation }) => {
  const { height } = useWindowDimensions();
  const { DynamicStyles } = useDynamicStyling();
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);
  const maleHandler = () => {
    setMale(true);
    setFemale(false);
  };
  const femaleHandler = () => {
    setMale(false);
    setFemale(true);
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
          step 2 of 8
        </Text>
        <Heading>Tell Us about Yourself</Heading>
        <Description>
          To give you a better experience and better results we need to know
          your gender
        </Description>
      </View>
      <View
        style={{
          alignSelf: "center",
          justifyContent: "space-evenly",
        }}
      >
        <TouchableOpacity onPress={maleHandler}>
          <View
            style={{
              height: height / 4,
              width: height / 4,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: height / 8,
              overflow: "hidden",
              backgroundColor: male === true ? "#b0c929" : "#F5F5F5",
              marginVertical: DynamicStyles(10),
            }}
          >
            <Ionicons
              name="male-outline"
              size={DynamicStyles(50)}
              color={male === true ? "#F5F5F5" : null}
            />
            <Text
              style={{
                color: male === true ? "#F5F5F5" : null,
                fontFamily: male === true ? "MontserratB" : "MontserratR",
                fontWeight: "400",
                fontSize: RFValue(14, 667),
              }}
            >
              Male
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={femaleHandler}>
          <View
            style={{
              height: height / 4,
              width: height / 4,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: height / 8,
              overflow: "hidden",
              borderColor: "red",
              backgroundColor: female === true ? "#b0c929" : "#F5F5F5",
            }}
          >
            <Ionicons
              name="female-outline"
              size={DynamicStyles(50)}
              color={female === true ? "#F5F5F5" : null}
            />
            <Text
              style={{
                color: female === true ? "#F5F5F5" : null,
                fontFamily: female === true ? "MontserratB" : "MontserratR",
                fontWeight: "400",
                fontSize: RFValue(14, 667),
              }}
            >
              Female
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ width: "100%", marginVertical: DynamicStyles(20) }}>
        <PrimaryButton
          backgroundColor={"#B0C929"}
          borderColor={"#B0C929"}
          textColor={"#FFFFFF"}
          onPress={() => navigation.navigate("select-age")}
        >
          Next Steps
        </PrimaryButton>
      </View>
    </View>
  );
};

export default GenderSelectionScreen;
