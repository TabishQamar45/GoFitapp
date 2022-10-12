import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { Calendar } from "react-native-calendars";
import moment from "moment";
import DropDownPicker from "react-native-dropdown-picker";
import AppointmentCard from "../../Components/Appointments/AppointmentCard";
import useDynamicStyling from "../../customhooks/useDynamicStyling";
import { RFValue } from "react-native-responsive-fontsize";
import { COLORS } from "../../constants/Constants";
const HomeScreen = () => {
  const { DynamicStyles } = useDynamicStyling();
  const [selected, setSelected] = useState(moment().format("YYYY-MM-DD"));
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Leg Day", value: "leggs" },
    { label: "Chest Day", value: "chest" },
    { label: "Arms Day", value: "arms" },
    { label: "Shoulder Day", value: "shoulder" },
    { label: "Back Day", value: "back" },
  ]);
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: COLORS.PRIMARY_100,
        padding: DynamicStyles(20),
      }}
      contentContainerStyle={{ justifyContent: "space-between" }}
    >
      <View style={{ backgroundColor: "transparent" }}>
        <Text
          style={{
            fontFamily: "BebasNeue",
            fontSize: RFValue(30, 667),
            marginBottom: DynamicStyles(20),
          }}
        >
          Upcoming Appointments
        </Text>
        <AppointmentCard></AppointmentCard>
        <AppointmentCard></AppointmentCard>
        <Text
          style={{
            fontFamily: "BebasNeue",
            fontSize: RFValue(30, 667),
            marginBottom: DynamicStyles(20),
            marginTop: DynamicStyles(20),
          }}
        >
          Workout Detail
        </Text>
        <DropDownPicker
          style={{ marginBottom: DynamicStyles(20) }}
          maxHeight={DynamicStyles(500)}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          listMode="SCROLLVIEW"
        />

        {new Array(5).fill(0).map((item, idx) => {
          return (
            <View
              key={idx}
              style={{
                paddingHorizontal: DynamicStyles(10),
                paddingVertical: DynamicStyles(10),
                borderRadius: DynamicStyles(5),
                backgroundColor: "#B0C929",
                marginBottom: DynamicStyles(10),
              }}
            >
              <Text
                style={{
                  fontFamily: "MontserratM",
                  fontSize: RFValue(16, 667),
                  color: "white",
                }}
              >
                Bench press (6 reps x 4 sets)
              </Text>
            </View>
          );
        })}
      </View>
      <Calendar
        minDate={moment().subtract(40, "days").calendar()}
        maxDate={moment().add(10, "days").calendar()}
        onDayPress={(day) => {
          console.log(day.dateString);
          setSelected(day.dateString);
        }}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedColor: "#B0C929",
            selectedTextColor: "white",
            dotColor: "white",
            marked: true,
          },
        }}
        theme={{
          arrowColor: "#B0C929",
          todayTextColor: "#B0C929",
        }}
        style={{
          borderRadius: DynamicStyles(5),
          marginVertical: DynamicStyles(30),
        }}
      ></Calendar>
    </ScrollView>
  );
};

export default HomeScreen;
