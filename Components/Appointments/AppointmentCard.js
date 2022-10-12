import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const AppointmentCard = () => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
      }}
      disabled={true}
    >
      <View
        style={{
          flex: 1,
          height: 90,
          backgroundColor: "#D09B29",
          alignItems: "center",
          justifyContent: "center",
          borderTopLeftRadius: 8,
          borderBottomLeftRadius: 8,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 12,
            fontWeight: "400",
            lineHeight: 14.63,
          }}
        >
          August
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 48,
            fontWeight: "500",
            lineHeight: 58.51,
          }}
        >
          14
        </Text>
      </View>
      <View
        style={{
          flex: 3,
          height: 90,
          backgroundColor: "#B0C929",
          borderTopRightRadius: 8,
          borderBottomRightRadius: 8,
        }}
      >
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 9,
            marginVertical: 5,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 24,
              fontWeight: "500",
              lineHeight: 29.26,
            }}
          >
            Yoga Session
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 12,
              fontWeight: "500",
              lineHeight: 14.63,
            }}
          >
            9:00 am
          </Text>
        </View>

        <Text
          style={{
            color: "white",
            fontSize: 16,
            fontWeight: "400",
            marginLeft: 9,
          }}
        >
          Trainer: Dr. Jhon Doe
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default AppointmentCard;

const styles = StyleSheet.create({});
