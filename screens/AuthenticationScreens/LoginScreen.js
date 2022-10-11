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
import { useSafeAreaInsets } from "react-native-safe-area-context";

const LoginScreen = () => {
  const Insets = useSafeAreaInsets();
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
          <Heading>Welcome to Pro Fitness!</Heading>
        </View>
        <View style={{ width: "50%", marginVertical: DynamicStyles(10) }}>
          <Description>Hello there, sign in to continue!</Description>
        </View>
        <View style={{ marginVertical: DynamicStyles(14) }}>
          <TextFieldTitle>Email address</TextFieldTitle>
        </View>
        <View
          style={{
            width: "100%",
          }}
        >
          <TextFieldInput placeholder={"email"} />
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
        <View
          style={{ alignSelf: "flex-end", marginVertical: DynamicStyles(10) }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("forgot-pass")}>
            <Text
              style={{
                fontFamily: "MontserratB",
                fontWeight: "600",
                fontSize: RFValue(14, 667),
                lineHeight: DynamicStyles(17.07),
              }}
            >
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: "100%", marginVertical: DynamicStyles(10) }}>
          <PrimaryButton
            backgroundColor={"#B0C929"}
            borderColor={"#b0c929"}
            textColor={"#FFFFFF"}
            onPress={() => navigation.navigate("home-screen-navigator")}
          >
            LOGIN
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
            Or Login with
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
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("register")}>
            <Text style={{ fontFamily: "MontserratB" }}>Register!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;
