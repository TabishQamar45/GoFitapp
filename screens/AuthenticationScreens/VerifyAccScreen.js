import {
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
  TextInput,
} from "react-native";
import React, { useRef, useState } from "react";
import Heading from "../../Components/AuthComponents/Heading";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Description from "../../Components/AuthComponents/Description";
import TextFieldInput from "../../Components/AuthComponents/TextFieldInput";
import TextFieldTitle from "../../Components/AuthComponents/TextFieldTitle";
import PrimaryButton from "../../Components/ui/PrimaryButton";
import TertiaryButton from "../../Components/ui/TertiaryButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import useDynamicStyling from "../../customhooks/useDynamicStyling";

const VerifyAccScreen = () => {
  const [firstDigit, setFirstDigit] = useState("");
  const [secondDigit, setSecondDigit] = useState("");
  const [thirdDigit, setThirdDigit] = useState("");
  const [fourthDigit, setFourthDigit] = useState("");
  const inputRef = useRef();
  const inputRef_2 = useRef();
  const inputRef_3 = useRef();
  const inputRef_4 = useRef();

  const navigation = useNavigation();
  const { DynamicStyles } = useDynamicStyling();
  const { height, width } = useWindowDimensions();
  return (
    <KeyboardAwareScrollView style={{ flex: 1, backgroundColor: "#FCFCFC" }}>
      <View
        style={{
          flex: 1,
          paddingTop: height > 700 ? DynamicStyles(80) : DynamicStyles(100),
          alignItems: "flex-start",
          paddingHorizontal: DynamicStyles(16),
        }}
      >
        {/* <View style={{ width: "10%" }}>
          <TouchableOpacity
            style={{ marginVertical: DynamicStyles(10) }}
            onPress={() => navigation.navigate("forgot-pass")}
          >
            <Ionicons name="arrow-back" size={DynamicStyles(26)} />
          </TouchableOpacity>
        </View> */}
        <View style={{ width: "90%" }}>
          <Heading>Verify Account</Heading>
        </View>
        <View style={{ width: "95%", marginVertical: DynamicStyles(10) }}>
          <Description>
            Verify your account by entering verification code we sent to{" "}
            <Text style={{ color: "#B0C929" }}> johnwelles@gmail.com</Text>
          </Description>
        </View>
        <View
          style={{
            marginVertical:
              height < 700 ? DynamicStyles(50) : DynamicStyles(60),
            width: "100%",
          }}
        >
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <TextInput
              keyboardType="number-pad"
              ref={inputRef}
              value={firstDigit}
              onChangeText={(value) => {
                setFirstDigit(value);
                value !== "" ? inputRef_2.current.focus() : null;
              }}
              maxLength={1}
              style={{
                textAlign: "center",
                backgroundColor: "#f5f5f5",
                borderRadius: DynamicStyles(10),
                borderWidth: DynamicStyles(1),
                height: width / DynamicStyles(6),
                width: "15%",
                color: "#303841",
                fontSize: DynamicStyles(20),
                fontFamily: "MontserratB",
              }}
            />
            <TextInput
              keyboardType="number-pad"
              maxLength={1}
              ref={inputRef_2}
              value={secondDigit}
              onChangeText={(value) => {
                setSecondDigit(value);
                value !== "" ? inputRef_3.current.focus() : null;
              }}
              style={{
                textAlign: "center",
                backgroundColor: "#f5f5f5",
                borderRadius: DynamicStyles(10),
                borderWidth: DynamicStyles(1),
                height: width / DynamicStyles(6),
                width: "15%",
                color: "#303841",
                fontSize: DynamicStyles(20),
                fontFamily: "MontserratB",
              }}
            />
            <TextInput
              keyboardType="number-pad"
              maxLength={1}
              ref={inputRef_3}
              value={thirdDigit}
              onChangeText={(value) => {
                setThirdDigit(value);
                value !== "" ? inputRef_4.current.focus() : null;
              }}
              style={{
                textAlign: "center",
                backgroundColor: "#f5f5f5",
                borderRadius: DynamicStyles(10),
                borderWidth: DynamicStyles(1),
                height: width / DynamicStyles(6),
                width: "15%",
                color: "#303841",
                fontSize: DynamicStyles(20),
                fontFamily: "MontserratB",
              }}
            />
            <TextInput
              keyboardType="number-pad"
              maxLength={1}
              ref={inputRef_4}
              value={fourthDigit}
              onChangeText={(value) => {
                setFourthDigit(value);
                value !== "" ? inputRef.current.focus() : null;
              }}
              style={{
                textAlign: "center",
                backgroundColor: "#f5f5f5",
                borderRadius: DynamicStyles(10),
                borderWidth: DynamicStyles(1),
                height: width / DynamicStyles(6),
                width: "15%",
                color: "#303841",
                fontSize: DynamicStyles(20),
                fontFamily: "MontserratB",
              }}
            />
          </View>
        </View>
        <View
          style={{
            width: "100%",
            marginVertical:
              height < 700 ? DynamicStyles(100) : DynamicStyles(105),
          }}
        >
          <PrimaryButton
            backgroundColor={"#B0C929"}
            textColor={"#FFFFFF"}
            borderColor={"#B0C929"}
          >
            Reset Password
          </PrimaryButton>
          <TouchableOpacity>
            <Text
              style={{
                marginVertical: DynamicStyles(10),
                textAlign: "center",
                alignSelf: "center",
                fontFamily: "MontserratR",
                borderBottomColor: "black",
                borderBottomWidth: 0.5,
                width: "18%",
              }}
            >
              Resend
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default VerifyAccScreen;
