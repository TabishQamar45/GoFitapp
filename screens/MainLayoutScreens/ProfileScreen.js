import { View, Text, useWindowDimensions } from "react-native";
import React from "react";
import useDynamicStyling from "../../customhooks/useDynamicStyling";
import UserImg from "../../Components/UserProfileInformation/UserImg";
import UserName from "../../Components/UserProfileInformation/UserName";
import UserType from "../../Components/UserProfileInformation/UserType";
import { COLORS } from "../../constants/Constants";
import Information from "../../Components/ProfileScreenComponent/Information";
import Unit from "../../Components/ProfileScreenComponent/Unit";
import Value from "../../Components/ProfileScreenComponent/Value";

const ProfileScreen = () => {
  const { height } = useWindowDimensions();
  const { DynamicStyles } = useDynamicStyling();
  return (
    <View
      style={{
        flex: 1,
        paddingTop: height > 700 ? DynamicStyles(80) : DynamicStyles(90),
        paddingHorizontal: DynamicStyles(16),
        backgroundColor: COLORS.PRIMARY_100,
      }}
    >
      <View
        style={{
          justifyContent: "space-evenly",
          alignItems: "center",
          height: DynamicStyles(180),
        }}
      >
        <UserImg
          height={DynamicStyles(104)}
          width={DynamicStyles(104)}
          borderRadius={DynamicStyles(52)}
        />
        <UserName alignSelf={"center"}>Sophia</UserName>
        <UserType>Basic Member</UserType>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "80%",
          justifyContent: "space-around",
          alignSelf: "center",
          marginVertical: DynamicStyles(20),
          height: DynamicStyles(36),
        }}
      >
        <View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Value>55</Value>
            <Unit>kg</Unit>
          </View>
          <Information>Weight</Information>
        </View>
        <View
          style={{
            height: "60%",
            alignSelf: "center",
            width: 1,
            backgroundColor: "#909090",
          }}
        />
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Value>170</Value>
            <Unit>cm</Unit>
          </View>
          <Information>Height</Information>
        </View>
        <View
          style={{
            height: "60%",
            alignSelf: "center",
            width: 1,
            backgroundColor: "#909090",
          }}
        />
        <View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Value>18</Value>
            <Unit>year</Unit>
          </View>
          <Information>Age</Information>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
