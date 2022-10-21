import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "../../constants/Constants";
import ProfileOptionComponent from "../../Components/ProfileOptionsComponent/ProfileOptionComponent";
import MentorDivider from "../../Components/MentorComponents/MentorDivider";

const options = [
  {
    icon: require("../../assets/Images/profile.png"),
    text: "Edit Profile",
  },
  {
    icon: require("../../assets/Images/notification.png"),
    text: "Notifications",
  },
  // {
  //   icon: require("../../assets/Images/profile.png"),
  //   text: "Edit Profile",
  // },
];

const ProfileOptionsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.PRIMARY_100 }}>
      <ProfileOptionComponent
        icon={require("../../assets/Images/profile.png")}
        text={"Edit Profile"}
        onPress={() => navigation.navigate("edit-profile")}
      />
      <ProfileOptionComponent
        icon={require("../../assets/Images/notification.png")}
        text={"Notification"}
        onPress={() => navigation.navigate("edit-profile")}
      />
    </View>
  );
};

export default ProfileOptionsScreen;
const styles = StyleSheet.create({});
