import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import useDynamicStyling from "../../customhooks/useDynamicStyling";
import { RFValue } from "react-native-responsive-fontsize";
import { COLORS, ICONS } from "../../constants/Constants";

const MentorCard = ({ name, bio, address }) => {
  const navigation = useNavigation();
  const { DynamicStyles } = useDynamicStyling();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("MentorDetail", {
          name: name,
          address: address,
        })
      }
      style={{
        marginVertical: DynamicStyles(10),
        height: DynamicStyles(320),
        borderTopRightRadius: DynamicStyles(20),
        borderTopLeftRadius: DynamicStyles(20),
        borderRadius: DynamicStyles(20),
        overflow: "hidden",
        backgroundColor: COLORS.PRIMARY_200,
      }}
    >
      <View style={{ height: DynamicStyles(120), backgroundColor: "yellow" }}>
        <Image
          style={{ height: "100%", width: "100%" }}
          source={require("../../assets/Images/images.png")}
        />
      </View>
      <View
        style={{
          position: "absolute",
          top: DynamicStyles(70),
          alignSelf: "center",
          backgroundColor: COLORS.PRIMARY_200,
          borderRadius: DynamicStyles(50),
          overflow: "hidden",
        }}
      >
        <Image source={require("../../assets/Images/Ellipse.png")} />
      </View>
      <View
        style={{
          alignItems: "center",
          marginTop: DynamicStyles(70),
        }}
      >
        <Text
          style={{
            fontSize: RFValue(24, 667),
            fontWeight: "500",
            color: COLORS.PRIMARY_100,
            fontFamily: "BebasNeue",
          }}
        >
          {name}
        </Text>
        <Text
          style={{
            fontFamily: "MontserratB",
            fontWeight: "500",
            fontSize: RFValue(16, 667),
            lineHeight: DynamicStyles(20),
            color: COLORS.PRIMARY_100,
          }}
        >
          Certified Trainer of Weight Lifting
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={ICONS.location}
            style={{ marginRight: DynamicStyles(10) }}
          />
          <Text
            style={{
              fontSize: RFValue(16, 667),
              fontFamily: "MontserratM",
              lineHeight: DynamicStyles(20),
              color: COLORS.PRIMARY_100,
              fontWeight: "500",
            }}
          >
            {address}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MentorCard;
