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

const RegistrationScreen = () => {
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
        {/* <View style={{ width: "10%" }}>
          <TouchableOpacity
            style={{ marginVertical: DynamicStyles(10) }}
            onPress={() => navigation.navigate("login")}
          >
            <Ionicons name="arrow-back" size={DynamicStyles(26)} />
          </TouchableOpacity>
        </View> */}
        <View style={{ width: "90%" }}>
          <Heading>Create Accounts</Heading>
        </View>
        <View style={{ width: "70%", marginVertical: DynamicStyles(10) }}>
          <Description>Please enter your credentials to proceed </Description>
        </View>
        <View style={{ marginVertical: DynamicStyles(14) }}>
          <TextFieldTitle>Full Name</TextFieldTitle>
        </View>
        <View
          style={{
            width: "100%",
          }}
        >
          <TextFieldInput placeholder={"full name"} />
        </View>
        <View style={{ marginVertical: DynamicStyles(10) }}>
          <TextFieldTitle>Phone</TextFieldTitle>
        </View>
        <View
          style={{
            width: "100%",
          }}
        >
          <TextFieldInput placeholder={"phone"} secureTextEntry={true} />
        </View>
        <View style={{ marginVertical: DynamicStyles(10) }}>
          <TextFieldTitle>Email address</TextFieldTitle>
        </View>
        <View
          style={{
            width: "100%",
          }}
        >
          <TextFieldInput placeholder={"email"} secureTextEntry={true} />
        </View>
        <View style={{ marginVertical: DynamicStyles(10) }}>
          <TextFieldTitle>Password</TextFieldTitle>
        </View>
        <View
          style={{
            width: "100%",
          }}
        >
          <TextFieldInput placeholder={"password"} secureTextEntry={true} />
        </View>

        <View style={{ width: "100%", marginVertical: DynamicStyles(10) }}>
          <PrimaryButton
            backgroundColor={"#B0C929"}
            textColor={"#FFFFFF"}
            borderColor={"#B0C929"}
          >
            Create Account
          </PrimaryButton>
        </View>
        <View
          style={{ alignSelf: "center", marginVertical: DynamicStyles(10) }}
        >
          <Text
            style={{
              fontFamily: "MontserratR",
              fontSize: RFValue(12, 667),
              fontWeight: "500",
              lineHeight: DynamicStyles(14.5),
            }}
          >
            Or Register with
          </Text>
        </View>
        <View
          style={{
            alignSelf: "center",
            width: "100%",
            marginVertical: height < 700 ? DynamicStyles(5) : DynamicStyles(7),
          }}
        >
          <TertiaryButton
            backgroundColor={"#F5F5F5"}
            borderColor={"#f5f5fd"}
            textColor={"#50565e"}
            source={require("../../assets/Images/google-icon.png")}
          >
            Connect with Google
          </TertiaryButton>
        </View>
        <View
          style={{
            alignSelf: "center",
            width: "100%",
            marginVertical: height < 700 ? DynamicStyles(5) : DynamicStyles(7),
          }}
        >
          <TertiaryButton
            backgroundColor={"#4267B2"}
            borderColor={"#4267b2"}
            textColor={"#ffffff"}
            source={require("../../assets/Images/facebook-icon.png")}
          >
            Connect with Facebook
          </TertiaryButton>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-end",
            width: "100%",
            marginVertical: DynamicStyles(10),
          }}
        >
          <Text style={{ fontFamily: "MontserratR" }}>
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("login")}>
            <Text style={{ fontFamily: "MontserratB" }}> Login!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default RegistrationScreen;
