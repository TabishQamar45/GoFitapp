import { View, Text, FlatList, SafeAreaView } from "react-native";
import React from "react";
import MentorCard from "../../Components/MentorComponents/MentorCard";
import useDynamicStyling from "../../customhooks/useDynamicStyling";
import { COLORS } from "../../constants/Constants";
import { useNavigation } from "@react-navigation/native";
import MentorDivider from "../../Components/MentorComponents/MentorDivider";

const mentors = [
  { id: 1, name: "Ali Raza", address: "Islamabad, Pakistan" },
  { id: 2, name: "Ahmad Butt", address: "Rawalpindi Punjab, Pakistan" },
  { id: 3, name: "Shakeel Gujjar", address: "Lahore Punjab, Pakistan" },
  { id: 4, name: "Bilal Zafar", address: "Islamabad , Pakistan" },
  { id: 5, name: "Rukhsana Rehman", address: "Lahore Punjab, Pakistan" },
  { id: 6, name: "Shabana Balqees", address: "Sahiwal Punjab, Pakistan" },
];

const MentorsScreen = () => {
  const { navigation } = useNavigation();
  const { DynamicStyles } = useDynamicStyling();
  const renderItem = ({ item }) => <MentorCard />;
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.PRIMARY_100,
        padding: DynamicStyles(15),
      }}
    >
      <FlatList
        keyExtractor={(mentor) => mentor.id}
        data={mentors}
        showsVerticalScrollIndicator={false}
        renderItem={(mentor) => (
          <>
            <MentorCard
              pressable={false}
              name={mentor.item.name}
              address={mentor.item.address}
              navigation={navigation}
            />
            {/* <MentorDivider /> */}
          </>
        )}
      />
    </SafeAreaView>
  );
};

export default MentorsScreen;
