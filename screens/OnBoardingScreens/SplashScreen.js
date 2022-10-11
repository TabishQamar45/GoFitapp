import { StyleSheet, Text, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import LinearGradient from "../../Components/LinearGradient";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
  const navigation = useNavigation();
  return (
    // <LinearGradient colors={['red','green','white']}>
    <View style={styles.rootContainer}>
      <Ionicons
        size={50}
        name="fitness"
        onPress={() => navigation.navigate("authentication")}
      />
    </View>
    // </LinearGradient>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#6d48ff",
    alignItems: "center",
    justifyContent: "center",
  },
});
