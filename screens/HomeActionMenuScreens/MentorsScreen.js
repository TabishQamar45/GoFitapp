import { View, Text, FlatList, SafeAreaView } from "react-native";
import React from "react";
import MentorCard from "../../Components/MentorComponents/MentorCard";
import useDynamicStyling from "../../customhooks/useDynamicStyling";
import { COLORS } from "../../constants/Constants";

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
  const { DynamicStyles } = useDynamicStyling();
  const renderItem = ({ item }) => <MentorCard />;
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.PRIMARY_100,
      }}
    >
      {/* <MentorCard></MentorCard> */}

      <FlatList
        data={mentors}
        contentContainerStyle={{ alignItems: "center" }}
        renderItem={renderItem}
        // keyExtractor={(item) => item.id}
        numColumns={2}
        key={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default MentorsScreen;
