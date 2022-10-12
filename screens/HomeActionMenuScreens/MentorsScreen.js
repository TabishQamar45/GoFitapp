import { View, Text, FlatList, SafeAreaView } from "react-native";
import React from "react";
import MentorCard from "../../Components/MentorComponents/MentorCard";

const mentors = [
  { id: 1, text: "21 Vitamins & Minerals" },
  { id: 2, text: "21 Vitamins & Minerals" },
  { id: 3, text: "21 Vitamins & Minerals" },
  { id: 4, text: "21 Vitamins & Minerals" },
  { id: 5, text: "21 Vitamins & Minerals" },
  { id: 6, text: "21 Vitamins & Minerals" },
  { id: 7, text: "21 Vitamins & Minerals" },
  { id: 8, text: "21 Vitamins & Minerals" },
  { id: 9, text: "21 Vitamins & Minerals" },
  { id: 10, text: "21 Vitamins & Minerals" },
];

const MentorsScreen = () => {
  const renderItem = ({ item }) => <MentorCard />;
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      {/* <MentorCard></MentorCard> */}
      <FlatList
        data={mentors}
        renderItem={renderItem}
        // keyExtractor={(item) => item.id}
        numColumns={2}
        key={(item) => item.id}
        showsVerticalScrollIndicator={false}
      ></FlatList>
    </SafeAreaView>
  );
};

export default MentorsScreen;
