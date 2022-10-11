// import { launchCamera, launchImageLibrary } from "react-native-image-picker";
// import ImagePicker from "@react-navigation-image-picker";
import SwitchSelector from "react-native-switch-selector";
import * as ImagePicker from "expo-image-picker";
import SelectDropdown from "react-native-select-dropdown";
import {
  View,
  Text,
  useWindowDimensions,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import TextFieldInput from "../../Components/AuthComponents/TextFieldInput";
import TextFieldTitle from "../../Components/AuthComponents/TextFieldTitle";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import useDynamicStyling from "../../customhooks/useDynamicStyling";
import PrimaryButton from "../../Components/ui/PrimaryButton";
import { COLORS } from "../../constants/Constants";
import { RFValue } from "react-native-responsive-fontsize";
import { Ionicons } from "@expo/vector-icons";

const options = [
  {
    label: "LBS",
    value: "LBS",
    testID: "switch-one",
    accessibilityLabel: "switch-one",
  },
  {
    label: "KG",
    value: "KG",
    testID: "switch-one-thirty",
    accessibilityLabel: "switch-one-thirty",
  },
];
const heightOpt = [
  {
    label: "FEET",
    value: "FEET",
    testID: "switch-one",
    accessibilityLabel: "switch-one",
  },
  {
    label: "CM",
    value: "CM",
    testID: "switch-one-thirty",
    accessibilityLabel: "switch-one-thirty",
  },
];

const genders = [
  { title: "Male", image: require("../../assets/Images/male.png") },
  { title: "Female", image: require("../../assets/Images/female.png") },
];
const EditProfileScreen = () => {
  const [weight, setWeight] = React.useState(0);
  const [weightUnit, setWeightUnit] = React.useState("");
  const [Height, setHeight] = React.useState(0);
  const [heightUnit, setHeightUnit] = React.useState();
  const [image, setImage] = React.useState(null);

  React.useEffect(() => console.log("height", heightUnit), []);

  const selectHeightHandler = (value) => {
    setWeightUnit(value);
  };
  React.useEffect(() => console.log("weight", weightUnit), []);

  const selectWeightHandler = (value) => {
    setWeightUnit(value);
  };
  const { DynamicStyles } = useDynamicStyling();
  const { height } = useWindowDimensions();

  // Image Uploader
  const addImage = async () => {
    let _image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(JSON.stringify(_image));
    if (!_image.cancelled) {
      setImage(_image.uri);
    }
  };

  //

  return (
    <KeyboardAwareScrollView style={{ flex: 1, backgroundColor: "#FCFCFC" }}>
      <View
        style={{
          flex: 1,
          paddingTop: height > 700 ? DynamicStyles(80) : DynamicStyles(100),
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={addImage}
          style={{
            height: DynamicStyles(120),
            width: DynamicStyles(120),
            borderRadius: DynamicStyles(60),
            overflow: "hidden",
          }}
        >
          {image && (
            <Image
              source={{ uri: image }}
              style={{
                height: "100%",
                width: "100%",
              }}
            />
          )}
          {!image && (
            <View
              style={{
                backgroundColor: "#fbbc05",
                width: "100%",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Image source={require("../../assets/Images/person.png")} />
            </View>
          )}
        </TouchableOpacity>
        <View
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            paddingVertical: DynamicStyles(20),
          }}
        >
          <View
            style={{
              width: "90%",
              height: DynamicStyles(85),
              justifyContent: "space-between",
            }}
          >
            <TextFieldTitle>Full Name</TextFieldTitle>
            <TextFieldInput placeholder={"full name"} />
          </View>
          <View
            style={{
              width: "90%",
              height: DynamicStyles(85),
              justifyContent: "space-between",
            }}
          >
            <TextFieldTitle>Phone</TextFieldTitle>
            <TextFieldInput placeholder={"ph#"} />
          </View>
          <View
            style={{
              width: "90%",
              height: DynamicStyles(85),
              justifyContent: "space-between",
            }}
          >
            <TextFieldTitle>Email address</TextFieldTitle>
            <TextFieldInput placeholder={"email"} />
          </View>
          <View
            style={{
              width: "90%",
              height: DynamicStyles(85),
              justifyContent: "space-between",
            }}
          >
            <TextFieldTitle>Weight</TextFieldTitle>
            <View
              style={{
                width: "100%",
                backgroundColor: "#f5f5f5",
                borderRadius: DynamicStyles(10),
                borderWidth: DynamicStyles(1),
                borderColor: "#d7d7d7",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  height: 55,
                  alignItems: "center",
                }}
              >
                <TextInput
                  placeholderTextColor={"#D8D9CF"}
                  placeholder={"weight"}
                  style={{
                    fontFamily: "MontserratR",
                    fontSize: RFValue(14, 667),
                    lineHeight: DynamicStyles(17),
                    fontWeight: "500",
                    color: "#303841",
                    width: "60%",
                  }}
                />
                <SwitchSelector
                  options={options}
                  initial={0}
                  onPress={selectWeightHandler}
                  textColor={"#000000"}
                  backgroundColor={"#d7d7d7"}
                  style={{ width: DynamicStyles(100) }}
                  borderRadius={8}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              width: "90%",
              height: DynamicStyles(85),
              justifyContent: "space-between",
            }}
          >
            <TextFieldTitle>Height</TextFieldTitle>
            <View
              style={{
                width: "100%",
                backgroundColor: "#f5f5f5",
                borderRadius: DynamicStyles(10),
                borderWidth: DynamicStyles(1),
                borderColor: "#d7d7d7",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  height: 55,
                  alignItems: "center",
                }}
              >
                <TextInput
                  placeholderTextColor={"#D8D9CF"}
                  placeholder={"height"}
                  style={{
                    fontFamily: "MontserratR",
                    fontSize: RFValue(14, 667),
                    lineHeight: DynamicStyles(17),
                    fontWeight: "500",
                    color: "#303841",
                    width: "60%",
                  }}
                />
                <SwitchSelector
                  options={heightOpt}
                  initial={0}
                  onPress={selectWeightHandler}
                  textColor={"#000000"}
                  backgroundColor={"#d7d7d7"}
                  style={{ width: DynamicStyles(100) }}
                  borderRadius={8}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              width: "90%",
              height: DynamicStyles(85),
              justifyContent: "space-between",
            }}
          >
            <TextFieldTitle>Gender</TextFieldTitle>
            <SelectDropdown
              data={genders}
              onSelect={(selectedItem, index) => {
                // console.log(selectedItem, index);
              }}
              dropdownIconPosition={"right"}
              renderDropdownIcon={(isOpened) => {
                return (
                  <Ionicons
                    name={isOpened ? "chevron-up" : "chevron-down"}
                    size={20}
                  />
                );
              }}
              defaultButtonText={"gender"}
              buttonStyle={{
                backgroundColor: "#f5f5f5",
                width: "100%",
                height: "65%",
                alignItems: "center",
                borderRadius: DynamicStyles(10),
                borderWidth: 1,
                borderColor: "#d7d7d7",
                fontFamily: "MontserratR",
                fontSize: RFValue(14, 667),
                lineHeight: DynamicStyles(17),
              }}
              dropdownStyle={{ backgroundColor: "#f5f5f5" }}
              renderCustomizedButtonChild={(selectedItem, index) => {
                return (
                  <View style={styles.dropdown3BtnChildStyle}>
                    {selectedItem && selectedItem.title === "Male" ? (
                      <Ionicons
                        name="male-outline"
                        size={20}
                        color={COLORS.PRIMARY_200}
                      />
                    ) : selectedItem && selectedItem.title === "Female" ? (
                      <Ionicons
                        name="female-outline"
                        size={20}
                        color={COLORS.PRIMARY_200}
                      />
                    ) : (
                      <Ionicons
                        name="male-female-outline"
                        size={20}
                        color={"#D8D9CF"}
                      />
                    )}
                    <Text
                      style={{
                        color: selectedItem ? "#000000" : "#D8D9CF",
                        fontSize: RFValue(16, 667),
                        fontFamily: "MontserratR",
                      }}
                    >
                      {selectedItem ? selectedItem.title : "gender"}
                    </Text>
                  </View>
                );
              }}
              renderCustomizedRowChild={(item, index) => {
                return (
                  <View style={styles.dropdown3RowChildStyle}>
                    <Ionicons
                      name={
                        item.title === "Male"
                          ? "male-outline"
                          : "female-outline"
                      }
                      size={20}
                    />
                    <Text style={styles.dropdown3RowTxt}>{item.title}</Text>
                  </View>
                );
              }}
            />

            {/* <TextFieldInput placeholder={"gender"} /> */}
          </View>
          <View
            style={{
              width: "90%",
              height: DynamicStyles(85),
              justifyContent: "space-between",
            }}
          >
            <TextFieldTitle>Age</TextFieldTitle>
            <TextFieldInput placeholder={"age"} />
          </View>
        </View>
        <View style={{ width: "90%", marginVertical: DynamicStyles(20) }}>
          <PrimaryButton
            textColor={"#FFFFFF"}
            borderColor={COLORS.PRIMARY_200}
            backgroundColor={COLORS.PRIMARY_200}
          >
            Save
          </PrimaryButton>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  dropdown3BtnChildStyle: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  dropdown3RowChildStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 18,
  },
  dropdownRowImage: {
    width: 20,
    height: 20,
    resizeMode: "cover",
    backgroundColor: "#f5f5f5",
  },
});
