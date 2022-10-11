import {
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import Heading from "../../Components/AuthComponents/Heading";
import Description from "../../Components/AuthComponents/Description";
import useDynamicStyling from "../../customhooks/useDynamicStyling";
import { Ionicons } from "@expo/vector-icons";
import PrimaryButton from "../../Components/ui/PrimaryButton";
import { RFValue } from "react-native-responsive-fontsize";
import SwitchSelector from "react-native-switch-selector";
import { FavoriteData as DATA } from "../../constants/Constants";

const renderFavOption = ({ item }) => {
  return (
    <TouchableOpacity onPress={() => console.log(item.id)}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginHorizontal: 25,
          overflow: "hidden",
        }}
      >
        <Image source={item.item} />
        <Text
          style={{
            fontSize: 14,
            fontFamily: "DM_SansR",
            fontWeight: "500",
            lineHeight: 18,
            marginVertical: 5,
          }}
        >
          {item.text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const SelectFavScreen = ({ navigation }) => {
  const { height } = useWindowDimensions();
  const { DynamicStyles } = useDynamicStyling();
  return (
    <View
      style={{
        flex: 1,
        paddingTop: height > 700 ? DynamicStyles(80) : DynamicStyles(90),
        alignItems: "flex-start",
        paddingHorizontal: DynamicStyles(16),
        backgroundColor: "#FCFCFC",
      }}
    >
      <View style={{ alignSelf: "flex-start" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Text
            style={{
              fontSize: RFValue(14, 667),
              lineHeight: 18.23,
              fontWeight: "500",
              fontFamily: "DM_SansR",
            }}
          >
            Step 1 of 8
          </Text>
        </View>

        <Heading>Select Your Favorite</Heading>
      </View>
      <FlatList
        style={{
          alignSelf: "center",
          paddingVertical: DynamicStyles(30),
        }}
        data={DATA}
        renderItem={renderFavOption}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
      <View
        style={{
          width: "100%",
          marginVertical: DynamicStyles(20),
        }}
      >
        <PrimaryButton
          backgroundColor={"#B0C929"}
          textColor={"#FFFFFF"}
          borderColor={"#B0C929"}
          onPress={() => navigation.navigate("gender-Selection")}
        >
          Next Steps
        </PrimaryButton>
      </View>
    </View>
  );
};

export default SelectFavScreen;
