import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ProductDisplay = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("ProductDetail");
      }}
      style={{ margin: 20 }}
      activeOpacity={0.80}
    >
      <View
        style={{
          width: 150,
          height: 200,
          backgroundColor: "#f4f34b",
          borderRadius: 10,
        }}
      ></View>
      <Text
        style={{
          fontSize: 14,
          fontWeight: "bold",
          width: 150,
          marginTop: 5,
          color: "#555555",
        }}
      >
        Gold Standard 100% WHEY
      </Text>
      <Text
        style={{
          fontSize: 14,
          fontWeight: "bold",
          width: 150,
          marginTop: 5,
          color: "#bab9be",
        }}
      >
        $ 59.99
      </Text>
    </TouchableOpacity>
  );
};

export default ProductDisplay;

const styles = StyleSheet.create({});
