import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import mentorImage from "../../assets/Images/mentor.png";
import { useNavigation } from "@react-navigation/native";

const MentorCard = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("MentorDetail");
      }}
      activeOpacity={1}
      style={{
        margin: 20,
        marginHorizontal: 40,
        alignItems: "center",
      }}
    >
      <View style={{ height: 112, width: 112 }}>
        <Image
          style={{ width: "100%", height: "100%" }}
          source={mentorImage}
        ></Image>
      </View>
      <Text
        style={{
          fontFamily: "MontserratB",
          fontSize: 14,
          marginTop: 20,
        }}
      >
        Sophie Divine
      </Text>
    </TouchableOpacity>
  );
};

export default MentorCard;

const styles = StyleSheet.create({});
