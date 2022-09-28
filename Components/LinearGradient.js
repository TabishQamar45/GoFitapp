import { LinearGradientProps } from "react-native-linear-gradient";
import { SafeAreaView } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import React from "react";

const LinearGradient = ({ children, colors }) => {
  return (
    <LinearGradient colors={colors}>
      <SafeAreaView>{children}</SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});
export default LinearGradient;
