import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Platform,
  PixelRatio,
  useWindowDimensions,
} from "react-native";
import React from "react";
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
const ForgotPassScreen = () => {
  const navigation = useNavigation();
  const { DynamicStyles } = useDynamicStyling();
  const { height } = useWindowDimensions();
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
        <View style={{ width: "90%" }}>
          <Heading>Forgot Password</Heading>
        </View>

        <View style={{ width: "85%", marginVertical: DynamicStyles(10) }}>
          <Description>
            Please enter your email below to receive your password reset code.
          </Description>
        </View>
        <View
          style={{
            marginVertical:
              height < 700 ? DynamicStyles(40) : DynamicStyles(50),
            width: "100%",
          }}
        >
          <View
            style={{
              marginVertical:
                height < 700 ? DynamicStyles(10) : DynamicStyles(20),
            }}
          >
            <TextFieldTitle>Email address</TextFieldTitle>
          </View>
          <View
            style={{
              width: "100%",
            }}
          >
            <TextFieldInput placeholder={"email"} />
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
            onPress={() => navigation.navigate("verify-acc")}
          >
            Reset Password
          </PrimaryButton>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default ForgotPassScreen;
