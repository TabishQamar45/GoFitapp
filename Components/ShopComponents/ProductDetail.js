import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import dumbell from "../../assets/Images/Dumbel.png";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Features = [
  { id: 1, text: "21 Vitamins & Minerals" },
  { id: 2, text: "21 Vitamins & Minerals" },
  { id: 3, text: "21 Vitamins & Minerals" },
  { id: 4, text: "21 Vitamins & Minerals" },
  { id: 5, text: "21 Vitamins & Minerals" },
  { id: 6, text: "21 Vitamins & Minerals" },
];

const ProductDetail = () => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: "#433838",
        marginTop: insets.top + 40,
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          width: "100%",
          height: 400,
          // borderWidth: 1,
          // borderColor: "#433838",
        }}
      >
        <Image
          style={{ width: "100%", height: "100%" }}
          source={dumbell}
        ></Image>
      </View>
      <View style={{ paddingHorizontal: 10 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>OPTI-MEN</Text>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#bab9be" }}>
            $19.99
          </Text>
        </View>

        {Features.map((item, idx) => {
          return (
            <Text
              key={idx}
              style={{
                fontSize: 14,
                // fontWeight: "bold",
                color: "#000",
                marginVertical: 5,
              }}
            >
              {item.text}
            </Text>
          );
        })}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          <TouchableOpacity
            style={{
              width: "60%",
              height: 50,
              backgroundColor: "black",
              borderRadius: 6,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white" }}>ADD TO CART</Text>
          </TouchableOpacity>
          <View
            style={{
              width: "30%",
              height: 50,
              backgroundColor: "#f6f7fb",
              borderRadius: 6,
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              alignItems: "center",
              paddingHorizontal: 20,
            }}
          >
            <TouchableOpacity hitSlop={10}>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>-</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>1</Text>
            <TouchableOpacity hitSlop={10}>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({});
